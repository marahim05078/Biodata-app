import React from "react";
import Profession from "./Profession";
import Skills from "./Skills";
import Address from "./Address";
import Email from "./Email";
import Experiences from "./Experiences";
import Mobile from "./Mobile";
import Name from "./Name";
import Interest from "./Interest";

function Person(props) {
  return (
    <div>
      <Name name={props.name} />
      <Address address={props.address} />
      <Email email={props.email} />
      <Mobile mobile={props.mobile} />
      <Profession profession={props.profession} />
      <Experiences experiences={props.experiencs} />
      <Skills skills={props.skills} />
      <Interest interest={props.interest} />
    </div>
  );
}

export default Person;
