import { Routenames } from "Constants/RouteName";
import MobileNavElement from "./MobileNavElement";

function MobNavUl() {
  return (
    <>
      <ul className={`text-left items-center text-base gap-x-8`}>
        <MobileNavElement
          linkAddress={Routenames.HowItWorks}
          name={"How it works"}
          icon={false}
        />
        <MobileNavElement
          linkAddress={Routenames.LoyaltyProgram}
          name={"Loyalty program"}
          icon={false}
        />
        <MobileNavElement
          linkAddress={Routenames.Home}
          name={`Learn`}
          icon={true}
          array={subMenu}
          right={"44px"}
        />
        <MobileNavElement
          linkAddress={Routenames.Blog}
          name={"Blog"}
          icon={false}
        />
        <MobileNavElement
          linkAddress={Routenames.Contact}
          name={"Contact"}
          icon={false}
        />
        <MobileNavElement
          linkAddress={Routenames.Home}
          name={"Business"}
          icon={true}
          array={subMenu}
          right={"55px"}
        />
      </ul>
    </>
  );
}

export default MobNavUl;

// eslint-disable-next-line no-sparse-arrays
const subMenu = [
  { name: "submenu1", link: Routenames.Home },
  { name: "submenu1", link: Routenames.Home },
  ,
  { name: "submenu1", link: Routenames.Home },
];
