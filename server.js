const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send('<h1>Express in h1</h1>')
})

app.listen(8080, () => {
    console.log("Server is running on http://0.0.0.0:8080");
});
