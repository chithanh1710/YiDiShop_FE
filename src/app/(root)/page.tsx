import Hero from "@/components/shared/Hero";
import { ListBrandSupport } from "@/components/shared/ListBrandSupport";
import { SkeletonHero } from "@/components/shared/skeleton/SkeletonHero";
import { Suspense } from "react";

export default function page() {
  return (
    <>
      <Suspense fallback={<SkeletonHero />}>
        <section className="relative rounded-xl overflow-hidden aspect-[16/7]">
          <Hero />
        </section>
      </Suspense>
      <section className="my-16">
        <h2 className="text-3xl font-light text-center">We Supported By</h2>
        <ListBrandSupport />
      </section>
    </>
  );
}
