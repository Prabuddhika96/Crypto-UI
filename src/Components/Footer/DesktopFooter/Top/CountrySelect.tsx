import React from "react";

function CountrySelect() {
  return (
    <div>
      <select
        name="Country"
        id=""
        className="bg-[#112962] w-[200px] p-2 rounded-lg">
        {country.map((c: any, i: number) => (
          <option value={c.name} className="flex justify-between px-1" key={i}>
            <p className="">{c.name}</p>
            <img src={c.image} alt={c.name} />
          </option>
        ))}
      </select>
    </div>
  );
}

export default CountrySelect;

const country = [
  {
    name: "English",
    image: "https://www.countryflagicons.com/SHINY/64/GB.png",
  },
  {
    name: "English",
    image: "https://www.countryflagicons.com/SHINY/64/GB.png",
  },
  {
    name: "English",
    image: "https://www.countryflagicons.com/SHINY/64/GB.png",
  },
  {
    name: "English",
    image: "https://www.countryflagicons.com/SHINY/64/GB.png",
  },
  {
    name: "English",
    image: "https://www.countryflagicons.com/SHINY/64/GB.png",
  },
  {
    name: "English",
    image: "https://www.countryflagicons.com/SHINY/64/GB.png",
  },
];
