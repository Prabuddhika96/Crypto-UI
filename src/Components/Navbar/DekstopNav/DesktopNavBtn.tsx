import { useNavigate } from "react-router-dom";

function DesktopNavBtn({ name, link, color, h_color }: any) {
  const navigate = useNavigate();
  const handleClick = (e: any) => {
    e.preventDefault();
    navigate(link);
  };
  return (
    <div>
      <button
        className={`bg-[${color}] hover:bg-[${h_color}] desktop-nav-btn px-5 py-2 text-white rounded-lg duration-100 ease-in-out`}
        onClick={handleClick}>
        {name}
      </button>
    </div>
  );
}

export default DesktopNavBtn;
