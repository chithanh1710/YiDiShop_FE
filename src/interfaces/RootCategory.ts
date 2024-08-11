export interface RootCategory {
  status: string;
  results: number;
  data: Data;
}

export interface Data {
  category: Category[];
}

export interface Category {
  _id: string;
  name: string;
  description: string;
  numProduct: number;
  products: any[];
  createAt: string;
}
