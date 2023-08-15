const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  const itemsPerRow = 8;

  return (
    <ul className="flex justify-center items-center flex-wrap px-6">
      {pages.map((page) => (
        <li
          className={`rounded-full  m-1 bg-[#07272a] my-1 ${
            currentPage === page && "text-black font-bold bg-[#8fff8bca]"
          }`}
          onClick={() => setCurrentPage(page)}
          key={page}
          style={{
            flexBasis: `calc(90% / ${itemsPerRow})`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
