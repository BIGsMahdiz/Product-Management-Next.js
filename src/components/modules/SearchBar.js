import { useEffect, useState } from "react";

import styles from "@/styles/SearchBar.module.css";
import { useRouter } from "next/router";

function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (search.length > 0) {
      router.push({ query: `search=${search}` });
    } else {
      delete router.query.search;
      router.push("/dashboard");
    }
  }, [search]);

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchInput}>
        <img
          src="/images/search-normal.png"
          alt="Search icon"
          className={styles.searchIcon}
        />
        <input
          type="search"
          placeholder="جستجوی کالا"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.profile}>
        <img src="/images/eyes.gif" alt="Profile" />
        <div>
          <h4>مهدی موسوی نژاد</h4>
          <p>مدیر</p>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
