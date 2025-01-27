import { useGetAllProductsDashboard } from "@/services/queries";
import SearchBar from "../modules/SearchBar";
import Table from "../modules/Table";

import styles from "@/styles/Dashboard.module.css";
import { Toaster } from "react-hot-toast";
import Pagination from "../modules/Pagination";
import { useState } from "react";

function DashboardPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useGetAllProductsDashboard(currentPage);
  // const [allPage, setAllPage] = useState(data?.totalPages);

  return (
    <div className={styles.container}>
      <Toaster />
      <SearchBar />
      <Table data={data} />
      {/* <Pagination
        data={data}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        allPage={allPage}
        setAllPage={setAllPage}
      /> */}
    </div>
  );
}

export default DashboardPage;
