const Backgrounds = () => {
  return (
    <>
      {/* rick and morty header */}

      <div className="flex justify-center">
        <div className="absolute flex justify-center sm:min-w-[940px] min-w-[450px] top-0 w-screen overflow-hidden">
          <img
            src="images/headerbg.png"
            alt="heager background"
            className="min-h-[65rem] min-w-[125rem]"
          />
        </div>
        <div className="relative min-w-[450px] mb-8 flex justify-center top-0 w-screen overflow-hidden">
          <img
            src="images/headercolisionbox.png"
            alt="rick & morty logo"
            className="min-w-[53rem]"
          />
        </div>
        <div className="absolute min-w-[450px] flex justify-center top-0 w-screen  overflow-hidden">
          <img
            src="images/header.png"
            alt="rick & morty logo"
            className="min-w-[53rem]"
          />
        </div>
        {/* <div className="bg-repeat-y bg-center" style={{ backgroundImage: "url(/images/pagebg.png)" }}></div> */}
      </div>
    </>
  );
};
export default Backgrounds;