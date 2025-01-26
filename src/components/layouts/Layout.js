import Link from "next/link";

import { getCookie } from "@/utils/cookies";

import styles from "@/styles/Layout.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  const [csrToken, setCsrToken] = useState();

  useEffect(() => {
    const token = getCookie();
    setCsrToken(token);
    console.log("csrToken: ", csrToken);
  }, [router.pathname]);

  return (
    <>
      <header className={styles.header}>
        <Link href="/cart">
          <div className={styles.right}>
            <img src="/images/online-shopping.png" alt="Cart" />
            <p>سبد خرید</p>
          </div>
        </Link>
        <div className={styles.left}>
          <Link href="/products">
            <div>
              <img src="/images/shop.png" alt="Products" />
              <p>فروشگاه</p>
            </div>
          </Link>
          {csrToken ? (
            <Link href="/dashboard">
              <div>
                <img src="/images/user.png" alt="User" />
                <p>پنل کاربری</p>
              </div>
            </Link>
          ) : (
            <Link href="/login">
              <div>
                <img src="/images/login.png" alt="Login" />
                <p>ثبت نام / ورود</p>
              </div>
            </Link>
          )}
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>
          Developed by
          <a href="https://github.com/BIGsMahdiz" target="_blank">
            Mahdi Mousavinezhad
          </a>
          | Product Management &copy; 2025
        </p>
      </footer>
    </>
  );
}

export default Layout;
