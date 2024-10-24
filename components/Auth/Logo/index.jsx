import React from "react";

import Image from "next/image";
import logo from "@/public/img/logo.png";

export default function Logo() {
  return (
    <div className="hidden lg:block">
      <Image src={logo} width={120} height={120} alt="logo" />
    </div>
  );
}
