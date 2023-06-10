import { Router } from "express"; 

import { FindAllClientController } from "@modules/client/controllers/find-all-client.Controller";
import { CreateClientController } from "@modules/client/controllers/create-client.Controller";
import { UpdateClientController } from "@modules/client/controllers/update-client.Controller";
import { FindByCpfClientController } from "@modules/client/controllers/find-by-cpf-client.Controller";
import { DeleteClientController } from "@modules/client/controllers/delete-client.Controler";
import { AddProductToPurchaseController } from "@modules/client/controllers/add-product-to-purchase.Controller";
import { AddPurchaseToClientController } from "@modules/client/controllers/add-purchase-to-client.Controller";
import { CancelPurchaseController } from "@modules/client/controllers/cancel-purchase.Controller";
import { RemovePurchaseToClientController } from "@modules/client/controllers/remove-product-to-purchase.Controller";
import { CheckoutController } from "@modules/client/controllers/checkout.Controller";

import { validate } from "@utils/validation";
import { newAndUpdateClientValidation } from "@utils/validations/new-and-update-client-validation";

const clientRoutes = Router();

const createProductsController = new CreateClientController();
const findAllProductsController = new FindAllClientController();
const updateClientController = new UpdateClientController();
const findByCpfClientController = new FindByCpfClientController();
const deleteClientController = new DeleteClientController();
const addProductToPurchaseController = new AddProductToPurchaseController();
const addPurchaseToClientController = new AddPurchaseToClientController();
const cancelPurchaseController = new CancelPurchaseController();
const removePurchaseToClientController = new RemovePurchaseToClientController();
const checkoutController = new CheckoutController();

clientRoutes.post("", validate(newAndUpdateClientValidation), createProductsController.handle);
clientRoutes.get("", findAllProductsController.handle);
clientRoutes.put("", validate(newAndUpdateClientValidation), updateClientController.handle);
clientRoutes.put("/add-product-to-purchase", addProductToPurchaseController.handle);
clientRoutes.put("/add-purchase-to-client", addPurchaseToClientController.handle);
clientRoutes.put("/cancel-purchase", cancelPurchaseController.handle);
clientRoutes.put("/remove-product-to-purchase", removePurchaseToClientController.handle);
clientRoutes.put("/checkout", checkoutController.handle);
clientRoutes.get("/:cpf", findByCpfClientController.handle);
clientRoutes.delete("/:cpf", deleteClientController.handle);

export { clientRoutes };