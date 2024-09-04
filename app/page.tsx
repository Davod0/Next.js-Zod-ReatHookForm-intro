"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Från zod används för att definiera typen av data som ska användas i formuläret.
const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  firstName: z.string(),
  lastName: z.string().optional()
});

// interface user {
//   email: string;
//   password: string;
//   firstName: string;
//   lastName: string;
// }
// Istället för att ha ett interface använd zod för att definiera typen av data som här nedan.
type User = z.infer<typeof UserSchema>;

export default function Home() {

  //Från react-hook-form används för att hantera formulär.
  const form = useForm<User>({
    resolver: zodResolver(UserSchema)
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // const userInput = {};
    // const result = UserSchema.safeParse(userInput);
    // console.log("SUBMITTED", result);
  }

  return (
    <main >
      <Stack component="form" gap={4} onSubmit={handleSubmit}>
        <Typography variant="h3">Register An Acount</Typography>
      <TextField label="Email" {...form.register("email")} />
      <TextField label="Password" {...form.register("password")}/>
      <TextField label="First name" {...form.register("firstName")}/>
      <TextField label="Last name" {...form.register("lastName")}/>
     <Button variant="contained" type="submit">Register</Button>
      </Stack>
    </main>
  );
}
