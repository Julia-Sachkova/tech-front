import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import { useAppSelector } from "../../../hooks";

export type Inputs = {
  name: string;
  github: string;
  photo?: string;
  contacts: string;
};

const schema = yup
  .object({
    name: yup.string().required("Это поле обязательно"),
    github: yup.string().required("Это поле обязательно"),
    photo: yup.string(),
    contacts: yup.string().required("Это поле обязательно"),
  })
  .required();

const Settings = () => {
  const user = useAppSelector((state) => state.user.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.name,
      github: user?.github,
      photo: user?.photo,
      contacts: user?.contacts,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-10 flex-1">
      <span className="text-3xl font-light">Редактирование данных</span>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between w-2/3 flex-1"
      >
        <div className="grid grid-rows-3 grid-flow-col w-full gap-7">
          <TextField
            error={!!errors.name}
            label="Имя"
            helperText={errors.name?.message}
            {...register("name")}
            fullWidth
          />

          <TextField
            error={!!errors.github}
            label="GitHub"
            helperText={errors.github?.message}
            {...register("github")}
            fullWidth
          />

          <TextField
            error={!!errors.photo}
            label="Фото"
            helperText={errors.photo?.message}
            {...register("photo")}
            fullWidth
          />

          <TextField
            error={!!errors.contacts}
            label="Контакты"
            helperText={errors.contacts?.message}
            {...register("contacts")}
            fullWidth
          />
        </div>

        <Button
          variant="contained"
          type="submit"
          size="large"
          className="w-fit"
        >
          Сохранить
        </Button>
      </form>
    </div>
  );
};

export default Settings;
