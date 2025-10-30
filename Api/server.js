import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getMenus } from "./Models/menu.js";
import { exec } from "child_process";

dotenv.config();

exec(`docker start ${process.env.MONGO_CONTAINER_NAME} || docker compose up` , (error, stdout, stderr) => {
    if (error) {
        console.log("Error: No se a podido iniciar el contendor de mongo");
        return;
    }

    if(stderr) console.error(stderr);
    console.log("La base de datos se ha levantado correctamente", stdout);
});

const PORT = process.env.MONGO_PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

//Menus

app.get('/menu', async (req, res) => {
    try {
        const tareas = await getMenus();
        res.json(tareas);

    }   catch (ex) {
        res.status(500).json({error : ex.message});
    }
});


// Productos 


// Mesa

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);

});



