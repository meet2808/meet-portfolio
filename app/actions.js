"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export async function submitContactForm(values) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: "Invalid form data." };
  }

  // Simulate sending an email or saving to a database
  console.log("New contact form submission:", parsed.data);
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true };
}
