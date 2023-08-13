const LocationInfo = ({ dimensionData }) => {
  return (
    <>
      <section className="pt-20">
        <div>LocationInfo</div>
        <h2 className="text-red-300">{dimensionData?.name}</h2>
        <ul>
          <li>type: {dimensionData?.type}</li>
          <li>Dimension: {dimensionData?.dimension}</li>
          <li>Population: {dimensionData?.residents.length}</li>
        </ul>
      </section>
    </>
  );
};
export default LocationInfo;
