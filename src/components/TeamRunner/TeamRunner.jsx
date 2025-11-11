import React from 'react'

const TeamRunner = ({ runner }) => {

  return (
    <div className='team-runner'>
        <p key={runner.runner.id}>{runner.runner.first_name}</p>
        <div>
          <p>{runner.role}</p>
        </div>
    </div>
  )
}

export default TeamRunner