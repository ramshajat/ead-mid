import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router';
import PollDisplayComponent from './components/PollDisplayComponent';
import UserParticipation from './components/UserParticipation';
import AnotherUserParticipant from './components/AnotherUserParticipant';
import ThankyouMessage from './components/ThankyouMessage';
import { useState } from 'react';
function App() {
  const [selItem, setSelItem] = useState(null);
  const handleChange = (item) => {
    item === selItem ? setSelItem(null) : setSelItem(item);
  };
  return (
    <div className="App">
      <Routes>
      {/* <Route path='/' element={<PollDisplayComponent/>} /> */}
      <Route path='/' element={<UserParticipation/>} />
      <Route path='/' element={<ThankyouMessage/>}/>
      {/* <Route path='/' element={<AnotherUserParticipant/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
