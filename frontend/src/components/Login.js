import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {
  const [username, setUsername] = useState(''); //usestate digunakan agar kita dapat mengeluarkan value dari local function agar dapat diakses secara global
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);

  const history = useNavigate()

  const login = async () => {
    await axios.post('http://localhost:8000/login', {
      username: username,
      password: password,
    }).then((response) => { 
      console.log(response) // memanggil data inputan username dan password
      if (!response.data.logged) { //di cek apakah username dan password sudah sesuai dengan database atau belum
        setLoginStatus(false); 
        const loginStatus = false //karena variabel loginStatus diatas tidak bisa diakses pada local function
        localStorage.setItem("isAuth", loginStatus) //memasukkan item ke localstorage dengan parameter isAuth dan loginStatus
      } else {
        localStorage.setItem("token", response.data.token) //memasukkan token jwt ke localstorage
        localStorage.setItem("role", response.data.role) //memasukkan role ke localstorage untuk dicek
        console.log(response.data)
        setLoginStatus(true)
        const loginStatus = true
        localStorage.setItem("isAuth", loginStatus)
        localStorage.setItem("username", username) //untuk menampilkan usernamenya di sidebar
        localStorage.setItem("id_outlet", response.data.id_outlet) 
        history('/')
      }
      // console.log("")
    })
  }

  function isAuthenticated() {
    return loginStatus
  }

  const userAuthenticated = async () => {
    await axios.get('http://localhost:8000/login/isUserAuth', { //cuma untuk memastikan
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      console.log(response)
    })
  }
  return (
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-xl-10 col-lg-12 col-md-9">

                  <div class="card o-hidden border-0 shadow-lg my-5">
                      <div class="card-body p-0">
                          <div class="row">
                              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                              <div class="col-lg-6">
                                  <div class="p-5">
                                      <div class="text-center">
                                          <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                      </div>
                                      <form class="user">
                                          <div class="form-group">
                                              <input 
                                                type="text" 
                                                class="form-control form-control-user"
                                                id="exampleInputEmail"  aria-describedby="usernameHelp"
                                                placeholder="Enter Username..." 
                                                onChange={(e) => {
                                                  setUsername(e.target.value);
                                                }}
                                              />
                                              
                                          </div>
                                          <div class="form-group">
                                              <input 
                                                type="password" 
                                                class="form-control form-control-user"
                                                id="exampleInputPassword" 
                                                placeholder="Password" 
                                                onChange={(e) => {
                                                  setPassword(e.target.value);
                                                }}
                                              />
                                          </div>
                                      </form>
                                      <button class="btn btn-primary btn-user btn-block" onClick={login}>
                                          Login
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>

          </div>
        </div>
  )
}

export default Login