import React from "react";
import Image from "../assets/foto.png";
import {
  FaYoutube,
  FaInstagram,
  FaSpotify,
  FaAmazon,
  FaTiktok,
  FaApple,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Services from "./Services";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center lg:gap-x-12"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-bold lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[11]"
            >
              ALESSIO <span>LA PROFUNDA MELODIA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[36px] lg:text-[60px] font-secondary font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">Latin Artist</span>
              <TypeAnimation
                sequence={["Reggaeton", 2000, "Urban", 2000, "Pop", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              NEW ALBUM IS COMING!
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="services">
                <button className="btn btn-lg">Listen my music</button>
              </Link>

              <a
                href="https://open.spotify.com/artist/7MBNcpWHn8RTZFUQv5fNPp?si=SOTs8LMQTAGVVylNRXPVAg"
                className="text-gradient btn-link"
              >
                Pre-Order
              </a>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.youtube.com/alessiolaprofundamelodia">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/alessiolaprofundamelodia/">
                <FaInstagram />
              </a>
              <a href="https://open.spotify.com/artist/7MBNcpWHn8RTZFUQv5fNPp?si=SOTs8LMQTAGVVylNRXPVAg">
                <FaSpotify />
              </a>
              <a href="#">
                <FaApple />
              </a>
              <a href="#">
                <FaTiktok />
              </a>
              <a href="https://music.amazon.it/artists/B01EBMN3AQ/alessio-la-profunda-melodia?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_02IURWoL7XQ5Z6URVvBOc4NbH">
                <FaAmazon />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
