import React from "react";
import Image from "next/image";
import Link from "next/link";
import DropdownList from "./DropdownList";
import RecordScreen from "./RecordScreen";
// Define ICONS object with the record icon path
// const ICONS = {
//   record: "/assets/icons/record.svg",
// };

const Header = ({ subHeader, title, userImg }: SharedHeaderProps) => {
    
  return (
    <header className="header">
             
      <section className="header-container">
        <div className="details">
          {userImg && (
            <Image
              src={userImg}
              alt="user"
              width={66}
              height={66}
              className="ronded-full"
            />
          )}

          <article>
            <p>{subHeader}</p>
            <h1>{title}</h1>
          </article>
        </div>

        <aside>
                    {/* <h1 align-c>All Videos</h1> */}

          <Link href="/upload">
            <Image
              src="/assets/icons/upload.svg"
              alt="upload"
              width={16}
              height={16}
            />
            <span>Uplaod Video</span>
          </Link>
         <RecordScreen/>
        </aside>
      </section>

      <section className="search-filter">
        <div className="search">
          <input
          type="text"
          placeholder="search for videos,tags,folders..."/>
          <Image src='/assets/icons/search.svg' alt='search' width={16} height={16}/>
        </div>

        <DropdownList/>
      </section>
    </header>
  );
};

export default Header;
