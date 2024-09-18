"use client";

import Image from "next/image";
import Header from "../components/Header";
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom";
import Feed from "../components/Feed";
import SearchVideoResult from "../components/SearchVideoResult";
import VideoDetails from "../components/VideoDetails";
import { AppContext } from "@/useContextHook/useContextApi";


export default function Home() {
  return (

    <AppContext>
      
    <BrowserRouter>
    <div className="flex flex-col w-full">
      <Header/>
       <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/search/:searchQuery" element={<SearchVideoResult/>}/>
        <Route path="/video/:categoryId/:videoId" element={<VideoDetails/>}/>
       </Routes>
    </div>
    </BrowserRouter>
    
    </AppContext>
  );
}
