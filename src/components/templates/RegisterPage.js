import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerSchema } from "@/schemas/auth";
import { registerInputs } from "@/constants/inputs";

import styles from "@/styles/RegisterPage.module.css";
import { useRegister } from "@/services/mutations";
import { useRouter } from "next/router";

function RegisterPage() {
  const { mutate } = useRegister();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);

    mutate(
      { username: data.username, password: data.password },
      {
        onSuccess: (data) => {
          console.log(data);
          router.push("/login");
        },
        onError: (data) => {
          console.log(data);
        },
      }
    );
  };
  return (
    <div className={styles.container}>
      <h2>بوت کمپ بوتواستارت</h2>

      <section>
        <div className={styles.formBox}>
          <img src="/images/Union.png" alt="Botostart" />
          <h3>فرم ثبت نام</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            {registerInputs.map((input) => (
              <div key={input.id}>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  {...register(input.name)}
                />
                <p>{errors[input.name]?.message}</p>
              </div>
            ))}
            <button type="submit">ثبت نام</button>
          </form>
        </div>
        <Link href={"/login"}>حساب کاربری دارید؟</Link>
      </section>
    </div>
  );
}

export default RegisterPage;
