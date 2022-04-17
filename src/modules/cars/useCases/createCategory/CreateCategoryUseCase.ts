import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  // o constructor é um método que é executado quando o objeto é criado
  constructor(private categoriesRepository: ICategoriesRepository) {}

  // o execute é um método que é executado quando o objeto é chamado, e adiciona os dados na tabela caso não existam
  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
