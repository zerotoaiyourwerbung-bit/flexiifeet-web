import { whatsappLink } from "@/lib/site";
import Icon from "./Icon";

// Floating WhatsApp chat button, bottom-right on every page.
export default function WhatsAppButton() {
  return (
    <a className="ff-wa" href={whatsappLink()} target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">
      <Icon name="whatsapp" />
      <span className="ff-wa-label">Chat with us</span>
    </a>
  );
}
