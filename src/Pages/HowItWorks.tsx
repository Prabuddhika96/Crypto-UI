import Swiper from "Components/How It Works/Swiper/Swiper";
import TopSection from "Components/How It Works/Top Section/TopSection";

function HowItWorks() {
  return (
    <div>
      <div className="py-6 min-h-[350px] items-center flex">
        <TopSection />
      </div>
      <div className="min-h-[600px] bg-[#F8F8F8] w-full flex justify-center items-center py-10">
        <Swiper />
      </div>

      <div className="min-h-[600px] bg-white w-full flex justify-center items-center py-10">
        <Swiper />
      </div>
    </div>
  );
}

export default HowItWorks;
