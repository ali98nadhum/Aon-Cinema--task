import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./Pagination.css"
import { useEffect } from "react";

const Paginationw = ({ getPage, pageCount }) => {
  const customStyles = `
    .MuiPaginationItem-page:not(.Mui-selected) {
      color: #ffffff;
      font-size: 18px;
    }
    .MuiPaginationItem-icon {
      color: #ffffff;
    }
    @media (max-width: 365px) {
      .MuiPaginationItem-page:not(.Mui-selected) {
        font-size: 16px;
      }
      .MuiPaginationItem-icon 
      {
        display: none;
      }
    }
  `;

  // تحديد الدالة بدون استدعائها
  const handlePageChange = (data) => {
    getPage(data.selected + 1);
  };



  return (
    <div className="Pagination">
      <Stack spacing={2}>
        <style>{customStyles}</style>

        {/* استخدام handlePageChange كدالة لـ onClick */}
        <Pagination count={pageCount} color="primary" onClick={handlePageChange} />
      </Stack>
    </div>
  );
};

export default Paginationw;