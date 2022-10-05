import React, { useState } from "react";
// import { ToastHeader } from "react-bootstrap";
// import { FaAlignCenter } from "react-icons/fa";
import { toast } from "react-toastify";
import Header from "../Components/Header";

const HomePage = () => {
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confromPassword, setConformPassword] = useState("")
const [gender, setGender] = useState("")
const [img, setImg] = useState(profilePIcDefault)
const [check, setCheck] = useState(false)

// convert img
const getimage = (file) =>{
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = ()=> resolve(reader.result)
    reader.onabort = (resolve)(reader.result)
    reader.readAsDataURL(file)
  })
}
// handle img
const handleImg = (e) =>{
  const file = e.target.file[0]
  getimage(file).them(getimage => {
    localStorage['img'] = getimage
    console.debug('file Store', getimage);
  });
};

  
// form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === ""){
      toast.error("provid with your Name")
    }else if(email === ""){
        toast.error("please fill the 'email")
    }else if(password === ""){
      toast.error("plese provide with password")
    }else if(confromPassword === ""){
      toast.error('confrom-password with password')
    }else if(gender === ""){
      toast.error('please select the Gender')
    }else if(check === false){
      toast.error('please ckecked the box')
    }else{
      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
      localStorage.setItem('password', password)
      localStorage.setItem('gender', gender)
      // localStorage.setItem('img', img)
      localStorage.setItem('terms', check)
      toast.success("User Detial Saved")
    }
  };
  

  return (
    <>
      <Header />
      <div className="container content mt-4">
        <h5> 📝 Add New User</h5>
        <div className="row border p-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={e => setName(e.target.value)}
                id="exampleInputName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={e => setEmail(e.target.value)}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={e => setPassword(e.target.value)}
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Conform-Password
              </label>
              <input
                type="password"
                className="form-control"
                value={confromPassword}
                onChange={e => setConformPassword(e.target.value)}
                id="exampleInputPassword1s"
              />
            </div>
            {/* radios button inpput ================== */}
            <div className="d-flex flex-row">
              Gender :
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value="Male"
                  defaultChecked={gender === "Male"}
                  onChange={e => setGender(e.target.value)}
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value="Female"
                  defaultChecked={gender === "Female"}
                  onChange={e => setGender(e.target.value)}
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Female
                </label>
              </div>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                checked={check}
                onChange={e => setCheck(e.target.value)}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I Acept Terms And Conditions
              </label>
            </div>
            <button
              type="submit"
              className="form__submit-btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          {/* col-md-6 ends */}

          <div className="col-md-4 ">
            <div className="profile_section">
              <p>Select Profile Picture :</p>
              <img
                src={
                  localStorage.getItem("img")
                    ? localStorage.getItem("img")
                    : profilePIcDefault
                }
                alt="profile_pic"
                className="img-thumbnail"
                height={250}
                width={250}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Default file input example
              </label>
              <input className="form-control" type="file" 
              onChange={handleImg}
              name="file"
              id="formFile" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;