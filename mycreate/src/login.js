

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