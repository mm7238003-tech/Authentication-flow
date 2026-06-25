import BestSeller from "../components/BestSeller";
import Features from "../components/Features";
import FlashSale from "../components/FlashSale";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RecommendedForYou from "../components/RecommendedForYou";
import SearchInput from "../components/SearchInput";

export default function HomePage() {
  return (
    <>

      <Header  bgi="bg-[url('/BigBackground.png')] "   h="h-[804px]"   input={<SearchInput />}/>
<Features/>
<BestSeller/>
<RecommendedForYou/>
      <FlashSale/>
      <Footer/>
    </>
  )
}
