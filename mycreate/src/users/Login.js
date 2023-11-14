import {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Header(){
  return(
    <div>
      <h2>로그인 및 회원가입</h2>
    </div>
  )
}

function UserSingup(){
  const [userData, setUserData] = useState({ username: '', password: '', name: '', phone: '' });

  const onUserIdHandler = (event) => {
    setUserData({ ...userData, username: event.target.value })
  }

  const onUserPasswordHandler = (event) => {
    setUserData({ ...userData, password: event.target.value })
  }
  const onUserHandler = (event) => {
    setUserData({ ...userData, name: event.target.value })
  }
  const onUserCallHandler = (event) => {
    setUserData({ ...userData, phone: event.target.value })
  }
  const handleRegister = () => {
    axios.post('http://localhost:9000/api/auth/signup', userData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return(

    <div>
      <h2>회원가입</h2>
        <label>ID</label><br/>
        <input type="text" placeholder="아이디" onChange={onUserIdHandler}/><br/>
        <label>Password</label><br/>
        <input type="password" placeholder="비밀번호" onChange={onUserPasswordHandler}/><br/>
        <label>이름</label><br/>
        <input type="text" placeholder="이름" onChange={onUserHandler}/><br/>
        <label>전화번호</label><br/>
        <input type="text" placeholder="비밀번호" onChange={onUserCallHandler}/><br/>
        <button onClick={handleRegister}>회원가입</button>

    </div>
  )
}

function UserLogin({ handleLoginSuccess }){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const userData = { username, password };

    axios.post('http://localhost:9000/api/auth/signin', userData)
      .then(response => {
        handleLoginSuccess(response.data);
        console.log(response.data.username);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>로그인</h2>
      ID<br />
      <input type="text" name="username" value={username} placeholder="아이디" onChange={event => setUsername(event.target.value)} /><br />
      Password<br />
      <input type="password" name="password" value={password} placeholder="비밀번호" onChange={event => setPassword(event.target.value)} /><br />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );

   
}

function Login(){

    const [mode, setMode] = useState('LOGIN');
    const [loggedInUser, setLoggedInUser] = useState(null);
  
    const handleLoginSuccess = (user) => {
        setLoggedInUser(user);
        setMode('welcome');
      };

    let content = null;
  
    if (mode === 'welcome') {
      content = <>
        <div>
          <h2>로그인 성공!</h2>
          <p>{loggedInUser.username}님 안녕하세요.</p>
          
        </div>
      </>;
    } else if (mode === 'LOGIN') {
      content = <UserLogin handleLoginSuccess={handleLoginSuccess} />;
    } else if (mode === 'SIGNUP') {
      content = <UserSingup />;
    }
  
    return (
      <div>
        <Header />
        {content}
        <ul>
          <a href="/login" onClick={function (event) {
            event.preventDefault();
            setMode('LOGIN');
          }}>로그인하기</a><br />
          <a href="/signup" onClick={function (event) {
            event.preventDefault();
            setMode('SIGNUP');
          }}>회원가입</a>
        </ul>
      </div>
    );
}

export default Login;
