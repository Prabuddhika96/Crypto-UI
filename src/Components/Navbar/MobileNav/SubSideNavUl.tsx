import { Link } from "react-router-dom";

function SubSideNavUl({ array }: any) {
  return (
    <div>
      <ul className={`text-left items-center text-base gap-x-8`}>
        {array.map((a: any, i: number) => (
          <>
            <Link to={a.link} key={i}>
              <li className="text-[#cecece] hover:text-[#9b9b9b] py-4 hover:duration-300 relative">
                {a.name}
              </li>
            </Link>
          </>
        ))}
      </ul>
    </div>
  );
}

export default SubSideNavUl;
