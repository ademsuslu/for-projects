import React from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

export default function Motion() {
  return (
    <div className="Motion">
      <div className="row">
        <div className="col-md-12 d-flex">
          <motion.div
            animate={{
              x: [0, 100, 0],
              borderRadius: ["50%", "0%", "50%"],
              //   y: [0, 100, 0],
              scale: [1, 1.3, 1, 1.3, 1],
            }}
            transition={{
              duration: 1.5,
              delay: 1,
              scale: -1,
              repeat: Infinity,
            }}
            className="box1 "
          />
          <motion.div
            animate={{
              rotate: 90,
            }}
            transition={{
              duration: 1.5,
              delay: 1.5,
              repeat: Infinity,
            }}
            className="box2 mx-auto"
          />
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: [0, 100, 0],
            }}
            transition={{
              duration: 1.5,
              delay: 1.7,
              repeat: 2,
            }}
            className="box3 mx-auto"
          />
        </div>
        <div className="col d-flex">
          <motion.div
            drag
            dragConstraints={{
              left: -100,
              right: -100,
              top: -100,
              bottom: -100,
            }}
            transition={{
              duration: 1.5,
            }}
            className="box4 mx-auto text-white text-center p-2"
          >
            Sürükle Beni
          </motion.div>
          <motion.div
            drag
            transition={{
              duration: 1.5,
            }}
            className="box5 mx-auto text-white text-center p-2 "
          >
            Sürükle Beni
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              rotate: 360,
            }}
            className="box6 mx-auto text-white text-center p-2 "
          >
            Hover and click Me
          </motion.div>
        </div>
      </div>
    </div>
  );
}
