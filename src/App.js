import './App.css';
import { apiCheckToken } from './js/api/CommonApi';
import { useEffect, useState } from 'react';
import { getDataLocalStorage } from './js/ultils/Common';
import { MyRouter } from './js/layout/main/MyRouter';
import { BrowserRouter } from 'react-router-dom';
import { Login } from './Login';


function App() {

  const [isLogin, setIsLogin] = useState()

  async function checkToken(){
    let token = getDataLocalStorage("token")
    if(token !== ""){
      let rs = await apiCheckToken(token);
      return rs.message === "success"
    }else{
      return false
    }
    
  }

  useEffect(()=>{
    async function myFunc(){
      return await checkToken(); 
    }
    myFunc().then((rs)=>{
      setIsLogin(rs)
    })
  },[])

  return (
    
      <BrowserRouter>
    
        {isLogin !== undefined && isLogin === true ? <MyRouter isLogin = {true}/> 
        : (isLogin !== undefined && isLogin === false ? <Login changeIslogin = {() =>{setIsLogin(true)}}/>: null)}
        
      </BrowserRouter>
    
  )
}

export default App;
