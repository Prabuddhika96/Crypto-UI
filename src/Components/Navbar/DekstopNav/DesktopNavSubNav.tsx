import { Link } from "react-router-dom";

function DesktopNavSubNav({ array, right }: any) {
  return (
    <div>
      <ul
        className={`absolute top-[35px] -right-[${right}] mt-12 py-2 bg-[#2B4A90] shadow rounded-md w-52`}>
        {array.map((l: any, i: number) => (
          <li
            key={i}
            className="text-left py-1 px-2 text-[#cecece] hover:text-[#9b9b9b]">
            <Link to={l.link}>{l.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DesktopNavSubNav;
