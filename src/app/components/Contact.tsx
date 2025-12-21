import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactProps {
  isDark: boolean;
}

export function Contact({ isDark }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'nature.clicks.of@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 (better to reach via mail)' },
    { icon: MapPin, label: 'Location', value: 'Bangalore, India' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/clicks_.of._nature/',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/0Divyanshu0',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/your_username',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/divyanshu-srivastava-564a32230/',
    },
  ];

  return (
    <section
      id="contact"
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Let&apos;s Talk
          </h2>
          <p
            className={`text-lg sm:text-xl px-4 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            If something here resonates with you, I’d love to hear about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3
              className={`text-xl sm:text-2xl mb-4 sm:mb-6 ${
                isDark ? 'text-white' : 'text-black'
              }`}
            >
              Ways to Reach Me
            </h3>

            <p
              className={`mb-6 sm:mb-8 text-sm sm:text-base ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              You can reach out in whatever way feels easiest.
              Whether it’s a clear idea or just a thought you’re exploring,
              I’m happy to listen.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center"
                >
                  <div
                    className={`p-3 rounded-lg mr-4 ${
                      isDark ? 'bg-gray-800' : 'bg-gray-100'
                    }`}
                  >
                    <info.icon
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        isDark ? 'text-white' : 'text-black'
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {info.label}
                    </p>
                    <p
                      className={`text-sm sm:text-base ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs sm:text-sm mb-4 text-gray-500">
                You can also find me here
              </p>

              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4">
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
                    className={`px-4 py-2 rounded-lg text-sm transition-colors inline-flex items-center justify-center ${
                      isDark
                        ? 'bg-gray-800 hover:bg-gray-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-black'
                    }`}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            <div>
              <label className="block text-sm mb-2 text-gray-400">
                Name
              </label>
              <input
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="What should I call you?"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 text-white focus:ring-white'
                    : 'bg-white border-gray-300 text-black focus:ring-black'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Where can I reach you?"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 text-white focus:ring-white'
                    : 'bg-white border-gray-300 text-black focus:ring-black'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">
                What’s on your mind?
              </label>
              <input
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                placeholder="A story, a project, or just a thought"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 text-white focus:ring-white'
                    : 'bg-white border-gray-300 text-black focus:ring-black'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">
                Message
              </label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me what you’re thinking — there’s no need to be formal."
                className={`w-full px-4 py-3 rounded-lg border resize-none focus:outline-none focus:ring-2 ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 text-white focus:ring-white'
                    : 'bg-white border-gray-300 text-black focus:ring-black'
                }`}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-lg flex items-center justify-center ${
                isDark
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              Send Note
              <Send className="ml-2 w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
