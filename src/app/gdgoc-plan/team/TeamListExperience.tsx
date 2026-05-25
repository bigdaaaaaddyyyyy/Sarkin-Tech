"use client";

import Image from "next/image";
import Link from "next/link";
import type { FormEvent } from "react";
import { useState } from "react";
import { ArrowLeft, Layers3, Trash2, UserCog, UserPlus, Users } from "lucide-react";

const clusters = [
  "Infrastructure",
  "Web",
  "Mobile",
  "AI & Prompt Engr",
  "Visuals",
  "Data Engr",
  "NO CODE",
];

const initialTeamMembers = [
  {
    id: "jamil",
    name: "Jamil Muhammad Abdullahi",
    position: "Lead",
    cluster: "Infrastructure",
    specialization: "Cloud systems, community strategy, AI tooling",
    avatar: "/assets/Jamil-AI.png",
  },
  {
    id: "visuals-lead",
    name: "Visuals Desk",
    position: "Media Lead",
    cluster: "Visuals",
    specialization: "Video editing, graphics, UI/UX direction",
    avatar: "/assets/mine-ghibili.png",
  },
  {
    id: "web-lead",
    name: "Web Cluster Rep",
    position: "Technical Member",
    cluster: "Web",
    specialization: "Frontend, backend, Web2 and Web3 projects",
    avatar: "/assets/NOVA.png",
  },
  {
    id: "data-lead",
    name: "Data Cluster Rep",
    position: "Technical Member",
    cluster: "Data Engr",
    specialization: "Dashboards, analysis, data storytelling",
    avatar: "/assets/DLD-Helper.jpg",
  },
];

export default function TeamListExperience() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [clusterDrafts, setClusterDrafts] = useState<Record<string, string>>(
    Object.fromEntries(initialTeamMembers.map((member) => [member.id, member.cluster]))
  );
  const [newMember, setNewMember] = useState({
    name: "",
    position: "",
    cluster: "Unassigned",
    specialization: "",
  });

  const deleteMember = (id: string) => {
    setTeamMembers((current) => current.filter((member) => member.id !== id));
    setClusterDrafts((current) => {
      const next = { ...current };
      delete next[id];
      return next;
    });
  };

  const assignCluster = (id: string) => {
    const nextCluster = clusterDrafts[id] ?? "Unassigned";
    setTeamMembers((current) =>
      current.map((member) => (member.id === id ? { ...member, cluster: nextCluster } : member))
    );
  };

  const addMember = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newMember.name.trim() || !newMember.position.trim() || !newMember.specialization.trim()) {
      return;
    }

    const id = `${newMember.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`;
    const member = {
      id,
      name: newMember.name.trim(),
      position: newMember.position.trim(),
      cluster: newMember.cluster,
      specialization: newMember.specialization.trim(),
      avatar: "",
    };

    setTeamMembers((current) => [...current, member]);
    setClusterDrafts((current) => ({ ...current, [id]: member.cluster }));
    setNewMember({ name: "", position: "", cluster: "Unassigned", specialization: "" });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7fbff] px-5 py-16 text-slate-950 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(26,115,232,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.07)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-300/35 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-48 h-96 w-96 rounded-full bg-green-300/25 blur-3xl" />

      <section className="relative mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/gdgoc-plan"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" /> Back to plan
          </Link>
          <Link
            href="/gdgoc-plan/clusters"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700"
          >
            <Layers3 className="h-4 w-4" /> Clusters
          </Link>
        </div>

        <div className="mt-8 rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_30px_100px_rgba(15,23,42,0.09)] backdrop-blur-xl sm:p-8">
          <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.35em] text-blue-700">GDGoC Team</p>
              <h1 className="mt-3 font-clash text-4xl font-bold text-slate-950 sm:text-5xl">
                Team list and cluster assignment.
              </h1>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white">
              <Users className="h-4 w-4 text-[#34A853]" /> {teamMembers.length} members
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="min-w-[980px] w-full border-collapse text-left">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white/60">Member</th>
                  <th className="px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white/60">Position</th>
                  <th className="px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white/60">Cluster</th>
                  <th className="px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white/60">Specialization</th>
                  <th className="px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white/60">Assign</th>
                  <th className="px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white/60">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {teamMembers.map((member) => (
                  <tr key={member.id} className="transition hover:bg-slate-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-slate-950 text-white ring-2 ring-slate-100">
                          {member.avatar ? (
                            <Image src={member.avatar} alt={member.name} fill sizes="36px" className="object-cover" />
                          ) : (
                            <span className="flex h-full w-full items-center justify-center text-xs font-black">
                              {member.name
                                .split(" ")
                                .map((part) => part[0])
                                .join("")
                                .slice(0, 2)}
                            </span>
                          )}
                        </div>
                        <span className="font-clash text-base font-semibold text-slate-950">{member.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-600">{member.position}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">
                        {member.cluster}
                      </span>
                    </td>
                    <td className="max-w-xs px-4 py-3 text-sm leading-6 text-slate-600">{member.specialization}</td>
                    <td className="px-4 py-3">
                      <select
                        value={clusterDrafts[member.id] ?? member.cluster}
                        onChange={(event) =>
                          setClusterDrafts((current) => ({ ...current, [member.id]: event.target.value }))
                        }
                        className="h-10 w-48 rounded-full border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white"
                        aria-label={`Assign cluster for ${member.name}`}
                      >
                        <option value="Unassigned">Unassigned</option>
                        {clusters.map((cluster) => (
                          <option key={cluster} value={cluster}>
                            {cluster}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => assignCluster(member.id)}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#34A853] text-white transition hover:-translate-y-0.5 hover:bg-[#2d8f47]"
                          aria-label={`Assign selected cluster to ${member.name}`}
                          title="Assign cluster"
                        >
                          <UserCog className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => deleteMember(member.id)}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-700 transition hover:-translate-y-0.5 hover:bg-red-100"
                          aria-label={`Delete ${member.name}`}
                          title="Delete member"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <form onSubmit={addMember} className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <div className="mb-4 flex items-center gap-3">
              <UserPlus className="h-5 w-5 text-[#1A73E8]" />
              <h2 className="font-clash text-2xl font-semibold text-slate-950">Add a new member</h2>
            </div>
            <div className="grid gap-3 lg:grid-cols-[1fr_0.85fr_0.85fr_1.25fr_auto]">
              <input
                value={newMember.name}
                onChange={(event) => setNewMember((current) => ({ ...current, name: event.target.value }))}
                placeholder="Full name"
                className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold outline-none transition focus:border-blue-300"
              />
              <input
                value={newMember.position}
                onChange={(event) => setNewMember((current) => ({ ...current, position: event.target.value }))}
                placeholder="Position"
                className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold outline-none transition focus:border-blue-300"
              />
              <select
                value={newMember.cluster}
                onChange={(event) => setNewMember((current) => ({ ...current, cluster: event.target.value }))}
                className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-blue-300"
              >
                <option value="Unassigned">Unassigned</option>
                {clusters.map((cluster) => (
                  <option key={cluster} value={cluster}>
                    {cluster}
                  </option>
                ))}
              </select>
              <input
                value={newMember.specialization}
                onChange={(event) => setNewMember((current) => ({ ...current, specialization: event.target.value }))}
                placeholder="Brief tech specialization"
                className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold outline-none transition focus:border-blue-300"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                <UserPlus className="h-4 w-4" /> Add
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
