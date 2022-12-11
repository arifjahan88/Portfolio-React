import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zxblubb",
        "template_e978ymi",
        form.current,
        "sMKLDD5lg_u6LsqGQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="max-w-[1240px] h-screen mx-auto mt-48 mb-5 p-4">
      <div>
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact Me
        </p>
        <h2 className="py-4">Get In Touch</h2>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" bg-slate-300 p-5 rounded-lg"
      >
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-5 my-5">
          <input
            name="user_name"
            type="text"
            placeholder="Your Name"
            className="input w-full"
          />

          <input
            name="user_email"
            type="email"
            placeholder="Your Email"
            className="input w-full"
          />
        </div>
        <textarea
          name="message"
          className="textarea mt-2 w-full h-48"
          placeholder="Your Message"
        ></textarea>

        <div type="submit" value="Send" className="text-center mt-4">
          <button className="btn btn-wide">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
