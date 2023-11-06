import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header className="w-full mt-5 mb-10">
      <nav className="flex justify-between py-5 dark:text-white">
        <Link href={'/'}>
        <div className="logo">Logo</div>
        </Link>
        <ul className="flex gap-5">
          <li>
            <Link href={"/"}>Buttons</Link>
          </li>
          <li>
            <Link href={"/forms"}>Forms</Link>
          </li>
          <li>
            <Link href={"/"}>Lists</Link>
          </li>
          <li>
            <Link href={"/"}>Sliders</Link>
          </li>
          <li>
            <Link href={"/"}>Toggles</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
