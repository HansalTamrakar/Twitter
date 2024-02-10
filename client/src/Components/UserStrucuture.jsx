import React from 'react'

const UserStrucuture = () => {
  return (
    <div className="flex align-baseline mt-16">
    <div className="border -ml-8  rounded-full h-16 w-16">
      <img
        className="rounded-full h-16"
        src="https://pbs.twimg.com/profile_images/1700435941100527616/yOK_0ZhS_400x400.jpg"
        alt=""
      />
    </div>
    <div>
      <div className="text-2xl  font-bold ml-3">Hansal Tamrakar</div>
      <div className="font-bold text-gray-400 mt-1 ml-3">@HansalTamrakar</div>
  
    </div>
  </div>
  )
}

export default UserStrucuture