const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')
dotenv.config()

const url = process.env.URL

MongoClient.connect(url, (err, client)=>{
    if(err) throw err

    console.log("db connected...")
    module.exports = client

    const app = require('./app')
    app.listen(process.env.PORT, ()=>{
        console.log("server listening on 8000...")
    })
})