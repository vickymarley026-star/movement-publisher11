// RECONSTRUCTED (original not in HAR): word-by-word reveal.
import React from "react";
import { motion } from "framer-motion";
export default function AnimatedText({ as="h2", text, className="" }) {
  const Tag = motion[as] || motion.h2;
  return <Tag className={className} initial="hidden" whileInView="show" viewport={{once:true}}
    variants={{show:{transition:{staggerChildren:.05}}}} aria-label={text}>
    {text.split(" ").map((w,i)=>(<motion.span key={i} className="inline-block mr-[0.25em]"
      variants={{hidden:{opacity:0,y:12},show:{opacity:1,y:0}}}>{w}</motion.span>))}
  </Tag>;
}
