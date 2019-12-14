import React from 'react';

function UserComponent(props) {
  let users = props.users;
  let color = props.color;

  //Skapar en array userList genom att mappa users-arrayen och lägga en <li> tag för varje instans med user och key.
  const userList = users.map((user, i) => {
    return <li key={i}>{user}</li>
  })

  //returnerar vår nya Userlist och sätter color efter vår let color.
  return (
    <div>
      <ul style={{color: color}}>
        {userList}
      </ul>
    </div>
    
  )
}

export default UserComponent;