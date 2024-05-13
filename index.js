import express from 'express';

const app = express();

app.listen(4000, () => {
    console.log("Server listening on port 4000");
});

app.get('/', (req, res) => {
    res.json('Hello from EC2 app-server');
});

app.get('/api/app-color', (req, res) => {
    const color = req.query.color;

    if (color === 'BLUE') {
        res.send('Returning blue');
    } else if (color === 'GREEN') {
        res.send('Returning green');
    } else {
        res.status(400).send('Invalid color');
    }
});