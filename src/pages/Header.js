import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";

const Header = () => {
  return (
    <div className="">
      <header className="flex justify-between items-center text-white p-10 max-md:flex-col ">
        <div className="">
          <div className="font-bold text-xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            Serendale
          </div>
        </div>
        <div>
          <ul className="flex-row flex gap-7 max-md:flex-col max-md:pt-10 items-center">
            <li>Smart Contracts</li>
            <li>Services</li>
            <li>Solutions</li>
            <li>Roadmap</li>
            <li>Whitepaper</li>
          </ul>
        </div>
        <div className="flex gap-3 max-md:mt-10">
          <IconButton
            aria-label="GitHubIcon"
            size="small"
            href="https://github.com/jeefxM"
          >
            <GitHubIcon fontSize="medium" sx={{ color: "white" }} />
          </IconButton>

          <IconButton
            aria-label="Twitter"
            size="small"
            href="https://twitter.com/Maisuradze077"
          >
            <TwitterIcon fontSize="medium" sx={{ color: "white" }} />
          </IconButton>

          <IconButton
            aria-label="RedditIcon"
            size="small"
            href="https://twitter.com/Maisuradze077"
          >
            <RedditIcon fontSize="medium" sx={{ color: "white" }} />
          </IconButton>

          <IconButton
            aria-label="LinkedInIcon"
            size="small"
            href="https://linkedin.com/jeefx"
          >
            <LinkedInIcon fontSize="medium" sx={{ color: "white" }} />
          </IconButton>
        </div>
      </header>
    </div>
  );
};

export default Header;
