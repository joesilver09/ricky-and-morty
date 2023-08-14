const Backgrounds = () => {
    return (
      <>
        {/* rick and morty header */}
        
        <div className="flex justify-center">
          <div className="absolute top-0 w-screen">
           
          <img src="images/headerbg.png" alt="heager background"/>
         
          </div>
          <div className="relative top-0 w-screen -m-24 translate-y-24">
            <img src="images/header.png" alt="rick & morty logo" className="w-screen" />
          </div>
          {/* <div className="bg-repeat-y bg-center" style={{ backgroundImage: "url(/images/pagebg.png)" }}></div> */}


        </div>
        
      </>
    );
  };
  export default Backgrounds;
  