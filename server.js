const express = require("express");

const app = express()

app.listen(80)

app.set("view engine", "ejs")

app.use(express.static('public'))
const path = require('path')
// app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/logginn", (req, res) => {
    res.render("logginn")
})

app.get("/glemtPassord", (req, res) => {
    res.render("glemtPassord")
})

app.get("/nyBruker", (req, res) => {
    res.render("nyBruker")
})
// app.get("/nyBruker", (req, res) => {
//     res.render("nyBruker")
// })