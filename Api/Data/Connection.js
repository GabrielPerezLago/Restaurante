import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { MongoClient } from "mongodb";

dotenv.config();

const uri = process.env.MONGO_URI
const cliente = new MongoClient(uri);

export async function connection() {
    try {
        await cliente.connect();
        const collection = cliente.db(process.env.MONGO_INITDB_DATABASE).collection('menu');
        return collection;
    } catch (ex) {
        console.log(ex.message);
    }
    
}
