import React from "react"
import Sidebar from "./Sidebar"

export default function MainLayout({children}){
  return(
    <main className="flex min-h-screen w-full">
      <Sidebar />
      <div>
        {children}
      </div>
    </main>
  )
}