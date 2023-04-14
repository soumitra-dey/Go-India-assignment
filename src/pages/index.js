import Company from "@/components/Company";
import Footer from "@/components/Footer";
import MainScreen from "@/components/MainScreen";
import Navbar from "@/components/Navbar";
import StockBar from "@/components/StockBar";


export default function Home() {


  return (
    <div className="relative">
      <Navbar/>
      <StockBar/>
      <Company/>
      <MainScreen/>
      <Footer/>
    </div>
  )
}
