"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "" });

    try {
      await emailjs.send(
        "service_qk78lwp",
        "template_ap6iqyk",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_name: "Damilare",
        },
        "M8LZDC1xESjqY1HbT"
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll reply within 24–48 hours.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or email me directly.",
      });
    }

    // Auto-clear status after 5 seconds
    setTimeout(() => {
      setStatus({ type: "idle", message: "" });
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="container relative z-20 mx-auto max-w-7xl px-6 py-16"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Left Side */}
        <div>
          <h2 className="mb-3 text-2xl font-semibold text-white md:text-3xl">
            Let's build something impactful
          </h2>
          <p className="text-zinc-300/90">
            Open to roles, freelance, and collaborations. Recruiters and
            founders welcome.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button variant="outline" asChild>
              <a
                href="https://github.com/drecollins1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="size-4" /> GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/akingbade-damilare-moses-877ab6162/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="mailto:adarecollins@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="size-4" /> Email
              </a>
            </Button>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>I'll get back within 24–48 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                disabled={status.type === "loading"}
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                disabled={status.type === "loading"}
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                disabled={status.type === "loading"}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={status.type === "loading"}
              >
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </Button>

              {/* Status Feedback */}
              {status.type === "success" && (
                <p className="text-center text-emerald-400 text-sm font-medium">
                  {status.message}
                </p>
              )}
              {status.type === "error" && (
                <p className="text-center text-red-400 text-sm font-medium">
                  {status.message}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
