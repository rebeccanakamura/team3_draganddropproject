import React from "react";

import StudentDraggable from "./StudentDraggable";

const Random = props => {
  const handleRandom = () => {
    return props.students.map(student => {
      const randomTeam = Math.floor(Math.random(student.team) * 3) + 1;
      console.log(randomTeam);
      // return console.log(
      //   <StudentDraggable
      //     key={student.id}
      //     student={student}
      //     team={randomTeam}
      //   />
      // );
    });
  };

  return (
    <div>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
};

export default Random;
