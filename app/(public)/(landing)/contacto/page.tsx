import { ContactForm } from "../_components/contact-form";
import { Toaster } from "sonner";

export default function ContactPage() {
  return (
    <div>
      <ContactForm />
      <Toaster position="top-center" />
    </div>
  );
} 