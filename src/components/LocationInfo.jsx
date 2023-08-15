const LocationInfo = ({ dimensionData }) => {
  return (
    <>
      <section className="relative mt-12 sm:mt-16 sm:mb-4 flex flex-col gap-5 pb-5">
        <div className="flex justify-center">
          <span className="text-2xl sm:m-3 text-[#8EFF8B]">
            ¡Welcome to the location {dimensionData?.id}!
          </span>
        </div>
        <div className="   border-y-[#00800062]  py-3  bg-gradient-to-r from-[#00000000] via-[#93868635] to-[#00000000]">
          <div className="flex justify-center">
            <h2 className=" px-10 border-b p-1 border-b-[#92929262] text-xl sm:text-2xl">
              {dimensionData?.name}
            </h2>
          </div>
          <ul className=" my-3 flex  flex-col gap-2 sm:text-base">
            <div className=" pl-5 sm:pl-0 sm:grid sm:grid-cols-3 sm:place-content-center">
              <li className="sm:flex sm:justify-center ">
                type:{" "}
                <span className="ml-16 sm:ml-0 text-[#8EFF8B]">
                  {dimensionData?.type}
                </span>
              </li>
              <li className="sm:flex sm:justify-center ">
                Dimension:{" "}
                <span className="ml-4 sm:ml-0 text-[#8EFF8B] ">
                  {dimensionData?.dimension}
                </span>
              </li>
              <li className="sm:flex sm:justify-center ">
                Population:{" "}
                <span className="ml-2 sm:ml-0 text-[#8EFF8B]">
                  {dimensionData?.residents.length}
                </span>
              </li>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
};
export default LocationInfo;
