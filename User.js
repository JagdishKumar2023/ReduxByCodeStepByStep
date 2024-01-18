import React from "react";

const User = (props) => {
  console.warn(props.data.name);

  return (
    <div>
      <h1>User components</h1>
      <h4>{data.name}</h4>
      <h4>{data.age}</h4>
    </div>
  );
};

export default User;
