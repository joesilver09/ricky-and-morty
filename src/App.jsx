import axios from "axios";
import "./App.css";
import { Suspense, lazy, useEffect, useState } from "react";
import { getRandomDimension } from "./utils/random";
import Loading from "./components/Loading";

const Backgrounds = lazy(() => import("./components/Backgrounds"));
const LocationForm = lazy(() => import("./components/LocationForm"));
const LocationInfo = lazy(() => import("./components/LocationInfo"));
const ResidentList = lazy(() => import("./components/ResidentList"));
const Footer = lazy(() => import("./components/Footer"));

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
      <div className=" bg-center min-w-max h-screen">
        <Suspense fallback={<Loading />}>
          {dimensionData ? (
            <>
              <Backgrounds />
              <main className=" font-fira-code bg-center bg-cover text-white min-h-[70vh]  min-w-max flex justify-center items-center overflow-hidden">
                <div>
                  <LocationForm handleSubmit={handleSubmit} />
                  <LocationInfo dimensionData={dimensionData} />
                  <ResidentList
                    currentLocation={dimensionData}
                    residents={dimensionData?.residents ?? []}
                  />
                  <Footer />
                </div>
              </main>
            </>
          ) : (
            <Loading />
          )}
        </Suspense>
      </div>
    </>
  );
}

export default App;
