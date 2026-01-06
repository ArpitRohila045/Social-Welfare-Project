import React from 'react';
import AnimatedList from './AnimatedList';

const notifications = [
  {
    name: "",
    description: "Advertisement for Inviting Applications for Post of the State Commissioner",
    time: "07-11-2024",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "List of Old Age Homes, run by Department of Social Welfare.",
    time: "07-11-2024",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "The details of existing Drug De addiction Centers in Delhi",
    time: "05-11-2024",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Mandatory Guidelines for School Hostels Under Social Welfare",
    time: "04-11-2024",
    icon: "🗞️",
    color: "#1E86FF",
  },
  {
    name: "Payment received",
    description: "STANDARD OPERATING PROCEDURES FOR SCHOOL HOSTELS",
    time: "03-11-2024",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "01-11-2024",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "29-10-2024",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "28-10-2024",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

const List = ({ name, description, icon, color, time }) => {
  return (
    <div className='flex-shrink-0 flex gap-2 items-center relative min-w-max w-[600px] max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%] bg-white shadow-md mb-2
    '>
{/* 
      <div
        className='flex rounded-xl w-10 h-10 items-center justify-center'
        style={{ backgroundColor: color }}
      > */}
        {/* <span className='text-lg'>{icon}</span> */}
      {/* </div> */}
      <div>
        <div>
          {/* <span className='font-semibold'>{name}</span> */}
          {/* <span className='px-1'>.</span> */}
          <p className='text-sm text-red-500'>{description}</p>
        </div>
        <span className='text-slate-600 text-sm'>Date : {time}</span>

      </div>
    </div>
  )
}

const Notification = () => {
  return (
    <div className='flex flex-col gap-2 h-[400px] bg-slate-100 rounded-xl p-2 overflow-auto'>
      {
        notifications.map((e, index) => (
          <List
            key={index}
            name={e.name}
            description={e.description}
            icon={e.icon}
            color={e.color}
            time={e.time}
          />
        ))
      }
    </div>
  )
}

export default Notification
