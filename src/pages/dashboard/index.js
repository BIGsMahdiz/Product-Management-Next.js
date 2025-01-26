import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import DashboardPage from "@/components/templates/DashboardPage";
import { getCookie } from "@/utils/cookies";

function Dashboard() {
  const router = useRouter();
  const [csrToken, setCsrToken] = useState();

  useEffect(() => {
    const token = getCookie();
    setCsrToken(token);
  }, [router.pathname]);

  if (csrToken < 2) router.push("/login");

  return (
    <>
      <DashboardPage />
    </>
  );
}

export default Dashboard;
