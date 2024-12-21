import express from "express";
import productRouter from "./routes/route_productos.js";
import cartRouter from "./routes/route_carrito.js";
import path from 'path';

const app = express();

app.use('/static', express.static(path.join(process.cwd(), "src", "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/productos", productRouter);
app.use("/api/carritos", cartRouter);

// console.log(process.cwd())
app.listen(8080, () => console.log("El server esta habilitado en puerto 8080"));
