import { whatsappLink } from "@/lib/site";

// Floating WhatsApp chat button, bottom-right on every page.
export default function WhatsAppButton() {
  return (
    <a className="ff-wa" href={whatsappLink()} target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">
      <i className="fa fa-whatsapp" aria-hidden="true"></i>
      <span className="ff-wa-label">Chat with us</span>
    </a>
  );
}
