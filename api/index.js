import express from 'express';
const app = express();
import cors from 'cors';
import { Users } from './users.js';

app.use(cors());


app.get('/', (req, res) => {
    // http://localhost:5000/?q=hn
    const { q } = req.query;

    const keys = ["first_name","last_name","email"];

    const search = (data) => {
        return data.filter((item) =>
         keys.some((key) => item[key].toLowerCase().includes(q)) 
        );
    };

    res.json(Users.splice(0,10));
});

app.listen(5000, () => console.log("API is working!"));