import { socketFn } from "../../../mid/soketio.rt.js";
import { productsRepository } from "../../../repositories/product.repository.js";

export async function updateProduct(req, res, next) {
  let upd;
  try {
    upd = { ...req.body };
    console.log(upd);
  } catch (error) {
    return next(error);
  }
  try {
    const actualizada = await productsRepository.updateOne(req.params.pid, upd);
    await socketFn();
    res.json(actualizada);
  } catch (error) {
    next(error);
  }
}
