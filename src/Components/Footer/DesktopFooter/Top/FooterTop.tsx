import CountrySelect from "./CountrySelect";
import TopRight from "./TopRight";
import FooterBtns from "./FooterBtns";

function FooterTop() {
  return (
    <div className="w-8/12 mx-auto px-5 max-md:w-full">
      <div className="flex flex-wrap justify-between max-md:block">
        <FooterBtns />
        <div className="flex justify-end gap-6 items-center max-md:order-1">
          <TopRight />
          <CountrySelect />
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
