const express = require("express");
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs } = require("firebase/firestore");
require("dotenv").config();

const app = express();

app.listen(80);

app.set("view engine", "ejs");

app.use(express.static("public"));
const path = require("path");
const { CLIENT_RENEG_LIMIT } = require("tls");
// app.use(express.static(path.join(__dirname, 'public')))

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
};

let userLoggedIn = false;

const fb = initializeApp(firebaseConfig);
const db = getFirestore(fb);

async function getUsers(db, user) {
  const users = collection(db, "brukere");
  const userSnapshot = await getDocs(users);
  const userList = userSnapshot.docs.map((doc) => doc.data());
  console.log(userList[0])

  userList.forEach(element => {
    if(element.email === user.email) {
        userLoggedIn = true;
        
    }
  });


}

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/logginn", (req, res) => {
  res.render("logginn", userLoggedIn);
});

app.get("/logginnBruker", (req, res) => {
  console.log(req.query);
  getUsers(db, req.query).then(() => {

    res.send(userLoggedIn);
  })

});

app.get("/velkommen", (req, res) => {

  
      res.send('velkommen');

  
  });

app.get("/glemtPassord", (req, res) => {
  res.render("glemtPassord");
});

app.get("/nyBruker", (req, res) => {
  res.render("nyBruker");
});
// app.get("/nyBruker", (req, res) => {
//     res.render("nyBruker")
// })
