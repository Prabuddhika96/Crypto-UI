import { useEffect, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

function Swiper() {
  const [left, setLeft] = useState<boolean>(false);
  const [bar, setBar] = useState<boolean>(true);
  const [page, setPage] = useState(1);

  const handleBar = () => {
    setBar(true);
    setTimeout(() => {
      setBar(false);
    }, 2990);
  };

  const handlePrev = () => {
    setLeft(true);
    // e.preventDefault();
    setPage(page - 1);
    if (page === 1) {
      setPage(4);
    }
    setTimeout(() => {
      setLeft(false);
    }, 1000);
  };

  const handleNext = () => {
    setLeft(true);
    // e.preventDefault();
    setPage(page + 1);
    if (page === 4) {
      setPage(1);
    }
    setTimeout(() => {
      setLeft(false);
    }, 1000);
  };

  const [slide, setSlide] = useState<any>(data[0]);

  useEffect(() => {
    console.log(page);
    setSlide(data[page - 1]);
  }, [page]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
      handleBar();
    }, 3000);
    return () => clearInterval(interval);
  }, [page]);

  return (
    <div className="flex items-center justify-center w-8/12 gap-5 mx-auto max-md:block max-md:w-full">
      <div className="w-6/12 px-10 text-left max-md:w-full max-md:mx-auto">
        <p className="text-sm text-[#859AB5]">Step {page}</p>
        <p className="my-6 text-4xl">{slide.title}</p>
        <p className="text-md my-8 text-[#6d7a8a]">{slide.text}</p>

        <div className="flex items-center justify-start gap-2 my-8 max-md:justify-center">
          <div className="anim-bar-background">
            <div
              className={`anim-blue-bar ${
                bar === true && page === 1 ? "anim-bar" : ""
              }`}></div>
          </div>
          <div className="anim-bar-background">
            <div
              className={`anim-blue-bar ${
                bar === true && page === 2 ? "anim-bar" : ""
              }`}></div>
          </div>
          <div className="anim-bar-background">
            <div
              className={`anim-blue-bar ${
                bar === true && page === 3 ? "anim-bar" : ""
              }`}></div>
          </div>
          <div className="anim-bar-background">
            <div
              className={`anim-blue-bar ${
                bar === true && page === 4 ? "anim-bar" : ""
              }`}></div>
          </div>
        </div>

        <div className="flex items-center justify-start gap-4 max-md:hidden">
          <p onClick={handlePrev} className="bg-[#9fa9b67b] p-2 rounded-md">
            <MdNavigateBefore />
          </p>
          <p className="text-md text-[#6d7a8a]">
            {page} <span className="text-sm text-black">/ 4</span>
          </p>
          <p onClick={handleNext} className="bg-[#9fa9b67b] p-2 rounded-md">
            <MdNavigateNext />
          </p>
        </div>
      </div>
      <div className="w-6/12 max-md:w-full max-md:mx-auto max-md:flex max-md:justify-center">
        <img
          src={slide.image}
          alt=""
          width={"500px"}
          height={"500px"}
          className={` ${left === true ? "anim-img" : ""} `}
        />
      </div>

      {/* responsive navigation */}
      <div className="flex items-center justify-center gap-4 my-5 md:hidden">
        <p onClick={handlePrev} className="bg-[#9fa9b67b] p-2 rounded-md">
          <MdNavigateBefore />
        </p>
        <p className="text-md text-[#6d7a8a]">
          {page} <span className="text-sm text-black">/ 4</span>
        </p>
        <p onClick={handleNext} className="bg-[#9fa9b67b] p-2 rounded-md">
          <MdNavigateNext />
        </p>
      </div>
    </div>
  );
}

export default Swiper;

const data = [
  {
    id: 1,
    title: "Choose the crypto exchange pair",
    text: "Let’s assume you have Bitcoin and you want to have Ethereum. Here is how the BTC to ETH exchange process takes place on SimpleSwap.",
    image:
      "https://st.depositphotos.com/1609126/4900/i/950/depositphotos_49003045-stock-photo-temple-of-the-tooth-kandy.jpg",
  },
  {
    id: 2,
    title: "Enter the recipient’s address",
    text: "Now you need to enter the recipient’s Ethereum address. Be extremely careful and double-check your ETH address. Your Ethereum coins will be sent to this address right after the exchange.",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: 3,
    title: "Send and receive cryptocurrencies",
    text: "On the exchange page, you will see the address to send the indicated amount of Bitcoins to continue the exchange.",
    image:
      "https://st.depositphotos.com/1609126/4900/i/950/depositphotos_49003045-stock-photo-temple-of-the-tooth-kandy.jpg",
  },
  {
    id: 4,
    title: "Receive cryptocurrency",
    text: "When the swap process is over and the exchange is successfully finished, you will get the desired crypto.",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
];
