import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../../lib/utils";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { send } from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

export const ContactSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    send(
      "service_x0xt5c8", // Replace with your EmailJS service ID
      "template_kjzti6i", // Replace with your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "ViZeFuuMETUgK9cqV" // Replace with your EmailJS user ID
    ).then(
      () => {
        toast.success("Message sent successfully!", {
          autoClose: 2000,
          closeOnClick: true,
          theme: isDarkMode ? "dark" : "light",
        });
      },
      (error) => {
        console.error("Failed to send message:", error);
        toast.error("Failed to send message. Please try again later.", {
          autoClose: 2000,
          closeOnClick: true,
          theme: isDarkMode ? "dark" : "light",
        });
      }
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <ToastContainer />
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-start">Email</h4>
                  <a
                    href="mailto:abinadua07@gmail.com"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    abinadua07@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-start">Phone</h4>
                  <a
                    href="tel:+639765647683"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (+63) 976 564 7683
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-start">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Los Baños, Laguna, 4030
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/abigail-nadua/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/abiiinadua/" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form id="form" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-start"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-start"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="johndoe@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-start"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cta w-full flex items-center justify-center gap-2"
                )}
              >
                <Send size={16} />
                {isSubmitting ? "Sending..." : "Send a Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
