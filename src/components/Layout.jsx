import React from "react"
import Sidebar from "./Sidebar"

export default function MainLayout({children}){
  return(
    <main className="mobile:flex min-h-screen max-w-full w-full">
      <Sidebar />
      <div>
        {children}
      </div>
    </main>
  )
}