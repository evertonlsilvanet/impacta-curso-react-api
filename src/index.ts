import express from 'express';
import cors from 'cors';
import IndexRouter from "./routes/IndexRouter"

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

new IndexRouter(app);

app.listen(3333);