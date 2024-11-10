import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-row justify-between py-6 px-96 border border-t-gray-300 w-full h-56">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-medium text-4xl ">Get in touch</h1>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row justify-between gap-4 text-2xl underline"
          >
            batsuuri2146@gmail.com
          </a>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-medium text-4xl">Social</h1>
          <div className="flex flex-row justify-between gap-x-8 text-2xl">
            <a
              href="https://www.facebook.com/kalu.ulak.77"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/batsuuri_77/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://github.com/Batsuuri77"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/batsuuri-battsooj-b27231b8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
