import React from 'react'

const VideoCard = ({ info }) => {
  const { snippet, statistics} = info;
  const { channelTitle, title, thumbnails} = snippet
  return (
    <div className='p-2 m-2 w-72 shadow-md hover:scale-105'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt={title} />
        <ul>
            <li className='font-bold py-2'> {title} </li>
            <li > {channelTitle} </li>
            <li> {statistics.viewCount} views </li>
        </ul>
    </div>
  )
}

export const AdVideoCard = ({info}) => {
  return <div className="border p-1 m-1 border-red-900 hover:scale-0">
    < VideoCard info={info} />
  </div>
}

export default VideoCard