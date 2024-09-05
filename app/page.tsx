"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { registerUser } from "./actions";
import { User, UserSchema } from "./schema";

export default function Home() {
  //Från react-hook-form används för att validera formulär.
    const form = useForm<User>({
      resolver: zodResolver(UserSchema),
      mode: "onBlur"
    });

  const register = (user: User) => {
    console.log(user);
    registerUser(user);
  };

  return (
    <main >
      <Stack component="form" gap={4} onSubmit={form.handleSubmit(register)}>
        <Typography variant="h3">Register An Acount</Typography>

      <TextField label="Email" {...form.register("email")} 
       error={Boolean(form.formState.errors.email)}
       helperText={form.formState.errors.email?.message}/>

      <TextField label="Password" {...form.register("password")}
      error={Boolean(form.formState.errors.password)}
       helperText={form.formState.errors.password?.message}/>

      <TextField label="First name" {...form.register("firstName")}
      error={Boolean(form.formState.errors.firstName)}
       helperText={form.formState.errors.firstName?.message}/>

      <TextField label="Last name" {...form.register("lastName")}
      error={Boolean(form.formState.errors.lastName)}
       helperText={form.formState.errors.lastName?.message}/>

     <Button variant="contained" type="submit">Register</Button>
      </Stack>
    </main>
  );
}
