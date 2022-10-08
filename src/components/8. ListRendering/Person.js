import React from "react";

function Person({ name }) {
  return (
    <div>
      <h4>
        I am {name.name} {name.age} years old and I know {name.skill}.
      </h4>
    </div>
  );
}

export default Person;
