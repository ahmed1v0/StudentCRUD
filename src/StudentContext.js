import { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const addStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  const removeStudent = (studentToRemove) => {
    const updatedStudents = students.filter(
      (student) => student.email !== studentToRemove.email
    );
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  const selectStudent = (student) => {
    setSelectedStudent(student);
  };

  const updateStudent = (updatedStudent) => {
    const updatedStudents = students.map((student) =>
      student.email === updatedStudent.email ? updatedStudent : student
    );
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };
  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(savedStudents);
  }, []);

  useEffect(() => {
    if (students.length) {
      localStorage.setItem("students", JSON.stringify(students));
    }
  }, [students]);

  return (
    <StudentContext.Provider
      value={{ students, addStudent, removeStudent, updateStudent ,selectStudent,selectedStudent}}
    >
      {children}
    </StudentContext.Provider>
  );
}
