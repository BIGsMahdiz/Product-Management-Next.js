import { useEffect } from "react";

function Pagination({
  data,
  currentPage,
  setCurrentPage,
  allPage,
  setAllPage,
}) {
  console.log(data);

  // تغییر شماره صفحه
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "8px" }}>
        {Array.from({ length: allPage }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            style={{
              padding: "8px 12px",
              backgroundColor: currentPage === index + 1 ? "blue" : "gray",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
