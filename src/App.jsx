import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { getRandomDimension } from "./utils/random";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";
import Backgrounds from "./components/Backgrounds";

function App() {
  const [dimensionData, setDimensionData] = useState(null);
  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;

    axios
      .get(url)
      .then(({ data }) => setDimensionData(data))
      .catch((err) => console.log(err));
  };

const handleSubmit = (e) => {
  e.preventDefault();
  const newLocation = e.target.newLocation.value;

  if (!newLocation || isNaN(newLocation) || +newLocation === 0) {
    alert("Valor inválido. Por favor, ingresa un número válido.");
    return; // Sale de la función si el valor es inválido
  }

  fetchDimension(newLocation);
};

  useEffect(() => {
    const randomDimension = getRandomDimension(126);
    fetchDimension(randomDimension);
  }, []);

  return (
<>
    <div className="bg-custom bg-center min-w-max">
       <Backgrounds></Backgrounds>
      <main
        className=" font-fira-code bg-center bg-cover text-white min-h-screen  min-w-max flex justify-center items-center"
        // style={{
        //   backgroundImage: "url(rick40x705.jpg)",
        //   display: "flex",
        //   position: "fixed"
        // }}
      >
        {/* rick and morty logo */}

       
        <div>
              
          <LocationForm handleSubmit={handleSubmit} />
          <LocationInfo dimensionData={dimensionData} />
          <ResidentList currentLocation={dimensionData} residents={dimensionData?.residents ?? []} />
        </div>
      </main>
    </div>
</>
  );
}

export default App;
