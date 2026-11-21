// RECONSTRUCTED (original not in HAR): scroll-in fade/slide.
import React from "react";
import { motion } from "framer-motion";
const v = {
  default: { hidden:{opacity:0,y:24}, show:{opacity:1,y:0} },
  bounce: { hidden:{opacity:0,y:32,scale:.96}, show:{opacity:1,y:0,scale:1} },
  "bounce-left": { hidden:{opacity:0,x:-40}, show:{opacity:1,x:0} },
  "bounce-right": { hidden:{opacity:0,x:40}, show:{opacity:1,x:0} },
};
export default function Reveal({ children, className="", delay=0, variant="default" }) {
  return <motion.div className={className} variants={v[variant]||v.default} initial="hidden" whileInView="show"
    viewport={{once:true,margin:"-60px"}} transition={{duration:.6,delay,ease:"easeOut"}}>{children}</motion.div>;
}
