const { MongoClient } = require('mongodb');
require('dotenv').config();
const mongouir = process.env.MONGO_URI;


// Connection URI

// Database Name
const dbName = 'Shubham_dbs';

async function insertData() {
    try {
        const client = await MongoClient.connect(mongouir);
        const dataBase = client.db(dbName).collection('name');
        //  const data = await dataBase.findOne({ empId: 4 })
        //  const { empName } = data;
        // console.log(data);
        await dataBase.insertOne(
            {
                "family": ["lalita", "kavita", "ravieena", "aveena"],
                "name": "Shubham Srivastava"
            }
        )
        console.log("DATA UPDATED")
        client.close();
    } catch (error) {
        console.error('Error:', error);
    }
}

insertData();
