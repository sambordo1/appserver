import express from 'express';
const app = express();

app.listen(4000, () => {
    console.log("Hello from EC2 app-server on port 4000");
});

app.get('/', (req, res) => {
    res.json('Hello from EC2 app-server');
})