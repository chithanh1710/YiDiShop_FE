export interface RootBrand {
  status: string;
  results: number;
  data: DataBrand;
}

export interface DataBrand {
  brand: Brand[];
}

export interface Brand {
  _id: string;
  name: string;
  description: string;
  numProduct: number;
  products: any[];
  createAt: string;
}
