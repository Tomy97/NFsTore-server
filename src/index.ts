import express from "express";
import cors from "cors";
import userRoutes from './Routes/user.routes'
import {PORT} from "./Puerto";

const app = express();
app.use(express.json());
app.use(cors());
app.use(userRoutes);


app.listen(PORT, () => {
    console.log( `Server running on port ${PORT}` );
})