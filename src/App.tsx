import './App.css';
import AddUser from './Components/AddUser';
import UserList from './Components/UserList';
import { useState } from 'react';
import { User } from './Constants/Interfaces';
function App() {
  const [userList, setUserList] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUserList((prev: User[]) => {
      return [...prev, user];
    });
  };

  return (
    <div className='App'>
      <AddUser addUser={addUser} />
      <UserList userList={userList} />
    </div>
  );
}

export default App;
