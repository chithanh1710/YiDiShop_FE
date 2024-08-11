import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Menu } from "@/components/shared/Menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative">
      <Menu />
      <section className=" container md:px-6 px-3 md:py-6 py-3">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </section>
    </main>
  );
}
