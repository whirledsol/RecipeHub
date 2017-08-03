export class Recipe {
  id: number;
  name: string;
  ingredients: Array<string>;
  genre: string;
  instructions?: Array<string>;
  difficulty?: number = -1;
  time?: number = -1;
  rating?: number = -1;
  views?: number = 0;
}
