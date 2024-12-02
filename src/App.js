import './App.css';
import RegisterForm from './components/RegisterForm';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";
import { StudentContext } from './StudentContext';
import ListForm from './components/ListForm.jsx';
import UpdateStudent from './components/UpdateStudent.jsx';
function App() {
  
  const {students,addStudent,removeStudent,selectStudent,selectedStudent} = useContext(StudentContext);
  console.log(students);
  

  return (
    
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterForm addStudent={addStudent} />} />
          <Route path="/list-students" element={<ListForm students = {students}removeStudent = {removeStudent} selectStudent = {selectStudent} selectedStudent = {selectedStudent}/>} />
          <Route path="/update-student/:email" element={<UpdateStudent />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
