const express = require('express')
const app = express()
const port = 1337

// This is where you would have to handle the questions from the 
// server and return the correct answer.
var createAnswer = (question, req, res) => {
    if(question.includes('what is your name')){
        return "Gudrun";  
    }
}

// Setup "/"" endpoint for the server.
app.get('/', (req, res) => {
    var questionFromServer =  req.query.q; 
    var answer = createAnswer(questionFromServer, req, res);
    console.log("Server question: \"" + questionFromServer + "\" My answer:\"" + answer + "\"");
    res.end(answer);
})

// Start the  thing.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})