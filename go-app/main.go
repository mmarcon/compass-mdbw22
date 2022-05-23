package main

import (
	"context"
	"log"
	"os"

	"github.com/jedib0t/go-pretty/v6/table"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	// Load .env file
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	// Get the MongoDB connection string from the environment variable
	uri := os.Getenv("MDB_CONNECTION_STRING")

	/************************************/
	/*** Insert aggregation code here ***/
	/************************************/
	ctx := context.TODO()

	// Set client options
	clientOptions := options.Client().ApplyURI(uri)

	// Connect to MongoDB
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	defer func() {
		if err := client.Disconnect(ctx); err != nil {
			log.Fatal(err)
		}
	}()

	// Open an aggregation cursor
	coll := client.Database("superheroes_game").Collection("games")
	cursor, err := coll.Aggregate(ctx, bson.A{
		bson.D{{"$match", bson.D{{"winner", bson.D{{"$ne", primitive.Null{}}}}}}},
		bson.D{
			{"$group",
				bson.D{
					{"_id", "$winner"},
					{"totalWins", bson.D{{"$sum", 1}}},
				},
			},
		},
		bson.D{{"$sort", bson.D{{"totalWins", -1}}}},
		bson.D{{"$limit", 10}},
		bson.D{
			{"$lookup",
				bson.D{
					{"from", "users"},
					{"localField", "_id"},
					{"foreignField", "_id"},
					{"as", "user"},
				},
			},
		},
		bson.D{
			{"$replaceWith",
				bson.D{
					{"$mergeObjects",
						bson.A{
							bson.D{
								{"$arrayElemAt",
									bson.A{
										"$user",
										0,
									},
								},
							},
							bson.D{{"totalWins", "$totalWins"}},
						},
					},
				},
			},
		},
	})
	if err != nil {
		log.Fatal(err)
	}

	/************************************/

	// Get the results from the cursor
	var results []bson.M
	if err = cursor.All(context.TODO(), &results); err != nil {
		panic(err)
	}

	// Set up the results table
	t := table.NewWriter()
	t.SetOutputMirror(os.Stdout)
	t.AppendHeader(table.Row{"#", "First Name", "Last Name", "User Name", "Country", "Total Wins"})

	// Loop through the results and add them to the table
	idx := 0
	for _, result := range results {
		idx++
		t.AppendRow([]interface{}{idx, result["firstName"], result["lastName"], result["username"], result["country"], result["totalWins"]})
	}

	// Render the table
	t.SetStyle(table.StyleColoredBlackOnGreenWhite)
	t.Render()
}
