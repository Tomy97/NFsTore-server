import express from "express";
import cors from "cors";
import userRoutes from "./Routes/user.routes";
import nftRoutes from './Routes/nft.routes'
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(userRoutes);
app.use(nftRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
