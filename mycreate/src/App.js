
import './App.css';
import TOC from "./components/TOC";
import Content from "./components/Comtent";
import Subject from "./components/Subject";
//import React, {useEffect} from 'react';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState({ username: '', password: '' });

  const onUserIdHandler = (event) => {
    setUserData({ ...userData, username: event.target.value })
  }

  const onUserPasswordHandler = (event) => {
    setUserData({ ...userData, password: event.target.value })
  }
  const handleRegister = () => {
    axios.post('http://localhost:9000/api/auth/signup', userData)
      .then(response => {
        console.log(response.data); // 회원가입 성공 시 처리
      })
      .catch(error => {
        console.error(error); // 에러 처리
      });
  };

  const handleLogin = () => {
    axios.post('http://localhost:9000/api/auth/signin', userData)
      .then(response => {
        console.log(response.data); // 로그인 성공 시 처리
      })
      .catch(error => {
        console.error(error); // 에러 처리
      });
  };

  return (
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        width: '100%', height: '100vh'
        }}>
  
        <form style={{ display: 'flex', flexDirection: 'column'}}
        >
          <h1>회원가입 및 로그인</h1>
          <label>ID</label>
          <input type="text" placeholder="아이디" onChange={onUserIdHandler}/>
          <label>Password</label>
          <input type="password" placeholder="비밀번호" onChange={onUserPasswordHandler}/>
          <button onClick={handleLogin}>로그인</button>
          <button onClick={handleRegister}>회원가입</button>
        </form>
    </div>
  );
};

export default App;
