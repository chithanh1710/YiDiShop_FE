import Hero from "@/components/shared/Hero";
import { SkeletonHero } from "@/components/shared/skeleton/SkeletonHero";
import { Suspense } from "react";

export default function page() {
  return (
    <>
      <Suspense fallback={<SkeletonHero />}>
        <Hero />
      </Suspense>
      <section>
        <h2 className="text-3xl font-light text-center">We Supported By</h2>
      </section>
    </>
  );
}
