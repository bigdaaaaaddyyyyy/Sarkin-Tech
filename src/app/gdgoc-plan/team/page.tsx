import type { Metadata } from "next";
import TeamListExperience from "./TeamListExperience";

export const metadata: Metadata = {
  title: "GDGoC BUK Team | Session 1",
  description:
    "GDGoC BUK Session 1 team list with member positions, cluster assignment, avatars, and specializations.",
};

export default function GdgocTeamPage() {
  return <TeamListExperience />;
}
