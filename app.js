const express = require('express');
const axios = require('axios');

const app = express();

app.get("/:id", (req, res) => {
    const id = req.params.id;

    const appid = "AIzaSyAPd9VvZfkQzWUwwnw3Kr4KFrHEOB4UvaU";
    const url = "https://www.googleapis.com/books/v1/volumes?key=" + appid + "&q=" + id;

    axios.get(url).then((response) => {
        if ((id.length == 10) || (id.length == 13)) {
            res.status(200).send(response.data.items[0].volumeInfo);
        } else if((id.length != 10) && (id.length != 13)) {
            res.status(400).send("Enter Correct ISBN no.")
        }
        else{
            res.status(404).send("ISBN number not found");
        }
    }).catch((err) => {
        console.log(err);
    })
})


app.listen(3000, () => {
    console.log("Server is running on PORT 3000");
})
