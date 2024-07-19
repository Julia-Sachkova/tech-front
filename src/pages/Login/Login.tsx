import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";

type Inputs = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup
      .string()
      .required("Это поле обязательно")
      .email("Это поле должно быть email"),
    password: yup
      .string()
      .required("Это поле обязательно")
      .min(6, "Минимальная длина пароля - 6 символов"),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col min-h-screen py-10 px-36 justify-center items-start w-full gap-4">
      <Link to="/" className="text-lg">
        ← Обратно на Главную
      </Link>

      <div className="flex flex-col flex-1 w-1/4 mx-auto items-center justify-center gap-9">
        <h1 className="font-bold text-2xl ">Вход</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full items-center gap-7"
        >
          <TextField
            variant="standard"
            error={!!errors.email}
            label="Email"
            helperText={errors.email?.message}
            {...register("email")}
            fullWidth
          />

          <TextField
            variant="standard"
            error={!!errors.password}
            label="Пароль"
            helperText={errors.password?.message}
            {...register("password")}
            fullWidth
          />

          <Button variant="contained" type="submit" className="w-1/2">
            Войти
          </Button>
        </form>

        <div className="flex flex-col items-center">
          <span>Еще нет аккаунта?</span>
          <Link
            to="https://t.me/Kirill_Sachkov"
            className="text-neutral-400 underline"
          >
            Регистрация на обучение
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
