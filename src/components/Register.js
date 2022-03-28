import React,{useState,useEffect} from 'react'
import { StyledRegister } from './StyledComps'
import { url } from '../utils/usefulValues'
import { fileUpload } from '../utils/fileupload'

const Register = () => {
  const [user, setForm] = useState({
    first_name: "",
    last_name:"",
    image:"",
    gender:"",
    email:""
  })

  useEffect(() => {console.log('reloading')}
  ,[user])

  const handleOnChange = e => {
    setForm({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    const file = e.target.image.files[0]
    fileUpload(file)
      .then(resp => {
        user.image = resp
        setData(user)
        setForm({
          first_name: "",
          last_name:"",
          image:"",
          gender:"",
          email:""
        })
      })
      .catch (error => {
        console.log(error);
      })
  }

  const setData = async (data) => {
    console.log(data);
    const resp = await fetch(url,{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    console.log(resp);
  }
  const {first_name,last_name,gender,email,image} = user
  return (
    <StyledRegister>
      <form className="main-form" onSubmit={handleOnSubmit}>
        <p className='form-title'>Welcome, you can Sign Up below</p>
        <div className="form-field">
          <label className="form-tag">First Name</label>
          <input 
          type="text" 
          placeholder='Enter your first name' 
          name="first_name"
          autoComplete="off"
          onChange={handleOnChange}
          value={first_name}></input>
        </div>
        <div className="form-field">
          <label className="form-tag">Last Name</label>
          <input 
          type="text" 
          placeholder='Enter your last name' 
          name="last_name"
          autoComplete="off"
          onChange={handleOnChange}
          value={last_name}></input>
        </div>
        <div className="form-field">
          <label className="form-tag">Gender</label>
          <select name="gender" value={gender} onChange={handleOnChange} >
            <option className='main-option' value=""></option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div className="form-field">
          <label className="form-tag">Email</label>
          <input 
          type="email"
          autoComplete="off"
          placeholder='Enter your email' 
          name="email" 
          onChange={handleOnChange}
          value={email}></input>
        </div>
        <div className="form-field">
          <label className='form-tag'>Avatar</label>
          <input type="file" name="image" value={image} onChange={handleOnChange}></input>
        </div>
        <div className="form-field">
          <button type="submit">Submit</button>
        </div>
      </form>
    </StyledRegister>
    
  )
}

export default Register