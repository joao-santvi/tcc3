import styles from "../../../../styles/home-css/header.module.css"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "../components/Menu";
// import BtnHeader from "../components/BtnHeader";

function Header() {
  return (
    <>
      <div className="header">
        <span className="material-symbols-outlined" id="menu-bar">
          menus
        </span>
        <Link href="/">
          
            <Image className="img-logo" src="/logo.jpg" alt="" />
         
        </Link>
        <Menu />
        {/* <BtnHeader /> */}
        <Link href="/cadastro">
        
        </Link>
      </div>
    </>
  );
}

export default Header;