import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function register (e) {
    e.preventDefault()

    try {
      const user =  await axios.post('http://localhost:3030/api/register',{
        username: username,
        email: email,
        password: password
      })

      console.log(user)

      if (user.data.status === 'ok') {
        alert('Registrasi Berhasil')
        navigate('/login')
      } else {
        alert(user.data.error)
      }

    } catch (error) {
      if(error.response) {
        console.log(error.response.data)
      }
    }
  }

  return (
    <div className="p-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Form Registrasi</div>
              <div className="card-body">
                <form>
                  <div className="mb-4">
                    <label htmlFor="username" className="form-label">Nama</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" id='username' placeholder='Nama Lengkap' required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id='email' placeholder='Email' required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id='password' placeholder='Password' required />
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary btn-block" onClick={register}>Sign Up</button>
                    <div className="card-body">
                      <a href="/login" class="btn btn-outline-dark">Login</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
