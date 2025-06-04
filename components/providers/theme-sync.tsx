"use client"

import { useEffect } from "react"
import { useThemeStore } from "@/app/store/useThemeStore"

export function ThemeSync() {
  const theme = useThemeStore((state) => state.theme)

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
  }, [theme])

  return null
} 