import React from 'react'

export default function SidebarmenuItem({text, Icon, active}) {
  return (
    <div className='hoverEffect flex items-center justify-center xl:justify-start text-lg space-x-3'>
      <Icon />
      <span className={`${active && "font-bold"} hidden xl:inline`}>{text}</span>

    </div>
  )
}
