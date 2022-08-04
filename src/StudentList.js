import React from 'react'

const StudentList = ({students}) => {
  return students.map(student => (
    <div>
        <h3>{student.name}</h3>
        <h3>{student.age}</h3>
    </div>
  )
  );
}

export default StudentList