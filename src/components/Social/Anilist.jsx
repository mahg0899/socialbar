import React from "react";

export default function Anilist() {
  return (
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 pt-3">
      <div class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 bar anilist">
        <div class="flex-shrink-0">
          <img class="h-10 w-10" src="./anilist.svg" alt="" />
        </div>
        <div class="min-w-0 flex-1 text-center">
          <a
            href="https://anilist.co/user/xdarkhg/"
            class="focus:outline-none"
            target="_blank"
          >
            <span class="content-center" aria-hidden="true">
              <p class="font-medium text-gray-900 mr-20 bar-text">Anilist</p>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
