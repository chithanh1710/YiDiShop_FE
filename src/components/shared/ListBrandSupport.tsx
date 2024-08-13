import Image from "next/image";

export function ListBrandSupport() {
  const listImg = [
    "/apple-logo.png",
    "/xiaomi-logo.png",
    "/huawei-logo.png",
    "/oppo-logo.png",
    "/realme-logo.png",
    "/samsung-logo.png",
    "/sony-logo.svg",
    "/vivo-logo.png",
  ];
  return (
    <>
      <section className="hidden lg:grid grid-cols-4 lg:gap-4 gap-2 mt-8">
        {listImg.map((src) => (
          <article
            key={src}
            className="aspect-video px-14 py-7 bg-gray-100 dark:bg-gray-400 rounded-xl group"
          >
            <Image
              alt=""
              src={src}
              width={200}
              height={100}
              className="w-full h-full object-contain group-hover:brightness-100 group-hover:scale-110 transition-all brightness-0"
            />
          </article>
        ))}
      </section>
      <section className="before:z-30 after:z-30 before:content-[''] before:md:w-[260px] before:w-[100px] before:h-36 before:absolute before:top-0 before:left-0 before:bg-gradient-to-r before:from-background before:to-transparent after:content-[''] after:md:w-[260px] after:w-[100px] after:h-36 after:absolute after:top-0 after:right-0 after:bg-gradient-to-l after:from-background after:to-transparent lg:hidden mt-8 w-screen md:-translate-x-6 -translate-x-3">
        <div className="min-w-[1024px] h-28 relative">
          <div className="flex w-full absolute top-0 left-0 transition-all  animate-[leftIn_10s_infinite_linear]">
            {listImg.map((src) => (
              <article
                key={src}
                className="h-28 px-3 py-6 w-full bg-gray-100 mx-2 rounded-xl group"
              >
                <Image
                  alt=""
                  src={src}
                  width={200}
                  height={100}
                  className="w-full h-full object-contain group-hover:brightness-100 group-hover:scale-110 transition-all brightness-0"
                />
              </article>
            ))}
          </div>
          <div className="flex w-full absolute top-0 left-full transition-all animate-[leftIn_10s_infinite_linear]">
            {listImg.map((src) => (
              <article
                key={src}
                className="h-28 px-3 py-6 w-full bg-gray-100 mx-2 rounded-xl group"
              >
                <Image
                  alt=""
                  src={src}
                  width={200}
                  height={100}
                  className="w-full h-full object-contain group-hover:brightness-100 group-hover:scale-110 transition-all brightness-0"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
