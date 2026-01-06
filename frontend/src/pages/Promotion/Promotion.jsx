import React from 'react';
import Banner from './Banner';
import UserCard from '../../components/Utils/UserCard';
import goldMedal from '../../assets/gold-medal.webp'
import silverMedal from '../../assets/silver-medal.webp'
import bronzeMedal from '../../assets/bronze-medal.webp'

const userCards = [];
const n = 4;
const imgPlaceholder = "https://imageplaceholder.net/600x400/eeeeee/cbd5e1?text=img";

const List = ({ n }) => {
  return (
    <div className='flex items-start gap-3 mb-3'>
      <div className='flex-shrink-0 rounded-lg w-10 h-10 border  bg-yellow-500 font-bold text-lg text-yellow-900 flex items-center justify-center'>
        {n}
      </div>
      <div>
        <h5 className='font-semibold'>Lorem ipsum dolor sit amet.</h5>
        <p className='text-zinc-800 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem amet sunt error eius quidem. Explicabo?</p>
      </div>
    </div>
  )
}

const MedalCard = ({ lvl, userName }) => {
  const medalImg = (lvl == 1) ? bronzeMedal : (lvl == 2) ? silverMedal : goldMedal;
  const medalName = (lvl == 1) ? "Bronze Medal" : (lvl == 2) ? "Silver Medal" : "Gold Medal";
  
  return (
    <div className='flex flex-col items-center text-center'>
      <div className='h-24 w-24'>
        <img src={medalImg} alt='' />
      </div>
      <div>
        <strong>{medalName}</strong>
        <div className='flex items-center gap-2'>
          <div className='w-8 h-8 rounded-full bg-slate-300'>
            <img src={''} alt='' />
          </div>
          <p className='text-sm text-slate-800'>{userName}</p>
        </div>
      </div>
    </div>
  )
}

for (let i = 0; i < n; ++i) {
  userCards.push(
    <UserCard
      key={i}
      userName={'Abhijeet Singh'}
      content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, vel!"}
      tags={['ui/ux']}
      img={imgPlaceholder}
    />
  );
}

const Promotion = () => {
  return (
    <>
      <Banner />
      <div className='m-auto max-w-screen-xl'>
        <div className='grid gap-2 grid-cols-2 my-8'>
          <div>
            <List n={1} />
            <List n={2} />
            <List n={3} />
          </div>

          <div className='p-4 rounded-lg bg-slate-100'>
            <div className='pb-2 border-b border-slate-400'>
              <h5 className='font-semibold'>Lorem ipsum dolor sit amet.</h5>
              <strong className='text-violet-600 text-sm'>Wager</strong>
              <div className='font-bold text-lg'>
                <span>Lorem, ipsum </span>
                <span>sit amet.</span>
              </div>
            </div>

            <div className='pt-2 grid grid-cols-3 gap-2'>
              <MedalCard lvl={1} userName={'@abhijeet_singh'}/>
              <MedalCard lvl={3} userName={'@abhijeet_singh'}/>
              <MedalCard lvl={2} userName={'@abhijeet_singh'}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Promotion;
