import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

import courseRoutes from './routes/courses';
app.use('/courses', courseRoutes)
app.listen(8080, () => {
    console.log("🚀 Server running on http://localhost:8080");
});
