const express = require('express');

// Task 17a
const app = express()

// Task 18
app.get('/', (req, res) => {
    // console.log(req)
    res.send('Hello from Breaddit')
})

// Task 17b
const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}`))