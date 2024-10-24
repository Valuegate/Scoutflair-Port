"use client"; // Only if using App Router
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  useCurrentUserStore,
  usePlayerDataStore,
  useScoutDataStore,
} from "../stores/userStore";

import { useGetPlayer } from "@/src/hooks/player";
import { useGetScout } from "@/src/hooks/scout";

import { getYearDifference } from "../functions/dateFunctions";
import { Loader } from "@mantine/core";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const {
    data: playerResponse,
    get: getPlayer,
    success: getPlayerSuccess,
    loading: loadingPlayer,
  } = useGetPlayer();

  const {
    data: scoutResponse,
    get: getScout,
    success: getScoutSuccess,
    loading: loadingScout,
  } = useGetScout();

  useEffect(() => {
    const type = determineUser();
    if (type === 0) {
      getPlayer();
    } else if (type === 1) {
      getScout();
    }
  }, []);

  const determineUser = () => {
    const current = pathName.split("/")[2];

    if (current === "player") {
      return 0;
    } else if (current === "scout") {
      return 1;
    }
    return -1;
  };

  useEffect(() => {
    if (!loadingPlayer && getPlayerSuccess) {
      const date: string = playerResponse?.dob!;
      useCurrentUserStore.setState({
        role: "PLAYER",
        name: playerResponse?.fullName,
        image: playerResponse?.imageUrl,
      });

      const dob = new Date(date);
      const years = getYearDifference(new Date(), dob);

      usePlayerDataStore.setState({
        role: playerResponse?.position,
        age: years,
        bio: playerResponse?.biography,
        dob: dob,
        phone: playerResponse?.phone,
        email: playerResponse?.email,
        nationality: playerResponse?.nationality,
        foot: playerResponse?.preferredFoot,
        height: Number(playerResponse?.height),
        weight: Number(playerResponse?.weight),
        recommendedName: "",
        recommendedEmail: "",
        recommendedPhone: "",
        jersey: Number(playerResponse?.jerseyNumber),
        status: "",
        fbLink: playerResponse?.facebookUrl ?? "",
        igLink: playerResponse?.igUrl ?? "",
        xLink: playerResponse?.xurl ?? "",
        ttLink: playerResponse?.ticTokUrl ?? "",
      });
    }
  }, [loadingPlayer, playerResponse, getPlayerSuccess]);

  useEffect(() => {
    if (!loadingScout && getScoutSuccess) {
      useCurrentUserStore.setState({
        role: "SCOUT",
        name: scoutResponse?.fullName,
        image: scoutResponse?.imageUrl,
      });

      useScoutDataStore.setState({
        quote: scoutResponse?.quote,
        career: scoutResponse?.career,
        coachingEducation: scoutResponse?.coachingEducation,
        coachingStyle: scoutResponse?.coachingStyle,
        currentTeam: scoutResponse?.currentTeam,
        email: scoutResponse?.email,
        placeOfBirth: scoutResponse?.placeOfBirth,
        phone: scoutResponse?.phone,
        nin: scoutResponse?.nin,
        address: scoutResponse?.address,
        nationality: scoutResponse?.nationality,
        matchNotification: scoutResponse?.matchNotification,
        promotion: scoutResponse?.promotion,
        playerAbsence: scoutResponse?.playerAbsence,
        emailNotifications: scoutResponse?.emailNotifications,
      });
    }
  }, [loadingScout, scoutResponse, getScoutSuccess]);

  if (loadingPlayer || loadingScout) {
    return <div className="w-full h-[100vh] bg-white grid place-content-center">
      <Loader color="primary.6" />
    </div>
  }

  return <>{children}</>;
}
