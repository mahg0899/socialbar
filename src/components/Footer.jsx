import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <div className="sm:px-8">
        <div className="border-t border-zinc-100/10 pb-16 pt-10">
          {/* This lane is for the lines on footer site */}
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="mt-6 flex gap-6">
                  <a
                    className="group -m-1 p-1"
                    href="https://github.com/mahg0899/socialbar"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ color: "#C4C4C4" }}
                      size="2x"
                    />
                  </a>
                </div>
                <p className="text-zinc-300">
                  &copy; {new Date().getFullYear()}. Made with ❤️ by{" "}
                  <a href="https://mahg.me" target="_blank">
                    MAHG
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
