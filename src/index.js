import express from "express";
import { join, __dirname } from "./utils/index.js";
import productsRoutes from "./routes/products.route.js";
//settings
const app = express();
app.set("PORT", 3000);

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.json({ title: "Pagina principal de API-Products." });
});
//indico las rutas para productos
app.use("/api/products", productsRoutes)

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
