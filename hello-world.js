const express = require('express');
const app = express();

app.listen(5001, () => {
    console.log("Hello from EC2 app-server on port 5001");
});

app.get('/', (req, res) => {
    res.json('Hello from EC2 app-server');
})