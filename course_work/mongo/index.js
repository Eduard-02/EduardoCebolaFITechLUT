const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Cluster31536:dumbina123@cluster31536.mg7spmr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster31536";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const collection = client.db("sample_airbnb").collection("listingsAndReviews");
    const pipeline = [
        {
          '$match': {
            'accommodates': {
              '$gt': 4
            }, 
            'price': {
              '$lt': 500
            }, 
            'amenities': 'Hair dryer'
          }
        }, {
          '$sort': {
            'price': 1
          }
        }, {
          '$project': {
            'name': 1, 
            'amenities': 1, 
            'price': 1, 
            'images': 1, 
            'description': 1
          }
        }, {
          '$limit': 20
        }
      ];

    const agg = await collection.aggregate(pipeline).toArray();
    console.log(agg);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);