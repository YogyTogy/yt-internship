import React from 'react'
import Button from './Button'

const list = ['All', "Gaming", "Songs", "Live", "Cricket", "Football", "Laughter", "Sitcoms", "Gadgets", "Cooking", "Podcasts", "Smartphones", "WWE"]

const ButtonList = () => {
  return (
    <div className='flex '>
        {list.map((lists,index) => (
          <Button name={lists} key={index} />
        ))}
    </div>
  )
}

export default ButtonList;