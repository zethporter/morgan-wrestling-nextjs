import { SiFacebook, SiInstagram } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center text-3xl md:text-2xl bg-base-200">
      <div className="bg-transparent mx-auto p-2 flex flex-row justify-center space-x-3">
        <Link href={"https://www.facebook.com/groups/1422093051346115/"}>
          <SiFacebook className="fill-secondary hover:fill-secondary-focus cursor-pointer" />
        </Link>
        <Link href={"https://www.instagram.com/morgantrojanwrestling/"}>
          <SiInstagram className="fill-secondary hover:fill-secondary-focus cursor-pointer" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
