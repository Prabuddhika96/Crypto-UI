import trustPilot from "Img/trustpilot-1.svg";
import bestChange from "Img/BestChange.png";

function MIddleTopLeft() {
  return (
    <div className="flex items-center gap-3 max-md:text-sm">
      <div className="flex items-center gap-2 px-2 border-r-[1px] border-solid border-[#9a9a9a]">
        <p className="">See our reviews on </p>
        <img src={trustPilot} width={"100px"} alt="TrustPilot logo" />
      </div>
      <img src={bestChange} width={"70px"} alt="TrustPilot logo" />
    </div>
  );
}

export default MIddleTopLeft;
