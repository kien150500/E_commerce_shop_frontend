import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="py-3" style={{ background: "#74AAA3", color: "white" }}>
      <div className="container text-center">
        <div className="mb-2">
          <a href="#" className="text-white text-decoration-none mx-2">Home</a>
          <a href="#" className="text-white text-decoration-none mx-2">About</a>
          <a href="#" className="text-white text-decoration-none mx-2">Shop</a>
          <a href="#" className="text-white text-decoration-none mx-2">Contact</a>
        </div>

        <div className="mb-2">
          <a href="#" className="text-white mx-2 fs-4"><FaSquareFacebook /></a>
          <a href="#" className="text-white mx-2 fs-4"><FaInstagramSquare /></a>
          <a href="#" className="text-white mx-2 fs-4"><AiFillTikTok /></a>
        </div>

        <p className="small mb-0">&copy; 2026 E-Shop</p>
      </div>
    </footer>
  );
};

export default Footer;