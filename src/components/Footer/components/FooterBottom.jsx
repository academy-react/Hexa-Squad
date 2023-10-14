import React from "react";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="flex gap-5 text-3xl transition-all">
        <a href="#" className="hover:opacity-80 hover:scale-125">
          <i className="bi bi-linkedin text-semiWhite"></i>
        </a>
        <a href="#" className="hover:opacity-80 hover:scale-125">
          <i className="bi bi-whatsapp text-semiWhite"></i>
        </a>
        <a href="#" className="hover:opacity-80 hover:scale-125">
          <i className="bi bi-instagram text-semiWhite"></i>
        </a>
        <a href="#" className="hover:opacity-80 hover:scale-125">
          <i className="bi bi-telephone text-semiWhite"></i>
        </a>
        <a href="#" className="hover:opacity-80 hover:scale-125">
          <i className="bi bi-telegram text-semiWhite"></i>
        </a>
      </div>
      <div className="flex gap-2">
        <i className="bi bi-pin-angle"></i>
        <p>
          ساری - بلوار جاده دریا - بعد از دنیای آرزو - نرسیده به دانشگاه روزبهان
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
