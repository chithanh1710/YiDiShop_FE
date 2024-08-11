import { Button } from "@/components/ui/button";
import { getCategoryApi } from "@/lib/service";

export async function NavbarCategory() {
  const { data, results } = await getCategoryApi();
  return (
    <nav>
      <div className="w-60 flex gap-2">
        {data.category.map((item) => (
          <Button key={item._id}>{item.name}</Button>
        ))}
      </div>
    </nav>
  );
}
