import { RootCategory } from "@/interfaces/RootCategory";

export async function getCategoryApi(): Promise<RootCategory> {
  try {
    const res = await fetch("https://yidishop-be.onrender.com/api/v1/category");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
