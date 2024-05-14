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

    let responseData = {};

    if (color === 'BLUE') {
        responseData = { serverResponse: 'APP SERVER BLUE' };
    } else if (color === 'GREEN') {
        responseData = { serverResponse: 'APP SERVER GREEN' };
    } else {
        responseData = { error: 'Invalid deployment color' };
    }

    res.json(responseData);
});
