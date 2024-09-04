"use client"

import { Button, Stack, TextField, Typography } from "@mui/material";

export default function Home() {

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("SUBMITTED");
  }

  return (
    <main >
      <Stack component="form" gap={4} onSubmit={handleSubmit}>
        <Typography variant="h3">Register An Acount</Typography>
      <TextField label="Email"/>
      <TextField label="Password"/>
      <TextField label="First name"/>
      <TextField label="Last name"/>
     <Button variant="contained" type="submit">Register</Button>
      </Stack>
    </main>
  );
}
