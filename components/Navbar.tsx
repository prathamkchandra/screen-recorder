'use client'


import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import  {useRouter} from "next/navigation";
const user ={};

const Navbar = () => {
  const router = useRouter();
  return (
 <header className='navbar'>
    <nav>
 <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="SnapChat Logo"
            width={32}
            height={32}
          />
          <h1>ScreenCast</h1>
        </Link>

 {user && (
          <figure>
            <div>
              <button onClick={() => router.push('/profile/1215123')}>
                  <Image src='/assets/images/dummy.jpg' alt='User' width={36} height={36} className='rounded-full aspect-square'/>
              </button>
              <button className='cursor-pointer'>
                  <Image src='/assets/icons/logout.svg' alt='logout' width={24} height={24} className='rotate-180'/>
              </button> 
            </div>
          </figure>
        )}

    </nav>
 </header>
    
  )
}

export default Navbar;