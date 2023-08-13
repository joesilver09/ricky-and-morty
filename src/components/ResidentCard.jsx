import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const residentStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <article className=" border-2  border-[#8EFF8B] max-w-[27.3125rem] max-h-[40rem] ">
        <section>
          {/* image container */}
          <div className="max-h-[25.125rem] max-w-auto border-b-[2px]  border-[#8EFF8B] overflow-hidden">
            <div
              style={{ height: "auto",  width: "auto"}}
              className="transform translate-y-[-1rem]"
            >
              <img
                src={residentInfo?.image}
                alt="resident image"
                className="w-full h-full
             object-cover transform scale-y-[1.0]"
              />
            </div>

            {/* status container */}
            <div className=" -translate-y-[7.6rem] border-2 mr-[7.7rem] ml-[8.3rem] py-[0.30rem] bg-[rgba(0,0,0,0.71)] border-[#8EFF8B] px-16 grid grid-cols-2 ">
              {/* circle */}
              <div className="col-span-1 -translate-x-7  translate-y-1">
                <div
                  className={`h-5 w-5 aspect-square rounded-full ${
                    residentStatus[residentInfo?.status]
                  }`}
                ></div>
              </div>
              {/* status */}
              <span className="font-roboto -translate-x-4 text-[1.125rem]">
                {residentInfo?.status}
              </span>
            </div>
          </div>
        </section>
        {/* description container  */}
        <section>
          <h2 className="p-4 mx-2 pt-5 pb-1 border-b-[1px]  border-[#8fff8b44] font-bold text-[2rem]">
            {residentInfo?.name}
          </h2>
          <ul className="flex flex-col mx-5 gap-4 pb-5 text-[#938686] m-3">
            <li>
              Species
              <span className=" ml-[4.5rem] text-white text-xl">{residentInfo?.species}</span>
            </li>
            <li>
              Origin
              <span className="ml-[5.1rem] text-white text-xl">{residentInfo?.origin.name.replace(/\b\w/g, c => c.toUpperCase())}</span>
            </li>
            <li>
            Times Apear<span className="ml-[2.1rem] text-white text-xl">{residentInfo?.episode.length === 0
    ? "none"
    : `${residentInfo?.episode.length} ${residentInfo?.episode.length === 1 ? "time" : "times"}`}</span>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};
export default ResidentCard;
