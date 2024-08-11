import { RootBrand } from "@/interfaces/RootBrand";

export async function getBrandApi(): Promise<RootBrand> {
  try {
    const res = await fetch(
      "https://yidishop-be.onrender.com/api/v1/brands?sort[name]=asc"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
