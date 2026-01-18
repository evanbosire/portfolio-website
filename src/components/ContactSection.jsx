import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export const ContactSection = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending) return;
    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_22k1ktl",
        "template_n55g8bg",
        formRef.current,
        "2Paj0dHo2zCAhhr1d"
      );

      toast.success("Message sent successfully 🚀");
      formRef.current.reset();
    } catch (err) {
      toast.error("Failed to send message 😕");
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-20">
          Let’s discuss your project and turn your ideas into reality.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LEFT */}
          <div className="space-y-12 text-left">
            {/* CONTACT INFO */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Contact Information
              </h3>

              <ul className="space-y-5 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p>nyasimimartin@gmail.com</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p>0742 065 047</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p>Nairobi, Kenya</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* SOCIALS */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">
                Connect With Me
              </h4>

              <div className="flex gap-5">
                <a
                  href="https://www.instagram.com/mogere90?igsh=anZ4OHVqNDZpYXRl"
                  target="_blank"
                  className="p-3 rounded-full border border-border hover:text-primary hover:border-primary transition"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>

                <a
                  href="https://www.tiktok.com/@buramartinmmoja?_r=1&_t=ZM-92ewU5oibbE"
                  target="_blank"
                  className="p-3 rounded-full border border-border hover:text-primary hover:border-primary transition"
                >
                  {/* TikTok icon replacement using Twitter-style */}
                  <FaTiktok className="w-5 h-5" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="p-3 rounded-full border border-border hover:text-primary hover:border-primary transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* WHATSAPP QUICK CTA */}
            <a
              href="https://wa.me/254742065047"
              target="_blank"
              className="
                inline-flex items-center gap-3
                px-6 py-3 rounded-full
                bg-green-500 text-white font-semibold
                hover:scale-105 transition
                shadow-lg
              "
            >
              <Phone className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* RIGHT: FORM */}
          <div
            className="
              bg-card border border-border rounded-2xl p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            "
          >
            <h3 className="text-xl font-semibold mb-6 text-primary">
              Send a Message
            </h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="
                  w-full px-4 py-3 rounded-lg
                  bg-background border border-border
                  focus:outline-none focus:ring-2 focus:ring-primary
                  transition
                "
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="
                  w-full px-4 py-3 rounded-lg
                  bg-background border border-border
                  focus:outline-none focus:ring-2 focus:ring-primary
                  transition
                "
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="
                  w-full px-4 py-3 rounded-lg
                  bg-background border border-border
                  focus:outline-none focus:ring-2 focus:ring-primary
                  transition
                "
              />

              <button
                type="submit"
                disabled={isSending}
                className="
                  cosmic-button flex items-center justify-center gap-2
                  disabled:opacity-60 disabled:cursor-not-allowed
                "
              >
                {isSending ? (
                  <>
                    <span className="animate-spin">🌀</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
