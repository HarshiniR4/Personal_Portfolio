"use client";

import Sidebar from './components/SideBar';
import Header from './components/Header';
import './globals.css';
import { ReactNode, useState } from 'react';
import { Analytics } from "@vercel/analytics/react"

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <html lang="en">
      <body>
        <Header onProfileClick={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="main-content">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
