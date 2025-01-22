import { useGetAllProducts } from "@/services/queries";
import SearchBar from "../modules/SearchBar";
import Table from "../modules/Table";

import styles from "@/styles/Dashboard.module.css";

function DashboardPage() {
  const { data } = useGetAllProducts();

  return (
    <div className={styles.container}>
      <SearchBar />
      <Table data={data} />
    </div>
  );
}

export default DashboardPage;
