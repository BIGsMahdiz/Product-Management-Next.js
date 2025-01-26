import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import RegisterPage from "@/components/templates/RegisterPage";
import { getCookie } from "@/utils/cookies";

function Register() {
  const router = useRouter();
  const [csrToken, setCsrToken] = useState();

  useEffect(() => {
    const token = getCookie();
    setCsrToken(token);
  }, [router.pathname]);

  if (csrToken) router.push("/dashboard");
  return (
    <div>
      <RegisterPage />
    </div>
  );
}

export default Register;
