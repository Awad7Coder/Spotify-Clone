import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DiplayHome from "./DiplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";

function Display() {
  const refDisplay = useRef();
  const location = useLocation();

  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split("/").pop() : "";

  // Use .find() instead of direct index access
  const album = albumsData.find(item => item.id === Number(albumId));
  const bgColor = album ? album.bgColor : "#121212"; // fallback

  useEffect(() => {
    if (isAlbum && album) {
      refDisplay.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      refDisplay.current.style.background = "#121212";
    }
  }, [isAlbum, album, bgColor]); // run effect when these change


  return (
    <div ref={refDisplay} className="w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75] lg:ml-0">
      <Routes>
        <Route path="/" element={<DiplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
}

export default Display;
