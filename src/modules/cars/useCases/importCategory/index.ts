import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepositoery = null;
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepositoery);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export{importCategoryController}