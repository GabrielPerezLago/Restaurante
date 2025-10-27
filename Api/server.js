import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getMenus } from "./Models/menu.js";

dotenv.config();

const PORT = process.env.MONGO_PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/menu', async (req, res) => {
    try {
        const tareas = await getMenus();
        res.json(tareas);

    }   catch (ex) {
        res.status(500).json({error : ex.message});
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);

});



