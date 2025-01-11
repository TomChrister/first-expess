import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const animals = [];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/json', (req, res) => {
    res.status(200).send({ test: 'Hello World' });
});

app.get('/animals', (req, res) => {
    res.status(200).json(animals);
});

app.post('/animals', (req, res) => {
    if (req.body.name) {
        animals.push(req.body.name);
        res.status(201).json({ msg: 'Content received', data: req.body });
    } else {
        res.status(400).json({ msg: 'Bad content' });
    }
});

app.listen(4000, () => {
    console.log(`Server started on port 4000!`);
});
