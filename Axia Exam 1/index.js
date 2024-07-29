// Emmanuel Finapri Axia Africa Exam
// QUESTION 1

// creating the express application
const express = require('express')
const app = express()
// middleware to extract the body
app.use(express.json()) // for JSON used in our body



// This get request returns a response with a normal string
app.get('/get', (req, res)=> {
    console.log("GET REQUEST")
    res.send("This GET request returns a response with normal string")
})

// This post request returns the same JSON passed to the body
app.post('/post', (req, res)=> {
    const body = req.body
    console.log("POST REQUEST")
    res.json(body)
})  

// This put request returns a response string showing “update successful”
app.put('/put', (req, res)=> {
    console.log("PUT REQUEST")
    res.send("update successful")
})  

// This delete request returns a string
app.delete('/delete', (req, res)=> {
    console.log("DELETE REQUEST")
    res.send("This is the Delete request working")
})  



// creating the listen method to start a web server and 
// listen to the connections on the specified host and port.
app.listen(3000, ()=>{
    console.log("app is running on perfectly on port 3000")
})