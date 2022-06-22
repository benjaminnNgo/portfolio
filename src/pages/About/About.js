import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faSchool,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Progress } from "antd";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export default function About() {
  const fadeDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const animation = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: duration },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0,
        y: 30,
      });
    }
  }, [inView]);
  const duration = 1.5;
  const contentStyle = {
    height: "250px",
    color: "#fff",

    textAlign: "center",
  };

  return (
    <section id="about" className="container">
      <motion.div
        variants={fadeDown}
        initial="hidden"
        animate="visible"
        transition={{ duration: duration }}
        className="tittle-area"
      >
        <h2 className="tittle">About me</h2>
        <svg
          width="26"
          height="26"
          class="layer p7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 22.6459L2.42705 1.5h21.1459L13 22.6459z"
            stroke="#FFD15C"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          ></path>
        </svg>
      </motion.div>

      <div className=" container inform grid grid-cols-12">
        <div className="col-span-12 md:col-span-3">
          <motion.img
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: duration }}
            className="m-auto mb-6 md:mb-0"
            src="./assets/img/gbaoLogo.PNG"
            alt="#"
            style={{ width: "150px" }}
          ></motion.img>
        </div>
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: duration }}
          className=" col-span-12 md:col-span-9 inform-detail"
        >
          <div className="inform-text">
            Hi! I am Ngo Tran Gia Bao - a young enthusiastic generation from
            Vietnam. With a great passion for coding, especially front-end
            development, now I am a front-end developer after 8 months learning
            coding from scratch by myself. I have been practicing day by day and
            completed a number of templates based on existing websites. I am
            looking for a chance to enhance my abilities and prove myself.
          </div>
          {/* <button className="button-pink text-center mt-3">
            <a href='./assets/img/gbaoLogo.PNG' download='./assets/NgoTranGiaBao.pdf'>Download CV</a>
          </button> */}
        </motion.div>
      </div>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: duration }}
        className="tittle preference-tittle"
      >
        Professors' reviews
        <svg
          width="47"
          height="29"
          data-depth="0.2"
          class="layer p10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#44D7B6" fill-rule="evenodd">
            <path d="M46.78878 17.19094c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36265-9.0893-.26708-11.74616-4.27524-2.65686-4.00817-3.08917-9.78636-1.13381-15.15866l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12693 2.12514 3.20674 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40949 8.48988-8.70673l2.34923.85505z"></path>
            <path d="M25.17585 9.32448c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36264-9.0893-.26708-11.74616-4.27525C.16049 11.92447-.27182 6.14628 1.68354.77398l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12692 2.12514 3.20675 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40948 8.48988-8.70672l2.34923.85505z"></path>
          </g>
        </svg>
      </motion.h2>
      <div className="preference container ">
        <Carousel autoplay>
          <div className="slide-area">
            <img alt="#" src="./assets/img/avatar-3.svg"></img>
            <div style={contentStyle}>
              <h2 className="professor-name">Sushil Kumar</h2>
              <h3 className="professor">Math professor</h3>
              <div className="review">
                "You truly deserve A+ for both courses. It is all because of
                your hard work. You are really a gem to our institute. I can
                proudly say that it was my honor to have a student like you in
                my courses. Good luck for your future."
              </div>
            </div>
          </div>
          <div className="slide-area">
            <img alt="#" src="./assets/img/avatar-3.svg"></img>
            <div style={contentStyle}>
              <h2 className="professor-name">Unmesh Anant</h2>
              <h3 className="professor">Computer science professor</h3>
              <div className="review">
                A+ is a result that can reflect your great effort and
                professional performance in my course. You had show a solid
                foundation for programming and logical thinking in solving
                problems that were good points. Keep striving and good luck for
                your future."
              </div>
            </div>
          </div>
          {/* <div className="slide-area">
            <img alt="#" src="./assets/img/avatar-3.svg"></img>
            <div style={contentStyle}>
              <h2 className="professor-name">Iman Soliman</h2>
              <h3 className="professor">Math professor</h3>
              <div className="review">
                "It has been my pleasure to have your enthusiasm, positivity and
                maturity in my class. You are one of my best student I've ever
                had. With outstanding performance and responsible behavior, I
                wish you all the best for the future."
              </div>
            </div>
          </div> */}
        </Carousel>
      </div>
      <div ref={ref} className="education container">
        <motion.div animate={animation} className="tittle-area">
          <h2 variants={fadeDown} className="tittle">
            Education & Skill
          </h2>
          <svg
            width="30"
            height="25"
            data-depth="0.3"
            class="layer p3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.1436 8.9282C3.00213 3.97706 8.2841.92763 14.00013.92796c5.71605.00032 10.9981 3.04992 13.85641 8 2.8583 4.95007 2.8584 11.0491-.00014 16.00024l-2.77128-1.6c2.28651-3.96036 2.28631-8.84002.00011-12.8002-2.2862-3.96017-6.5124-6.40017-11.08513-6.4-4.57271.00018-8.79872 2.43984-11.08524 6.4002l-2.77128-1.6z"
              fill="#44D7B6"
              fill-rule="evenodd"
            ></path>
          </svg>
        </motion.div>
        <div className="container grid grid-cols-2 gap-6 md:gap-0">
          <div className=" col-span-2 md:col-span-1 timeline  ">
            <motion.div animate={animation} className="timeline-item ">
              <FontAwesomeIcon
                className="timeline-icon"
                icon={faGraduationCap}
              />

              <p className="time">2018 - 2021</p>
              <h2 className="timeline-institution">
                VNU-HCM HIGH SCHOOL FOR THE GIFTED
              </h2>
              <ul>
                <li>Grade 10's GPA : 8.7/10</li>
                <li>Grade 11's GPA : 9.1/10</li>
                <li>Grade 12's GPA : 9.3/10</li>
              </ul>
            </motion.div>
            <motion.div animate={animation} className="timeline-item">
              <FontAwesomeIcon className="timeline-icon" icon={faSchool} />
              <p className="time">2021 - Present</p>
              <h2 className="timeline-institution">
                International College of Manitoba
              </h2>
              <ul>
                <li>Current GPA: 4.4/4.5</li>
                <li>Peer education </li>
                {/* <li>Math teaching assistant</li> */}
              </ul>
            </motion.div>
          </div>
          <div className="skill col-span-2 md:col-span-1  ">
            <motion.div animate={animation} className="progress">
              <ul>
                <li className="html">
                  HTML
                  <Progress percent={95} status="active" />
                </li>
                <li className="css">
                  CSS
                  <Progress percent={95} status="active" />
                </li>
                <li className="js">
                  JS
                  <Progress percent={90} status="active" />
                </li>
                <li className="reactjs">
                  ReactJS
                  <Progress percent={80} status="active" />
                </li>
              </ul>
            </motion.div>
            <motion.div animate={animation} className="tick-part">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Bootsrap, Ant Design, Tailwindcss
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Sass
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Framer motion
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  ReactJS: redux, work with API...
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
