import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDisplay } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
const { TabPane } = Tabs;
export default function Works() {
  const duration = 1.5;
  const fadeDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }
  const animation = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {

    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: duration }
      })
    }
    if (window.innerWidth > 768) {

      if (!inView) {

        animation.start({
          opacity: 0,
          y: 30,
        })

      }

    }





  }, [inView])

  return (
    <section id='works' className='container m-auto'>
      <motion.div
        variants={fadeDown}
        initial='hidden'
        animate='visible'
        transition={{ duration: duration }}
        className='tittle-area' >
        <h2 className='tittle' >Works</h2>
        <svg width="47" height="29" data-depth="0.2" class="layer p10" xmlns="http://www.w3.org/2000/svg" ><g fill="#44D7B6" fill-rule="evenodd"><path d="M46.78878 17.19094c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36265-9.0893-.26708-11.74616-4.27524-2.65686-4.00817-3.08917-9.78636-1.13381-15.15866l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12693 2.12514 3.20674 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40949 8.48988-8.70673l2.34923.85505z"></path><path d="M25.17585 9.32448c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36264-9.0893-.26708-11.74616-4.27525C.16049 11.92447-.27182 6.14628 1.68354.77398l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12692 2.12514 3.20675 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40948 8.48988-8.70672l2.34923.85505z"></path></g></svg>
      </motion.div>
      <div className='works'>
        <div className='list-works'>
          <div className='none-responsive'>
            <motion.h2
              variants={fadeUp}
              initial='hidden'
              animate='visible'
              transition={{ duration: duration }}
              className='work-type'>None-responsive template</motion.h2>
            <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-5'>
              <motion.div
                variants={fadeUp}
                initial='hidden'
                animate='visible'
                transition={{ duration: duration }}
                className='web-item'>
                <img src='./assets/img/bake.JPEG' alt='#'></img>
                <div className='web-detail'>
                  <span className='progress'>Complete</span>
                  <h4 className='web-tittle'>Bake template</h4>
                  <a className='show-code' href='https://github.com/jimmNgo/myproject.github.io/tree/main/Bake_corner'>
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                  <a className='show-web' href='https://ntgbaoo-baked.surge.sh/'>
                    <FontAwesomeIcon icon={faDisplay} />
                  </a>
                </div>
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial='hidden'
                animate='visible'
                transition={{ duration: duration }}
                className='web-item'>
                <img src='./assets/img/housing.JPEG' alt='#'></img>
                <div className='web-detail'>
                  <span className='progress'>Complete</span>
                  <h4 className='web-tittle'>Housing template</h4>
                  <a className='show-code' href='https://github.com/jimmNgo/myproject.github.io/tree/main/Housing'>
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                  <a className='show-web' href='https://ntgbaoo-housing.surge.sh/'>
                    <FontAwesomeIcon icon={faDisplay} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          <div className='responsive'>
            <motion.h2
              variants={fadeUp}
              initial='hidden'
              animate='visible'
              transition={{ duration: duration }}
              className='work-type'>Responsive template</motion.h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
              <motion.div
                variants={fadeUp}
                initial='hidden'
                animate='visible'
                transition={{ duration: duration }}
                className='web-item'>
                <img src='./assets/img/fiverr.JPEG' alt='#'></img>
                <div className='web-detail'>
                  <span className='progress'>90%</span>
                  <h4 className='web-tittle'>Fiverr's template</h4>
                  <a className='show-code' href=''>
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                  <a className='show-web' href='https://ntgbaoo-fiverr.surge.sh/'>
                    <FontAwesomeIcon icon={faDisplay} />
                  </a>
                </div>
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial='hidden'
                animate='visible'
                transition={{ duration: duration }}
                className='web-item'>
                <img src='./assets/img/instruction.JPEG' alt='#'></img>
                <div className='web-detail'>
                  <span className='progress'>Complete</span>
                  <h4 className='web-tittle'>E-learning template</h4>
                  <a className='show-code' href='https://github.com/jimmNgo/myproject.github.io/tree/main/Instruction_cyber'>
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                  <a className='show-web' href='https://ntgbaoo-instruction.surge.sh/'>
                    <FontAwesomeIcon icon={faDisplay} />
                  </a>
                </div>
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial='hidden'
                animate='visible'
                transition={{ duration: duration }}
                className='web-item'>
                <img src='./assets/img/udemy.JPEG' alt='#'></img>
                <div className='web-detail'>
                  <span className='progress'>75%</span>
                  <h4 className='web-tittle'> Udemy's template</h4>
                  <a className='show-code' href='https://github.com/jimmNgo/myproject.github.io/tree/main/elearning'>
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                  <a className='show-web' href='https://ntgbaoo-elearning.surge.sh/'>
                    <FontAwesomeIcon icon={faDisplay} />
                  </a>
                </div>
              </motion.div>
              <motion.div animate={animation} ref={ref} className='web-item'>
                <img src='./assets/img/merged.JPEG' alt='#'></img>
                <div className='web-detail'>
                  <span className='progress'>Complete</span>
                  <h4 className='web-tittle'>Merged template</h4>
                  <a className='show-code' href='https://github.com/jimmNgo/myproject.github.io/tree/main/merged'>
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                  <a className='show-web' href='https://merged.surge.sh/'>
                    <FontAwesomeIcon icon={faDisplay} />
                  </a>
                </div>
              </motion.div>
              <motion.div animate={animation} className='web-item'>
                <img src='./assets/img/movieStar.JPEG' alt='#'></img>
                <div className='web-detail'>
                  <span className='progress'>Complete</span>
                  <h4 className='web-tittle'>Movie template</h4>
                  <a className='show-code' href='https://github.com/jimmNgo/myproject.github.io/tree/main/Movie'>
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                  <a className='show-web' href='https://ntgbaoo-movie.surge.sh/'>
                    <FontAwesomeIcon icon={faDisplay} />
                  </a>
                </div>
              </motion.div>



            </div>
          </div>
        </div>
        <div className='works-library w-85'>
          <div className='flex justify-between  '>
            <img alt='html' width='50px' src='./assets/img/html.svg'></img>
            <img alt='css' width='50px' src='./assets/img/css.svg'></img>
            <img alt='react' width='50px' src='./assets/img/react.svg'></img>
            <img alt='sass' width='50px' src='./assets/img/sass.svg'></img>
          </div>
          <div className='flex justify-between mt-10'>
            <img alt='antd' width='50px' src='./assets/img/antd.svg'></img>
            <img alt='tailwind' width='50px' src='./assets/img/tailwind.svg'></img>
            <img alt='boostrap' width='50px' src='./assets/img/boostrap.svg'></img>
            <img alt='framer' width='50px' src='./assets/img/framer.svg'></img>
          </div>


        </div>

      </div>
    </section >
  )
}
