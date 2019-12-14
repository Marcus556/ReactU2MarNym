import React from 'react'

const UserScreen = (  {match} ) => {
  if (match.params.user === undefined) {
    return (
      <div>
        <h3>No selected users</h3>
      </div>
    )
  } else {
    return (
    <div>
      <h3>User: {match.params.user}</h3>
    </div>
    )
  }

}

export default UserScreen
