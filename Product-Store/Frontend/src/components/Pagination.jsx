import { Button, HStack } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPaginationRange = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <HStack spacing={2} mt={8} flexWrap="wrap" justify="center">
      {/* Previous button */}
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
      >
        Previous
      </Button>

      {/* Page number buttons with dots */}
      {getPaginationRange().map((page, index) => {
        if (page === "...") {
          return (
            <Button key={index} isDisabled>
              ...
            </Button>
          );
        } else {
          return (
            <Button
              key={index}
              onClick={() => onPageChange(page)}
              colorScheme={currentPage === page ? "blue" : "gray"}
            >
              {page}
            </Button>
          );
        }
      })}

      {/* Next button */}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
      >
        Next
      </Button>
    </HStack>
  );
};

export default Pagination;
