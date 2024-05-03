import { Routes, Route } from 'react-router-dom';
import './styles/style.scss'
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Students from './pages/Students/Students';
import Student from './pages/Student/Student';
import { AddStudentForm } from './forms/addStudent.form';
import { StudentTable } from './tables/student.table';
import { useState } from 'react';
import { EditStudentForm } from './forms/editStudent.form';


function App() {

  const studentData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Max', username: 'maxfarseer' },
  ]

  const [users, setUsers] = useState(studentData)

  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([ ...users, user ])
  }

  const deleteUser = id => {
    setEditing(false)
    setUsers(users.filter(user => user.id !== id))
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  return (
    <><Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/students"} element={<Students />} />
        <Route path={"/student/:id"} element={<Student />} />
      </Route>
    </Routes>
    
    <div className="container">
        <div className="flex-row">
          <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit student</h2>
              <EditStudentForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add student</h2>
              <AddStudentForm addUser={addUser} />
            </div>
          )}
        </div>
          <div className="flex-large">
            <h2>View students</h2>
            <StudentTable users={users} editRow = {editRow} deleteUser = {deleteUser} />
          </div>  
        </div>
      </div></>
  

  );
}


export default App;
