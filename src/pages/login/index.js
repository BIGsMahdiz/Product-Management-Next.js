import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import LoginPage from "@/components/templates/LoginPage";
import { getCookie } from "@/utils/cookies";

function Login() {
  const router = useRouter();
  const [csrToken, setCsrToken] = useState();

  useEffect(() => {
    const token = getCookie();
    setCsrToken(token);
  }, [router.pathname]);

  if (csrToken) router.push("/dashboard");

  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default Login;
