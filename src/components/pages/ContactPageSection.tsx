import { Contact2 } from "lucide-react";
import { useState } from "react";
import { IconLabel } from "../common/IconLabel";
import { HeadingText } from "./HeadingText";

export function ContactPageSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (formData?.email && formData?.message) {
      e.preventDefault();
      setIsSubmitting(true);

      const data = {
        service_id: "service_jgbeo3q",
        template_id: "template_8397uge",
        user_id: "TiMuG2OmGPi4afpeP",
        template_params: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      };

      fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            setIsSubmitting(false);
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then(() => {
          const data = {
            service_id: "service_jgbeo3q",
            template_id: "template_q8dok5o",
            user_id: "TiMuG2OmGPi4afpeP",
            template_params: {
              name: formData.name,
              subject: formData.message,
              email: formData.email,
            },
          };

          fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          alert("Thank you for reaching out. I'll get back to you soon");
          setIsSubmitting(false);

          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          setIsSubmitting(false);
        });
    } else {
      alert("Please enter email and message in the form");
    }
  };

  return (
    <section>
      <div className="py-12 flex flex-col items-center gap-y-8">
        <div className="flex">
          <IconLabel label="Contact" icon={Contact2} />
        </div>
        <div className="flex-col">
          <HeadingText>Let us know how can we help!</HeadingText>
          <p className="text-lg mt-2">
            Connect and create something big together
          </p>
        </div>
      </div>
      {/* Contact Us form section */}
      <div className="flex justify-center py-8 px-4 sm:px-8 xl:px-[var(--horizontal-padding)]">
        <div className="h-full w-full p-4 md:p-12 lg:p-16 flex flex-col rounded-3xl bg-teal-900 justify-center gap-y-12 text-white">
          {/* Top contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col rounded-2xl border border-white/20 text-center outline-hidden">
              <a target="_blank" href="https://x.com/Hardpatel2602">
                <h3 className="flex flex-1 items-center justify-center text-xl font-semibold py-6">
                  Hardpatel2602
                </h3>
              </a>
              <div className="flex flex-1 items-center rounded-b-2xl justify-center w-full bg-white/10 py-2">
                <p className="text-sm text-white/70">
                  Let's connect over the Twitter
                </p>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-white/20 text-center outline-hidden">
              <a target="_blank" href="mailto:hardpatel2602@gmail.com">
                <h3 className="flex flex-1 items-center justify-center text-xl font-semibold py-6">
                  hardpatel2602@gmail.com
                </h3>
              </a>
              <div className="flex flex-1 items-center rounded-b-2xl justify-center w-full bg-white/10 py-2">
                <p className="text-sm text-white/70">
                  Contact me for any other information
                </p>
              </div>
            </div>
          </div>

          {/* Message + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            {/* Left side text */}
            <div className="col-span-1 pr-12">
              <HeadingText className="text-white text-left">
                Drop Us a Message and Start the Conversation!
              </HeadingText>
              <p className="mt-4 text-white/70 text-left">
                We're eager to communicate with you! If there are inquiries,
                comments, or a simple desire to interact, don't hesitate and
                pave the way for us to connect.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col col-span-1 gap-4 rounded-2xl border border-white/20 p-4 md:p-6 text-left"
            >
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full rounded-full bg-white/10 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  name="email"
                  onChange={handleChange}
                  placeholder="john@gmail.com"
                  className="w-full rounded-full bg-white/10 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  name="message"
                  onChange={handleChange}
                  placeholder="Your message"
                  className="min-h-12 max-h-24 w-full rounded-2xl bg-white/10 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-green-300"
                  rows={4}
                />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-green-300 px-6 py-2 font-semibold text-teal-900 hover:bg-lime-300 transition"
              >
                Submit <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
