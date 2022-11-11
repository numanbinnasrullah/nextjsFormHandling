import React from 'react';

const StudentList = (props) => {
    // console.log("Props",props.studentData);
    
  return (
    <div>
        <table>
          <tr>
              <th>Student Name</th>
              <th>Student Class</th>
              <th>Student Email</th>
              <th> Student Roll No</th>
          </tr>  
          {props.studentData.map( (student, index) => {
            
            return (
            <tr key={student.rollNo} >
                <td>{student.name}</td>
                <td>{student.class}</td>
                <td>{student.email}</td>
                <td> {student.rollNo}</td>
                <button onClick={()=>{props.upDateStudnData(index)}}>Edit</button>
            </tr>
            )
          })}
      </table>
    </div>
  )
}

export default StudentList
