import { HiHome,HiUser,HiViewColumns,HiEnvelope } from 'react-icons/hi2'
import Link from 'next/link'
import { useRouter } from 'next/router';

//  links
export const navData = [
  { name: 'Trang chủ', path: '/', icon: <HiHome /> },
  { name: 'Giới thiệu', path: '/about', icon: <HiUser /> },
  { name: 'Dự án', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'Liên hệ',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => { 
  const router = useRouter()
  const pathname = router.pathname

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto 
    xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      {}
      <div className='flex w-[90%] xl:flex-col items-center justify-between xl:justify-center gap-y-10 
      px-4 md:px-40 xl:px-0 h-[50px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl 
      xl:text-xl rounded-[10px] xl:rounded-full'>
        {navData.map((link, index) => {
          return (
            <Link 
              className={`${link.path === pathname && 'text-purple-600/60'} relative flex items-center group
              hover:text-purple-400/70 transition-all text-[25px] duration-300`}
              href={link.path} 
              key={index} 
            >
              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex '>
                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px] w-20 justify-center'>
                  <div className='text-[12px] leading-none font-semibold capitalize'> {link.name} </div>

                  {/* triangle */}
                  <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px]
                  border-r-0 absolute -right-2'></div>

                </div>
              </div>

              {/* icon */}
              <div> {link.icon} </div>  
            </Link>
          )
        })}
      </div>
    </nav>
  )
};

export default Nav;
