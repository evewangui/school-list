import React from 'react';

function StudentListItem({ student }) {
  return (
    <tr>
      <td><img src={student.image} alt={student.name} style={{ width: "50px", borderRadius: "50%" }} /></td>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.course}</td>
    </tr>
  );
}

export default StudentListItem;