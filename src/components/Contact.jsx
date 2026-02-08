import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

function Contact(){

const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    url: "https://www.facebook.com/ajib.at00/"
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/ajib_at00/"
  },
  {
    name: "TikTok",
    icon: <FaTiktok />,
    url: "https://www.tiktok.com/@ajib_at00"
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    url: "https://linkedin.com"
  }
];

    return(


            <nav className="bg-[#EBEBEB] text-black ">
      <ul className="flex gap-6 justify-center">

        {socialLinks.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-blue-400"
            >
              {item.icon}
              {item.name}
            </a>
          </li>
        ))}

      </ul>
    </nav>
    

    );
}
export default Contact;