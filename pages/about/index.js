import {FaJs,FaHtml5,FaReact,FaWordpress,FaFigma,FaCss3, FaGithub} from 'react-icons/fa'
import {SiNextdotjs,SiFramer,SiAdobexd,SiAdobephotoshop} from 'react-icons/si'
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles'
import { useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from 'react-countup';

//  data
const aboutData = [
  {
    title: 'kỹ năng',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaGithub />
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'chứng chỉ',
    info: [
      {
        title: 'Chứng chỉ tin học',
        stage: '2020',
      },
    ],
  },
  {
    title: 'học vấn',
    info: [
      {
        title: 'Đại học Sư Phạm TP.HCM',
        stage: '2020-2024',
      },
      {
        title: 'THPT Lý Thường Kiệt',
        stage: '2018-2020',
      },
      {
        title: 'THCS Lý Tự Trọng',
        stage: '2014-2018',
      },
    ],
  },
  {
    title: 'sở thích',
    info: [
      {
        title: 'Hạng 4 Giải LMHT Đại học Nhân Văn TPHCM',
        stage: '2022',
      },
      {
        title: 'Vô địch giải bóng đá THPT Lý Thường Kiệt',
        stage: '2019',
      },
    ],
  },
];

const About = () => {
  const [index,setIndex] = useState(0)

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>

      <Circles />

      {/**avt img */}
      <motion.div 
        variants={fadeIn('right', 0.2)}
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
        initial='hidden'
        animate='show'
        exit='hidden'
      >
        <Avatar />
      </motion.div>

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>

        {/**text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 
            className='h2'
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            Giới thiệu <br/> <span className='text-purple-600/70'>bản thân</span> . 
          </motion.h2>
          <motion.p 
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            Tôi có niềm đam mê với code và design . Để có thể thỏa sức với đam mê của mình , tôi đã lựa chọn Front-end Developer
          </motion.p>

          {/**counter */}
          <motion.div 
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/*experience*/}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-purple-600/70 mb-2'>
                  <CountUp start={0} end={22} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Tuổi</div>
              </div>
              {/**client */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-purple-600/70 mb-2'>
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Dự án</div>
              </div>
            </div>
          </motion.div>
        </div> 

        {/**info */} 
        <motion.div 
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item,itemIndex) => {
              return(
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-purple-600/70 after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white
                  after:absolute after:-bottom-1 after:left-0 z-10`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return(
                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                  {/**title */}
                  <div className='font-light mb-2 mb:mb-0'>
                    {item.title}
                  </div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/**icons */}
                    {item.icons?.map((icon,itemIndex) => {
                      return(
                        <div className='text-2xl text-white'>
                          {icon}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
