import React from 'react'
import EmbededMap from '../../components/Utils/EmbededMap'

const Footer = () => {
  const items = [
    {
      heading: 'Quick Links',
      links: [
        {
          href: '#',
          text: 'Home'
        },
        {
          href: '#',
          text: 'News Events'
        },
        {
          href: '#',
          text: 'Courses'
        },
        {
          href: '#',
          text: 'Campaign'
        }
      ]
    },
    {
      heading: 'Company',
      links: [
        {
          href: '#',
          text: 'About us'
        },
        {
          href: '#',
          text: 'Careers'
        },
        {
          href: '#',
          text: 'Contact us'
        },
        {
          href: '#',
          text: 'Media'
        }
      ]
    },
    {
      heading: 'Further Information',
      links: [
        {
          href: '#',
          text: 'Terms & Conditions'
        },
        {
          href: '#',
          text: 'Privacy Policy'
        }
      ]
    },

  ]
  return (
    <footer className='bg-slate-950 text-slate-50 p-4 relative'>
      <div className='max-w-screen-xl m-auto'>
        <div className='dotted-background absolute top-0 left-0 w-full h-full z-0'></div>

        <div className='flex gap-4 relative z-1 justify-between'>
        <div className="w-80 pr-10">
          <strong>Address:</strong>
          <p className ="pt-6">
          Department of Social Welfare,
          Government of NCT of Delhi,
          7th Floor, MSO Building, ITO,
          I.P Estate New Delhi-110002
           </p>
          </div>
          <div className='flex justify-between gap-4 w-full mb-4  px-12'>
            {
              items.map(({ heading, links }, index) => (
                <List
                  key={index}
                  heading={heading}
                  links={links}
                />
              ))
            }
          </div>
          <EmbededMap />
        </div>
      </div>
    </footer>
  )
}



function Card({ heading, content }) {
  return (
    <div className='max-w-sm'>
      <div className='flex gap-2 items-center mb-2'>
        <div className='w-6 h-6 rounded bg-indigo-400 text-white'></div>
        <strong>{heading}</strong>
      </div>
      <p className='text-slate-400 text-sm'>{content}</p>
    </div>
  );
}

function List({ heading, links }) {
  return (
    <div>
      <p className ="pb-4"><strong>{heading}</strong></p>
      <ul>
        {
          links.map(({ text, href }, index) => (
            <li
              key={index}
              className='text-slate-300 text-sm pt-2'
            >
              <a href={href}>{text}</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Footer