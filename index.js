/*
David A. Clark, Jr.
#0004796375
WDV4200-O, C202310
Assignment 3.1
*/

// Server Dependencies
const http = require("http")

// Environment Secrets
// require("dotenv").config();

// Hard-Coded Secrets
const API_KEY = "2ed3de690cmsh86a3d018b8e5ab2p1dee19jsncdb3cc1784e2"

// Other Constants
const SERVER_HOST = "127.0.0.1"
const SERVER_PORT = 3000
const API_URL = "https://wordsapiv1.p.rapidapi.com/words/?random=true"
const API_HOST = "wordsapiv1.p.rapidapi.com"

// Server Definition
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" })

    fetch(API_URL, {
        headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": API_HOST
        }
    })
        .then(res => res.json())
        .then(data => { res.write(`<p>${data.word}</p>`) })
        .catch(_ => { res.write("<p>Failure</p>") })
        .finally(() => res.end())
})

// Run Server
server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`Server Listening at http://${SERVER_HOST}:${SERVER_PORT}`)
})