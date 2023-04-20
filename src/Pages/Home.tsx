import HomeCard from "Components/Home/HomeCard";
import TabPanel from "Components/Tab/TabPanel";

function Home() {
  return (
    <div className="py-5 text-center text-white">
      <h1 className=" text-[60px]">Crypto Exchange</h1>
      <p className="text-lg">Free form sign-up, limits, complications</p>

      <div className="container mx-auto my-10">
        <TabPanel />
      </div>

      <div className="w-10/12 mx-auto my-10">
        <HomeCard />
      </div>
    </div>
  );
}

export default Home;
