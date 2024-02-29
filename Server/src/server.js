import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/crmRoutes';

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

routes(app);

app.get('/', (req, res) => res.send('App is working'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
