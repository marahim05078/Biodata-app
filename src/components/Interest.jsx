import React from "react";

function Interest(props) {
  return (
    <div>
      <span>
        <strong>Interests:</strong>
      </span>
      <ul>
        {props.interest.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Interest;
