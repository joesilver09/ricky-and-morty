const Pagination = ({ pages, setCurrentPage,currentPage }) => {
  return (
    <ul className="flex gap-5 pb-36">
      {pages.map((page) => (
        <li className={`${currentPage === page && "text-cyan-500"}`}onClick={()=>setCurrentPage(page)} key={page}>{page}</li>
      ))}
    </ul>
  );
};
export default Pagination;
