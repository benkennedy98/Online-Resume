import express from "express";
import jwt from 'express-jwt';
import cors from 'cors';
import jwks from 'jwks-rsa';
import bodyParser from 'body-parser'

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/courses', (req, res) => {
    let courses = [
        {name: 'Course 1', id: 1},
        {name: 'Course 2', id: 2},
        {name: 'Course 3', id: 3}
    ]
    res.json(courses)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

