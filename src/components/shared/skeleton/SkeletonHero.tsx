export function SkeletonHero() {
  return (
    <section className="relative rounded-xl overflow-hidden mb-8 h-[600px] w-full">
      <div className="w-full h-full z-10 absolute bg-gray-400 animate-pulse"></div>
      <div className="absolute rounded-full size-10 px-0 py-0 z-10 bottom-5 right-20 bg-gray-200 animate-pulse"></div>
      <div className="absolute rounded-full size-10 px-0 py-0 z-10 bottom-5 right-6 bg-gray-200 animate-pulse"></div>
    </section>
  );
}
