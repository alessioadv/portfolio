import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import { BsArrowUpRight, bsArrowUpRight, BsPlay } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "NO VUELVO",
    description: "Last hits",
    link: "Play Now",
  },
  {
    name: "TATUADA",
    description: "Last hits",
    link: "Play Now",
  },
  {
    name: "ATRAS DE TI",
    description: "Last hits",
    link: "Play Now",
  },
  {
    name: "ENAMORAME",
    description: "Last hits",
    link: "Play Now",
  },
  {
    name: "LLAMAME",
    description: "Last hits",
    link: "Play Now",
  },
  {
    name: "TENTANDOME",
    description: "Last hits",
    link: "Play Now",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">MUSIC 2023</h2>
            <h3 className="h3 max-w-[300px] mb-16"> Listen now!</h3>
            <button className="btn btn-sm">Subscribe</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[90px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[300px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[40px] flex justify-center items-center"
                      >
                        <BsPlay />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
