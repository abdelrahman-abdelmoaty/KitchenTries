import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY;

if (!API_KEY) {
  throw new Error("MAILGUN_API_KEY is required");
}

const mailgun = new Mailgun(FormData);

export const mg = mailgun.client({
  username: "api",
  key: API_KEY,
});
