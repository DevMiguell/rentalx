/* eslint-disable import-helpers/order-imports */
import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  // A rota recebe o nome e a descrição do novo tipo de categoria
  const createCategoryService = new CreateCategoryService(categoriesRepository);

  // A rota chama o serviço de criação de categoria
  // caso o nome da categoria já exista, o serviço lança um erro
  createCategoryService.execute({ name, description });

  // A rota retorna o status 201 (created)
  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  return response.json(categoriesRepository.list());
});

export { categoriesRoutes };
