import Circles from '../../components/Circles'
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import {fadeIn} from '../../variants'

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-clip flex items-center justify-center h-full'>
        {/**text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/**text */}
          <motion.h2 
            className='h2 text-center mb-12'
            variants={fadeIn('up',0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            Gửi  <span className='text-purple-600/80'>lời nhắn.</span>
          </motion.h2>
          {/**form */}
          <motion.form 
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            variants={fadeIn('up',0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            {/**input group */}
              <div className='flex gap-x-6 w-full'>
                <input type='text' placeholder='tên' className='input' />
                <input type='text' placeholder='email' className='input' />
              </div>
              <input type='text' placeholder='tiêu đề' className='input' />
              <textarea placeholder='tin nhắn...' className='textarea'></textarea>
              <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-purple-600 group'>
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Gửi</span>
                <BsArrowRight className='-translate-y-[120px] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
              </button>
          </motion.form>
        </div>
      </div>
      <Circles />
    </div>
  );
};

export default Contact;
