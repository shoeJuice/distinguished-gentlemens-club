import axios from "axios";

type FormData = {
  "First Name": String;
  "Last Name": String;
  "Email Address": String;
  "Phone #": String;
  Message: String;
};

/**
 * Submit a form to the backend.
 * @param form
 * @throws {Error} If the form is not valid.
 * @returns {Promise} A promise that resolves when the form is submitted.
 */
async function submitContactForm(form: FormData) {
  return axios.post("/api/contact", form, {
    baseURL: process.env.BASE_URL,
  });
}




export { submitContactForm };
