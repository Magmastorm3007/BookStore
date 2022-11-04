

// require express and bodyParser
const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')


// create express app
const app=express()

// define port to run express app
const  port = process.env.PORT || 5000;
app.use(express.json())
app.use('/api',require('./routes/Bookroute'))




const url='mongodb+srv://user:aloo@cluster0.ybbgwrx.mongodb.net/Bookstore'
mongoose.connect(url).then(() => {
    app.listen(port, () => {

        console.log(`Server running at http://localhost:${port} and database connected`);
        });
    },
    err  => {
    {
    console.log("Error connecting Database instance due to:", err);
    }
    });

// Listen to server
