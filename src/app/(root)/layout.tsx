import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container max-md:px-3 md:py-3 py-1">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </main>
  );
}
