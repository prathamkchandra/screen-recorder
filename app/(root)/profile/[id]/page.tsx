import React from 'react'
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { dummyCards } from '@/constants';
const page = async ({params}:ParamsWithSearch) => {
    const {id} = await params;
  return (
    <div className='wrapper page'>
<Header subHeader="prathamk@gmail.com.pro" title="pratham |JS " userImg="/assets/images/michael.png" />
    
    <section className='video-grid'>
      {dummyCards.map((card) =>(
      <VideoCard key={card.id}{...card}/>
     ))}
    </section>
    </div>
  )
}

export default page