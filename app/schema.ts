import { z } from "zod";

// Från zod används för att definiera typen av data och dess property som ska användas i applikationen.
export const UserSchema = z.object({
  email: z.string().email({message: "Not a valid email"}),
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
// Istället för att ha ett interface använd zod för att deklarera typen av data som behövs i applikationen.
export type User = z.infer<typeof UserSchema>;