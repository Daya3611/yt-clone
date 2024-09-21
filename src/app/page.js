"use client";

import Header from "../components/Header";
import Feed from "../components/Feed";
import { AppContext } from "@/useContextHook/useContextApi";

import { useEffect } from 'react';
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter;

  useEffect(() => {
    // Ensure the router is mounted
    if (!router.isReady) return;
  }, [router.isReady]);

  return (
    <AppContext>
      <div className="flex flex-col w-full">
        <Header />
        <Feed />
      </div>
    </AppContext>
  );
}
