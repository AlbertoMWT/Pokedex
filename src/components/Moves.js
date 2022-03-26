import React from 'react'

function Moves({data, type}) {
    const moves = data?.moves

  return (
    <div className='moves' >
      <div className={type}>
          <h1>moves</h1>
          {moves?.map((mv, index) => 
              <li key={index} className='stats stats-1'>
                  {mv.move.name}
              </li>
          )}
      </div>
    </div>
  )
}

export default Moves