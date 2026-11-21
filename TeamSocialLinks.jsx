import React from "react";
import { Linkedin } from "lucide-react";
import { team } from "@/data/team";
export default function TeamSocialLinks({ name }) {
  const m = team.find((t) => t.name === name);
  if (!m?.linkedin) return null;
  return <a href={m.linkedin} target="_blank" rel="noreferrer" aria-label={`${name} on LinkedIn`}
    className="inline-flex mt-3 text-slate-400 hover:text-violet-700"><Linkedin className="w-4 h-4" /></a>;
}
