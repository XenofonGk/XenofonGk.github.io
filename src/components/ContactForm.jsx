import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const response = await fetch("https://formspree.io/f/xeebdjda", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" required />

      <label>Email Address</label>
      <input type="email" name="email" required />

      <label>Message</label>
      <textarea name="message" required></textarea>

      <button type="submit">Send Message</button>

      {status === "SUCCESS" && <p>Message delivered straight to my inbox! </p>}
      {status === "ERROR" && <p>Oops! Something went wrong.</p>}
    </form>
  );
}
