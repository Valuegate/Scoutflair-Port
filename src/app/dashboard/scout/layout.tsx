"use client";

import { ReactNode, FC } from "react";

import { usePathname } from "next/navigation";

import SideBar, { iNavItem } from "@/src/components/reusable/SideBar";
import TopBar from "@/src/components/reusable/TopBar";

import OverviewIcon from "@/public/icons/Overview Icon.svg";
import AnalyticsIcon from "@/public/icons/Analytics Icon.svg";
import ProfileIcon from "@/public/icons/Profile Icon.svg";
import MatchesIcon from "@/public/icons/Matches Icon.svg";
import AcademicIcon from "@/public/icons/Academic Icon.svg";
import FootballClubIcon from "@/public/icons/Footbal Club Icon.svg";
import SettingsIcon from "@/public/icons/Settings Icon.svg";

interface iAuthLayout {
  children: ReactNode;
}

const items: iNavItem[] = [
  {
    name: "Overview",
    icon: OverviewIcon,
    link: "/dashboard/scout/overview",
  },
  {
    name: "Evaluations",
    icon: AnalyticsIcon,
    link: "/dashboard/scout/evaluations",
  },
  {
    name: "Players",
    icon: ProfileIcon,
    link: "/dashboard/scout/players",
  },
  {
    name: "Matches",
    icon: MatchesIcon,
    link: "/dashboard/scout/matches",
  },
  {
    name: "Academies",
    icon: AcademicIcon,
    link: "/dashboard/scout/academies",
  },
  {
    name: "Local Pitches",
    icon: FootballClubIcon,
    link: "/dashboard/scout/pitches",
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    link: "/dashboard/scout/settings",
  },
];

const PlayerLayout: FC<iAuthLayout> = ({ children }) => {
  const pathName = usePathname();

  const determineIndex = () => {
    const current = pathName.split("/")[3];
    switch (current) {
      case "overview":
        return 0;
      case "evaluations":
        return 1;
      case "players":
        return 2;
      case "matches":
        return 3;
      case "academies":
        return 4;
      case "pitches":
        return 5;
      case "settings":
        return 6;
    }

    return -1;
  };

  const page = determineIndex();

  return (
    <div className="w-[100vw] h-[100vh] font-lato bg-gradient-to-b from-white to-background-gray flex justify-between">
      <SideBar items={items} active={page} />
      <div className="w-[calc(100vw-280px)] h-[100vh] flex flex-col justify-between">
        <TopBar />
        <div className="h-[calc(100vh-5rem+85px)] overflow-y-scroll w-full mt-[80px] ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PlayerLayout;