import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";
const INITIAL_PAGE = 1

const ResidentList = ({ residents, currentLocation }) => {
const [currentPage, setCurrentPage] = useState(INITIAL_PAGE)  

const   RESIDENTS_PER_PAGE = 20;

const pagesQuantity = Math.ceil(residents.length / RESIDENTS_PER_PAGE)

const pageStart = (currentPage - 1) * RESIDENTS_PER_PAGE
const pageEnd = pageStart + RESIDENTS_PER_PAGE 
const residentsInPage = residents.slice(pageStart, pageEnd)

const pages =[]
for(let i=1; i <= pagesQuantity; i++  ){
  pages.push(i)
}

useEffect(()=>{
setCurrentPage(INITIAL_PAGE)
},[currentLocation])

return (
    <>
      <section className="relative">
      <Pagination pages={pages} setCurrentPage={setCurrentPage}  currentPage={currentPage}/>
        <section>
          {residentsInPage.map((resident) => (
            <ResidentCard key={resident} residentUrl={resident} />
          ))}
        </section>
        <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </section>
    </>
  );
};
export default ResidentList;
