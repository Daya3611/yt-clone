"use client"

import React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme, resolvedTheme: theme, systemTheme } = useTheme();

  return (
    <div className="flex rounded-3xl overflow-hidden border border-border">
      <Button onClick={() => setTheme("dark")} size="icon" className="rounded-full bg-white text-black dark:bg-white dark:text-black" variant={"ghost"}><Moon className="h-4 w-4" /></Button>
      <Button onClick={() => setTheme("light")} size="icon" className="rounded-full dark:bg-transparent hover:bg-primary dark:text-foreground bg-primary hover:text-primary-foreground text-primary-foreground" variant={"ghost"}><Sun className="h-4 w-4" /></Button>
    </div>
  )
}