import express from "express";
import router from "./routes";
import { resolve } from "path";

const app = express();

app.use(express.json());
app.use(router);

const clientFolder = resolve(__dirname, "client");

app.use(express.static(resolve(clientFolder, "build")));
app.use(express.static(resolve(clientFolder, "public")));

export default app;
