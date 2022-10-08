import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Pratham",
      age: 23,
      skill: "ReactJS",
    },
    {
      id: 2,
      name: "Shivang",
      age: 24,
      skill: "Marketing",
    },
    {
      id: 3,
      name: "Tanmay",
      age: 23,
      skill: "Spend Money",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.name} name={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
