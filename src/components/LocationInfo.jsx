const LocationInfo = ({ dimensionData }) => {
  return (
    <>
      <section className="relative mt-12 flex flex-col gap-5">
        <div className="flex justify-center">
          <span className="text-xl text-[#8EFF8B]">
            ¡Welcome to the location {dimensionData?.id}!
          </span>
        </div>
        <div className="border p-3 border-green-300">
          <div className="flex justify-center">
            <h2 className=" border-b px-16 border-b-[#00800062] text-xl">{dimensionData?.name}</h2>
          </div>
          <ul className=" m-3 flex  flex-col gap-2">
            <li>type: {dimensionData?.type}</li>
            <li>Dimension: {dimensionData?.dimension}</li>
            <li>Population: {dimensionData?.residents.length}</li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default LocationInfo;
