import React from "react";
import { Link } from "react-router-dom";

function MIddleGridItem({ name, data }: any) {
  return (
    <div>
      <p className="text-[#575e66] text-lg mb-5 max-md:hidden">{name}</p>
      <ul>
        {data.map((d: any, i: number) => (
          <>
            <Link to={d.link} key={i}>
              <li className="py-2 hover:text-[#b6b6b6] text-white text-base">
                {d.name}
              </li>
            </Link>
          </>
        ))}
      </ul>
    </div>
  );
}

export default MIddleGridItem;
