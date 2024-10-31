import React, { useState } from 'react';
import StudentListItem from './components/StudentListItem.js';
import { Table } from 'react-bootstrap';

function Home() {
  const [students] = useState([
    { id: 1, name: "Eve Mungai", age: 21, course: "Computer Science", image: "https://randomuser.me/api/portraits/women/54.jpg" },
    { id: 2, name: "Prince Wafula", age: 22, course: "Cyber Security", image: "https://randomuser.me/api/portraits/men/30.jpg" },
    { id: 3, name: "Bradley Wambirianga", age: 21, course: "Data Science", image: "https://randomuser.me/api/portraits/men/39.jpg" },
    { id: 4, name: "Evans Mutus", age: 23, course: "Fullstack Developer", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 5, name: "Petero Mfarisayo", age: 20, course: "Software Engineering", image: "https://randomuser.me/api/portraits/men/73.jpg" },
    { id: 6, name: "Sharon Cherono", age: 22, course: "Machine Learning", image: "https://randomuser.me/api/portraits/women/79.jpg" }
  ]);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentListItem key={student.id} student={student} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
