const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://shubhamsrivastava4971:abhisheksrivastava@cluster0.89snqls.mongodb.net/';

// Database Name
const dbName = 'Shubham_dbs';

async function insertData() {
    try {
        const client = await MongoClient.connect(uri);
        const dataBase = client.db(dbName).collection('name');
        const data = await dataBase.findOne({ empId: 4 })
        const { empName } = data;
        console.log(data);
        await dataBase.updateOne({ empId: 4 }, {
            "$set": {
                "family": ["lalita", "kavita", "ravieena", "aveena"]
            }
        })
        console.log("DATA UPDATED")
        client.close();
    } catch (error) {
        console.error('Error:', error);
    }
}

insertData();
