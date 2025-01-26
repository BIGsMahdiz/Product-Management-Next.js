import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "@/schemas/auth";
import { loginInputs } from "@/constants/inputs";

import styles from "@/styles/LoginPage.module.css";
import { useLogin } from "@/services/mutations";
import { useRouter } from "next/router";
import { setCookie } from "@/utils/cookies";
import toast, { Toaster } from "react-hot-toast";

function LoginPage() {
  const { mutate, isPending } = useLogin();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);

    mutate(data, {
      onSuccess: (data) => {
        toast.success("شما با موفقیت وارد شدید!");
        router.push("/dashboard");
        setCookie(data?.token);
      },
      onError: (data) => {
        console.log(data);
      },
    });
  };
  return (
    <div className={styles.container}>
      <Toaster />
      <h2>بوت کمپ بوتواستارت</h2>

      <section>
        <div className={styles.formBox}>
          <img src="/images/Union.png" alt="Botostart" />
          <h3>فرم ورود</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            {loginInputs.map((input) => (
              <div key={input.id}>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  {...register(input.name)}
                />
                <p>{errors[input.name]?.message}</p>
              </div>
            ))}
            <button type="submit" disabled={isPending}>
              ورود
            </button>
          </form>
        </div>
        <Link href={"/register"}>حساب کاربری ندارید؟</Link>
      </section>
    </div>
  );
}

export default LoginPage;
