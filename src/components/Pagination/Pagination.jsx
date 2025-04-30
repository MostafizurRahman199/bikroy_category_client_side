


import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const generatePaginationButtons = () => {
    const buttons = [];

    // Add "Previous" button
    if (currentPage > 1) {
      buttons.push(
        <button
          key="prev"
          className="mx-1 px-4 py-2 border hover:bg-[#BB8506] hover:text-white text-[#BB8506]"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
      );
    }

    // Add the first three page buttons
    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      buttons.push(
        <button
          key={i}
          className={`mx-1 px-4 py-2 border ${
            currentPage === i
              ? "bg-[#BB8506] text-white"
              : "hover:bg-[#BB8506] hover:text-white text-[#BB8506]"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    // Add "..." if needed before the current page
    if (currentPage > 4) {
      buttons.push(<span key="start-ellipsis" className="mx-1">...</span>);
    }

    // Add current page button if it's not in the first or last three pages
    if (currentPage > 3 && currentPage <= totalPages - 3) {
      buttons.push(
        <button
          key={currentPage}
          className="mx-1 px-4 py-2 border bg-[#BB8506] text-white"
          onClick={() => handlePageChange(currentPage)}
        >
          {currentPage}
        </button>
      );
    }

    // Add "..." if needed after the current page
    if (currentPage < totalPages - 3) {
      buttons.push(<span key="end-ellipsis" className="mx-1">...</span>);
    }

    // Add the last three page buttons
    for (let i = Math.max(totalPages - 2, 4); i <= totalPages; i++) {
      if (i > 3) {
        buttons.push(
          <button
            key={i}
            className={`mx-1 px-4 py-2 border ${
              currentPage === i
                ? "bg-[#BB8506] text-white"
                : "hover:bg-[#BB8506] hover:text-white text-[#BB8506]"
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    }

    // Add "Next" button
    if (currentPage < totalPages) {
      buttons.push(
        <button
          key="next"
          className="mx-1 px-4 py-2 border hover:bg-[#BB8506] hover:text-white text-[#BB8506]"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      );
    }

    return buttons;
  };

  return <div className="flex justify-center mt-6">{generatePaginationButtons()}</div>;
};

export default Pagination;

