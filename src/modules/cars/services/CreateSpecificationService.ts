import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IResquest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IResquest): void {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification not implemented.");
    }

    this.specificationRepository.create({
      description,
      name,
    });
  }
}

export { CreateSpecificationService };
