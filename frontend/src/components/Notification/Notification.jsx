import React from 'react'; import AnimatedList from './AnimatedList'; 

const notifications = [ { name: "", description: "Advertisement for Inviting Applications for Post of the State Commissioner", time: "07-11-2024", icon: "💸", color: "#00C9A7", }, { name: "User signed up", description: "List of Old Age Homes, run by Department of Social Welfare.", time: "07-11-2024", icon: "👤", color: "#FFB800", }, { name: "New message", description: "The details of existing Drug De addiction Centers in Delhi", time: "05-11-2024", icon: "💬", color: "#FF3D71", }, { name: "New event", description: "Mandatory Guidelines for School Hostels Under Social Welfare", time: "04-11-2024", icon: "🗞️", color: "#1E86FF", }, { name: "Payment received", description: "STANDARD OPERATING PROCEDURES FOR SCHOOL HOSTELS", time: "03-11-2024", icon: "💸", color: "#00C9A7", }, { name: "User signed up", description: "Magic UI", time: "01-11-2024", icon: "👤", color: "#FFB800", }, { name: "New message", description: "Magic UI", time: "29-10-2024", icon: "💬", color: "#FF3D71", }, { name: "New event", description: "Magic UI", time: "28-10-2024", icon: "🗞️", color: "#1E86FF", }, ];


const List = ({ description, time }) => {
  return (
    <div
      className="
        relative flex gap-3 p-4 bg-white rounded-xl
        border border-indigo-300
        shadow-sm hover:shadow-md
        transition-all duration-200
        cursor-pointer
      "
    >
      {/* Left Accent Bar */}
      <span className="absolute left-0 top-4 h-10 w-1 rounded-r bg-indigo-500" />

      {/* Content */}
      <div className="pl-3 flex flex-col gap-1">
        <p className="text-sm font-medium text-slate-800 leading-snug">
          {description}
        </p>

        <span className="text-xs text-slate-500">
          Date: {time}
        </span>
      </div>
    </div>
  );
};

const Notification = () => {
  return (
    <section
      className="
        h-[420px] w-full
        bg-slate-50
        rounded-2xl
        border border-slate-200
        p-4
        overflow-y-auto
        space-y-3
        scrollbar-hide
      "
      style={{
        scrollbarWidth : 'thin',
        scrollbarColor : 'indigo-300 transparent',
      }}
    >

      {/* Notification List */}
      {notifications.map((e, index) => (
        <List
          key={index}
          description={e.description}
          time={e.time}
        />
      ))}
    </section>
  );
};

export default Notification;
