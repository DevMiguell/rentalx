import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private readonly createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, reponse: Response) {
    const { name, description } = request.body;

    this.createCategoryUseCase.execute({ name, description });

    reponse.status(201).send();
  }
}

export { CreateCategoryController };
