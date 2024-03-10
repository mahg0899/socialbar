import React from "react";
import Facebook from "../components/Social/Facebook";
import Xtwitter from "../components/Social/Xtwitter";
import Instagram from "../components/Social/Instagram";
import Tiktok from "../components/Social/Tiktok";
import Discord from "../components/Social/Discord";
import Linkedin from "../components/Social/Linkedin";
import Github from "../components/Social/Github";
import Youtube from "../components/Social/Youtube";
import Twitch from "../components/Social/Twitch";
import Steam from "../components/Social/Steam";
import Letterbox from "../components/Social/Letterbox";
import Goodreads from "../components/Social/Goodreads";
import Storygraph from "../components/Social/Storygraph";
import Anilist from "../components/Social/Anilist";

export default function Home() {
  return (
    <div className="mx-auto w-5/12 max-w-lg pt-4">
      <a href="https://mahg.me">
        <img
          src="https://avatars.githubusercontent.com/u/46274461?s=400&u=5846db5b65abe095fe2ad097c4c358d0ada0cb74&v=4"
          alt="Profile Picture"
          className="mx-auto rounded-full w-40 h-40 mt-4 mb-4"
        />
      </a>
      <h2 class="font-medium text-gray-300 bar-text">@MAHG</h2>
      <div class="pt-8">
        <Xtwitter />
        <Instagram />
        <Discord />
        <Linkedin />
        <Github />
        <Twitch />
        <Steam />
        <Letterbox />
        <Goodreads />
        <Storygraph />
        <Anilist />
      </div>
    </div>
  );
}
