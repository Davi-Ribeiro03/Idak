import BrowseFromTopCategories from "@/components/BrowseFromTopCategories/BrowseFromTopCategories";
import FeaturedListings from "@/components/FeaturedListings/FeaturedListings";
import IntroHome from "@/components/IntroHome/IntroHome";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main className="m-0 p-0 ">
      <Header />
      <IntroHome />
      <BrowseFromTopCategories />
      <FeaturedListings />
    </main>
  );
}
