import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { FaPaperPlane, FaTimesCircle } from "react-icons/fa";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",    // استبدل بـ Service ID
        "YOUR_TEMPLATE_ID",   // استبدل بـ Template ID
        form.current,
        "YOUR_PUBLIC_KEY"     // استبدل بـ Public Key
      )
      .then(
        () => {
          toast.success(
            <span className="flex items-center gap-2">
              <FaPaperPlane className="animate-bounce" /> تم إرسال الرسالة بنجاح!
            </span>
          );
          form.current.reset();
        },
        () => {
          toast.error(
            <span className="flex items-center gap-2">
              <FaTimesCircle className="animate-pulse" /> حصلت مشكلة أثناء الإرسال
            </span>
          );
        }
      );
  };

  return (
    <section className="py-16 px-6 bg-gray-900 text-white" id="contact">
      {/* Toast Container */}
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
            padding: "12px 16px",
            borderRadius: "12px",
          },
          success: {
            style: {
              background: "#16a34a", // أخضر
            },
          },
          error: {
            style: {
              background: "#dc2626", // أحمر
            },
          },
        }}
      />

      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
 
      </div>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
      >
        <div>
          <label className="block text-left mb-2">الاسم</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-left mb-2">الإيميل</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-left mb-2">الرسالة</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
        >
          <FaPaperPlane /> إرسال
        </button>
      </motion.form>
    </section>
  );
};

export default ContactSection;
