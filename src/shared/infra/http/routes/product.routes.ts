import { Router } from "express"; 

import { CreateProductController } from "@modules/products/controllers/create-product.Controller";
import { FindAllProductController } from "@modules/products/controllers/find-all-product.Controller";
import { UpdateProductController } from "@modules/products/controllers/update-product.Controller";
import { FindByCodeProductController } from "@modules/products/controllers/find-by-code-product.Controller";
import { DeleteProductController } from "@modules/products/controllers/delete-product.Controler";
import { ListActiveProductsController } from "@modules/products/controllers/list-active.products.Controller";
import { EnableProductController } from "@modules/products/controllers/enable-product.Controller";
import { DisableProductController } from "@modules/products/controllers/disable-product.Controller";

import { validate } from "@utils/validation";
import { newProductValidation } from "@utils/validations/new-product-validation";


const productRoutes = Router();

const createProductController = new CreateProductController();
const findAllProductController = new FindAllProductController();
const updateProductController = new UpdateProductController();
const findByCodeProductController = new FindByCodeProductController();
const deleteProductController = new DeleteProductController();
const listActiveProductsController = new ListActiveProductsController();
const enableProductController = new EnableProductController();
const disableProductController = new DisableProductController();

productRoutes.post("", validate(newProductValidation), createProductController.handle);
productRoutes.get("/active", listActiveProductsController.handle);
productRoutes.get("", findAllProductController.handle);
productRoutes.put("", updateProductController.handle);
productRoutes.put("/disable/:code", disableProductController.handle);
productRoutes.put("/enable/:code", enableProductController.handle);
productRoutes.get("/:code", findByCodeProductController.handle);
productRoutes.delete("/:code", deleteProductController.handle);

export { productRoutes };