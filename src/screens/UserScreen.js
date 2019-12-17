import React from "react";
import { useParams } from "react-router";

const UserScreen = () => {
  const { user } = useParams();
  if (user === undefined) {
    return (
      <div>
        <h3>No selected users</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>User: {user}</h3>
      </div>
    );
  }
};

export default UserScreen;
