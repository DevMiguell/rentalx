import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, reponse: Response) {
    const { name, description } = request.body;

    this.createSpecificationUseCase.execute({ name, description });

    reponse.status(201).send();
  }
}

export { CreateSpecificationController };
