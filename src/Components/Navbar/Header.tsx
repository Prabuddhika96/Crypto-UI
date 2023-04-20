import MobNav from "./MobileNav/MobNav";
import DeskTopNav from "./DekstopNav/DeskTopNav";

function Header() {
  return (
    <div className="bg-[#062763] border-b-[0.05px] border-solid border-[#9a9a9a44]  text-white">
      <div className="md:hidden ">
        <MobNav />
      </div>
      <div className="max-md:hidden">
        <DeskTopNav />
      </div>
    </div>
  );
}

export default Header;
