const LocationInfo = ({ dimensionData }) => {
  return (
    <>
      <section className="relative mt-12 flex flex-col gap-5 pb-5">
        <div className="flex justify-center">
          <span className="text-2xl text-[#8EFF8B]">
            ¡Welcome to the location {dimensionData?.id}!
          </span>
        </div>
        <div className="   border-y-[#00800062]  p-3  bg-gradient-to-r from-[#00000000] via-[#93868635] to-[#00000000]">
          <div className="flex justify-center">
            <h2 className=" px-10 border-b p-1 border-b-[#92929262] text-xl">
              {dimensionData?.name}
            </h2>
          </div>
          <ul className=" m-3 flex  flex-col gap-2">
            <li>
              type: <span className="ml-16 text-[#8EFF8B]">{dimensionData?.type}</span>
            </li>
            <li>
              Dimension: <span className="ml-4 text-[#8EFF8B]">{dimensionData?.dimension}</span>
            </li>
            <li>
              Population: <span className="ml-2 text-[#8EFF8B]">{dimensionData?.residents.length}</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default LocationInfo;
