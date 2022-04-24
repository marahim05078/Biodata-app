import React from "react";

function Skills(props) {
  return (
    <div>
      <span>
        <strong>Skills:</strong>
      </span>
      <ul>
        {props.skills.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
