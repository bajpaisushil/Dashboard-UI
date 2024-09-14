"use client";

import {
  BookOpenCheck,
  FileChartColumn,
  LayoutDashboardIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarItem {
  id: number;
  title: string;
  icon: any;
  link: string;
}

function Sidebar() {
  const pathname = usePathname();
  const sidebarList: SidebarItem[] = [
    {
      id: 1,
      title: "Dashboard",
      icon: LayoutDashboardIcon,
      link: "/dashboard",
    },
    {
      id: 2,
      title: "Skill Test",
      icon: BookOpenCheck,
      link: "/skill-test",
    },
    {
      id: 3,
      title: "Internship",
      icon: FileChartColumn,
      link: "/internship",
    },
  ];
  return (
    <div className="flex flex-col gap-2 p-4 bg-white rounded-lg h-screen overflow-auto">
      {sidebarList.map((item: SidebarItem) => (
        <Link
          key={item.id}
          href={item.link}
          className={`flex items-center gap-3 p-2 h-16 rounded-2xl hover:bg-gray-200 transition-colors ${
            pathname.includes(item?.link) ? "bg-blue-50" : ""
          }`}
        >
          <item.icon
            className={`w-6 h-6 text-gray-600 ${
              pathname.includes(item?.link) ? "text-blue-700" : ""
            }`}
          />
          <span
            className={`text-lg text-gray-700 font-bold ${
              pathname.includes(item?.link) ? "text-blue-700" : ""
            }`}
          >
            {item.title}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
