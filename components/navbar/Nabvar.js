import React from "react";
import link from "next/link";
import Link from "next/link";

const Nabvar = () => {
  return (
    <div>
      <nav>
        <menu>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </menu>
      </nav>
    </div>
  );
};

export default Nabvar;
