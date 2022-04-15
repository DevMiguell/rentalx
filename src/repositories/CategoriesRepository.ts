import { Category } from "../model/Category";

// DTO => Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category: Category = new Category();

    Object.assign(category, { name, description, createdAt: new Date() });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    return this.categories.find((category) => category.name === name);
  }
}

export { CategoriesRepository };
