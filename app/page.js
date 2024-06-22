import CategoryCarousel from "@/components/category-carousel";
import CategoryList from "@/components/category-list";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <CategoryList />
      <CategoryCarousel />
      <Footer />
    </main>
  );
}
