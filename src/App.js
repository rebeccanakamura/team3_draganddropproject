import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import StudentDraggable from "./components/StudentDraggable";

import mockData from "./mockData";
import TeamList from "./components/TeamList";
import Random from "./components/random";

const App = () => {
  const [student, setStudent] = React.useState("");
  const [students, setStudents] = React.useState(mockData);

  const renderStudents = () => {
    const noTeam = students.filter(student => student.team === 0);
    return noTeam.map((student, index) => {
      return (
        <StudentDraggable key={student.id} student={student} index={index} />
      );
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setStudents([...students, { id: students.length, name: student, team: 0 }]);
  };

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const droppedStudent = students.find(
      student => student.id === result.draggableId
    );
    droppedStudent.team = +result.destination.droppableId;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <Droppable droppableId={"0"}>
          {provided => (
            <div
              className="left-student-list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {provided.placeholder}
              <form onSubmit={handleSubmit}>
                <div className="button-names-wrapper">
                  <input
                    type="text"
                    placeholder="Enter Student Name"
                    value={student}
                    onChange={e => setStudent(e.target.value)}
                  />
                </div>
              </form>
              <button>Add Student</button>
              <Random students={students} />

              {renderStudents()}
            </div>
          )}
        </Droppable>

        <div className="teams-wrapper">
          <TeamList students={students} number={"1"} />
          <TeamList students={students} number={"2"} />
          <TeamList students={students} number={"3"} />
        </div>
      </div>
    </DragDropContext>
  );
};

export default App;
