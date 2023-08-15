const LocationForm = ({ handleSubmit }) => {
  return (
    <div className="relative flex justify-center  bg-transparent">
      <form
        className="grid grid-cols-4 border-2 border-[#8EFF8B]"
        onSubmit={handleSubmit}
      >
        <input
          className=" py-4 px-5 sm:px-20 bg-[#00000035] z-10 text-white text-xl placeholder-[#938686] col-span-3"
          min={1}
          id="newLocation"
          max={126}
          placeholder="Type a location ID..."
          type="number"
        />
        <button className=" px-4 sm:px-12 border-l-2 border-l-[#8EFF8B] bg-[#8EFF8B80] l z-10 bg-green hover:bg-[#8EFF8B] hover:text-black sm:text-lg">
          Search
        </button>
      </form>
    </div>
  );
};
export default LocationForm;
