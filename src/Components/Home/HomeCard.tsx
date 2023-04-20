import { Routenames } from "Constants/RouteName";
import cardImg from "Img/home card.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function HomeCard() {
  return (
    <div className="flex items-center gap-3 bg-[#082F77] py-2 justify-between w-5/12 max-md:w-11/12 mx-auto rounded-2xl shadow-2xl">
      <div className="w-3/12">
        <img src={cardImg} alt="" width={"150px"} />
      </div>
      <div className="items-center block w-9/12 px-1 text-left">
        <p className="text-lg">1,000 SWAP to all registered customers !</p>
        <p className="text-sm">
          Create an account, finish the exchange and receive a pleasant Bonus.
          Collect SWAP to purchase a BTC cashback subscription.
        </p>
        <Link to={Routenames.Signup}>
          <p className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            Sign Up{" "}
            <span>
              <AiOutlineArrowRight />
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default HomeCard;
