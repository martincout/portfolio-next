import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Image src="/MC.png" width={100} height={100}/>
        </span>
        <p className="text-slate-100">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
