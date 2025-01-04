"use server";
import { mg } from "@/lib/email";

export async function sendEmail(email: string) {
  try {
     await mg.messages.create("www.kitchentries.com", {
      from: "KitchenTries <mailgun@www.kitchentries.com>",
      to: [email],
      subject: "We're Cooking Up Something Special!",
      text: `Kitchentries is coming soon! Be the first to know when we launch.`,
    });
    return { success: "Email sent successfully" };
  } catch (error) {
    console.error(error);
    return { error: "An error occurred while sending the email" };
  }
}
