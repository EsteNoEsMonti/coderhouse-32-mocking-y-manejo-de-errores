import express from "express";
import { Router } from "express";

import { postProductController } from "../../controllers/api/products/controller.post.products.js";
import { getMockingProducts, getMockingProductsWithFakerJS, getProductsController } from "../../controllers/api/products/controller.getall.products.js";
import { getProductCodeController } from "../../controllers/api/products/controller.getbycode.products.js";
import { getProductIdController } from "../../controllers/api/products/controllet.getany.products.js";
import { updateProduct } from "../../controllers/api/products/controllet.put.products.js";
import { deleteProduct } from "../../controllers/api/products/controllet.delete.products.js";

export const appProducts = Router();
appProducts.use(express.json());
appProducts.use(express.urlencoded({ extended: true }));

//agregar products a la persistencia en archivo desde el servidor

appProducts.post("/", postProductController);

// consultar productos todos o con limite desde el servidor

appProducts.get("/", getProductsController);

// obtener productos por code
appProducts.get("/code/:pcd", getProductCodeController);

// obtener producto por ID

appProducts.get("/:pid", getProductIdController);

// editar un producto
appProducts.put("/:pid", updateProduct);

// eliminar un producto
appProducts.delete("/:pid", deleteProduct);

// mocking de productos
appProducts.get("/mockingproducts", getMockingProducts);
appProducts.get("/mockingproductswhitfakesjs", getMockingProductsWithFakerJS);
