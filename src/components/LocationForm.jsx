const LocationForm = ({ handleSubmit }) => {
  return (
    <div className="pt-[16.9rem] bg-transparent">
      <form
        className="grid grid-cols-4 border-2 max-w-sm border-[#8EFF8B]"
        onSubmit={handleSubmit}
      >
        <input
          className="py-4 bg-[#00000035] z-10 text-white  col-span-3"
          min={1}
          id="newLocation"
          max={126}
          placeholder="Type a location id..."
          type="number"
        />
        <button className="border-l-2 border-l-[#8EFF8B] bg-[#8EFF8B80] l z-10 bg-green">Search</button>
      </form>
      </div>
  );
};
export default LocationForm;
