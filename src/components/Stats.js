import React, { useState } from 'react'

function Stats({data, type}) {
  const stats = data?.stats

  return (
    <div className='stats-container'>
      <div className={type}  >
          <h1>Stats</h1>
          {stats.map((st, index) => 
              <li key={index} className='stats'> 
              {st.stat.name}: <span> {st.base_stat}</span> 
              </li>      
          )}
      </div>

    </div>
  )
}

export default Stats