import React from 'react'

const StudentList = (props) => {
    console.log("Props",props.studentData);
    
  return (
    <div>
           <table>
                <tr>
                    <th>Student Name</th>
                    <th>Student Class</th>
                    <th>Student Email</th>
                    <th> Student Roll No</th>
                </tr>  
      {props.studentData.map( (student) => {
        return (
         <tr>
            <th>{student.name}</th>
            <th>{student.class}</th>
            <th>{student.email}</th>
            <th> {student.rollNo}</th>
         </tr>
        )
      })}
      </table>
    </div>
  )
}

export default StudentList
