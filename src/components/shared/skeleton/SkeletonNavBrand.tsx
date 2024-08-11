export function SkeletonNavBrand() {
  return (
    <nav className="flex flex-col gap-6">
      <div className="flex-row-between gap-2">
        <div className="gap-2 lg:hidden block">
          <div className="h-9 w-28 bg-gray-400 animate-pulse"></div>
        </div>

        <div className="w-full h-9 bg-gray-400 rounded-md animate-pulse"></div>
        <div className="w-20 h-9 rounded-md bg-gray-400 animate-pulse"></div>
        <div className="w-16 h-9 rounded-md bg-gray-400 animate-pulse"></div>
      </div>
      <div className="gap-2 lg:flex hidden">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="w-16 h-9 rounded-md bg-gray-400 animate-pulse"
          ></div>
        ))}
      </div>
    </nav>
  );
}
