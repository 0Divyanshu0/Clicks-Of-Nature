import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

type ContactField = "name" | "email" | "subject" | "message" | "company";

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string;
}

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

const textFields: Array<Exclude<ContactField, "message" | "company">> = [
  "name",
  "email",
  "subject",
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "nature.clicks.of@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 (better to reach via mail)" },
  { icon: MapPin, label: "Location", value: "Bangalore, India" },
];

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/clicks_.of._nature/",
  },
  {
    name: "GitHub",
    url: "https://github.com/0Divyanshu0",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/divyanshu-srivastava-564a32230/",
  },
];

export function Contact() {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [isSending, setIsSending] = useState(false);

  const updateField = (field: ContactField, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (formData.company) {
      return;
    }

    const lastSent = localStorage.getItem("lastEmailSent");
    const now = Date.now();

    if (lastSent && now - Number(lastSent) < 60_000) {
      toast.error("Please wait a minute before sending another message.");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      localStorage.setItem("lastEmailSent", now.toString());
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData(initialFormState);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 px-4 py-12 transition-colors sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center sm:mb-12"
        >
          <h2 className="mb-3 text-3xl text-white sm:mb-4 sm:text-4xl lg:text-5xl">
            Let&apos;s Talk
          </h2>
          <p className="px-4 text-lg text-gray-300 sm:text-xl">
            If something here resonates with you, I&apos;d love to hear about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="mb-4 text-xl text-white sm:mb-6 sm:text-2xl">
              Ways to Reach Me
            </h3>

            <p className="mb-6 text-sm text-gray-400 sm:mb-8 sm:text-base">
              You can reach out in whatever way feels easiest. Whether it&apos;s a
              clear idea or just a thought you&apos;re exploring, I&apos;m happy to
              listen.
            </p>

            <div className="mb-6 space-y-4 sm:mb-8 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center"
                >
                  <div className="mr-4 rounded-lg bg-gray-800 p-3">
                    <info.icon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 sm:text-sm">
                      {info.label}
                    </p>
                    <p className="text-sm text-white sm:text-base">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <p className="mb-4 text-xs text-gray-500 sm:text-sm">
                You can also find me here
              </p>

              <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="inline-flex items-center justify-center rounded-lg bg-gray-800 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-700"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="order-1 space-y-4 lg:order-2 sm:space-y-6"
          >
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={(event) => updateField("company", event.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {textFields.map((field) => (
              <input
                key={field}
                required
                type={field === "email" ? "email" : "text"}
                placeholder={
                  field === "name"
                    ? "What should I call you?"
                    : field === "email"
                    ? "Where can I reach you?"
                    : "A story, a project, or just a thought"
                }
                value={formData[field]}
                onChange={(event) => updateField(field, event.target.value)}
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white"
              />
            ))}

            <textarea
              rows={5}
              required
              placeholder="Tell me what you're thinking - there's no need to be formal."
              value={formData.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="w-full resize-none rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white"
            />

            <motion.button
              type="submit"
              disabled={isSending}
              whileHover={!isSending ? { scale: 1.02 } : {}}
              whileTap={!isSending ? { scale: 0.98 } : {}}
              className={`flex w-full items-center justify-center rounded-lg bg-white py-3 text-black transition-colors hover:bg-gray-100 ${
                isSending ? "cursor-not-allowed opacity-60" : ""
              }`}
            >
              {isSending ? "Sending..." : "Send Note"}
              <Send className="ml-2 h-4 w-4" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
