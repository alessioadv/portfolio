import { React, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [to_name, setName] = useState("");
  const [email_from, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //Function Send Email Axios
  // const SubmitHandler = async (e) => {
  //   e.preventDefault();
  //   if (!email || !subject || !message || !name) {
  //     return toast.error("Please complete the form");
  //   }
  //   try {
  //     setLoading(true);
  //     const { data } = await axios.post("/api/email", {
  //       email,
  //       subject,
  //       name,
  //       message,
  //     });
  //     setLoading(false);
  //     toast.success(data.message);
  //   } catch (err) {
  //     setLoading(false);
  //     toast.error(
  //       err.response && err.response.data.message
  //         ? err.response.data.message
  //         : err.message
  //     );
  //   }
  // };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!to_name || !email_from || !subject || !message) {
      return toast.error("Please complete the form");
    }
    try {
      setLoading(true);
      emailjs.sendForm(
        "service_9c3pl5p",
        "template_45sscur",
        e.target,
        "ug3U_RQeBlwOYRggW"
      );

      setLoading(false);
      toast.success("Send Email Successfully");
    } catch (err) {
      setLoading(false);
      toast.error("Error");
    }
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <ToastContainer position="bottom-center" limit={1} />
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
              CONTACT FOR
              <br />
            </h2>

            <p className="h2 text-accent">Booking and Collaboration</p>

            <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
              SEND YOU MESSAGE
            </h4>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              id="to_name"
              name="to_name"
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Full Name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              id="email_from"
              type="email"
              name="email_from"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your Email"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              id="subject"
              type="text"
              name="subject"
              onChange={(e) => setSubject(e.target.value)}
              required
              placeholder="Subject"
            />

            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-12 resize-noce"
              id="message"
              placeholder="Your message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              cold="30"
              rows="10"
            ></textarea>

            <button disabled={loading} type="submit" className="btn btn-lg">
              {loading ? "Sending..." : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
