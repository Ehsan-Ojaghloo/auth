import React , {useState , useRef} from 'react'
import './login.scss'

function Login() {

    const [userName , setUserName] = useState("");
    const [passWord , setPassword] = useState("");

    const loginUser = (confirm) => {
        confirm.preventDefault();

        if (userName !== "" && passWord !== "") {
            fetch('https://668fe602c0a7969efd9a0985.mockapi.io/users/data' , {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstname: userName,
                    password: passWord
                })
            })
            .then((res) => res.json())
            .then((output) => console.log(output))
        } else{
            console.error("PLease fill all forms")
        }
    }

  return (
    <div className='login-con'>
        <div className='form'>
            <input type="text" id='userName' value={userName} placeholder='User Name' onInput={(input) => {setUserName(input.target.value)}}/>
            <input type="text" id='password' value={passWord} placeholder='Password' onInput={(input) => {setPassword(input.target.value)}}/>
            <button type='submit' onClick={loginUser}>Submit</button>
        </div>
    </div>
  )
}

export default Login