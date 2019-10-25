import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const StudentDraggable = props => {
  const { student } = props;

  const handleDeleteClick = () => {
    axios
      .delete(`https://dragdropteem.herokuapp.com/delStudent/${student.id}`)
      .then(response => console.log("response", response))
      .catch(err => console.log("error", err));
  };

  return (
    <Draggable draggableId={student.id} index={props.index}>
      {provided => (
        <div
          className="student-draggable"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <p className="student-name">{student.name}</p>
          <a>
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon="trash"
              onClick={handleDeleteClick}
            />
          </a>
        </div>
      )}
    </Draggable>
  );
};

export default StudentDraggable;
