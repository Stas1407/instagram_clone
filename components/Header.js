import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon
} from '@heroicons/react/outline'

function Header() {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5 px-2 xl:mx-auto'>
        {/* Left */}
        <div className='relative hidden lg:inline-grid w-24'>
            <Image src="https://links.papareact.com/ocw" 
                  layout="fill"
                  objectFit='contain'
            />
        </div>
        <div className='relative w-10 lg:hidden flex-shrink-0'>
            <Image src="https://links.papareact.com/jjm" 
                  layout="fill"
                  objectFit='contain'
            />
        </div>

        {/* Middle */}
        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
            </div>
            <input type='text' placeholder='Search' className='block w-full pl-10 sm:text-sm bg-gray-50 border-gray-300 
            focus:ring-black focus:border-black rounded-md'/>
          </div>
        </div>

        {/* Right */}
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon className='navBtn'/>
          <MenuIcon className='h-6 md:hidden cursor-pointer'/>

          <div className='navBtn relative mb-1'>
            <PaperAirplaneIcon className='navBtn rotate-45 mb-1 ml-1' />
            <div className='absolute -top-1 -right-1 text-xs w-4 h-4 bg-red-400 rounded-full flex 
            items-center justify-center animate-pulse text-white'>3</div>
          </div>
          <PlusCircleIcon className='navBtn' />
          <UserGroupIcon className='navBtn' />
          <HeartIcon className='navBtn' />
          <div className='relative h-10 w-10 cursor-pointer'>
            <Image src="/ara.jpg" layout='fill' objectFit='cover' className='rounded-full'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header