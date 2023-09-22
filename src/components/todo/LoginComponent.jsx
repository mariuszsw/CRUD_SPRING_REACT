import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function LoginComponent() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [showSuccesMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate();

    function handleUsernameChange(event){
        // console.log(event.target.value);
        setUsername(event.target.value);
    }

    function handlePasswordChange(event){
        // console.log(event.target.value);
        setPassword(event.target.value);
    }

    function handleSubmit(){
        // console.log(username);
        // console.log(password);

        if(username==='Mariusz' && password==='dummy'){
            console.log('Sucess');
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`);
        } else {
            console.log("Failed");
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }
  
    return(        
        <div className="Login">
            <h1>Login</h1>
            {showSuccesMessage && <div className="successMessage">Authentication Successfully</div>}
            {showErrorMessage && <div className="successMessage">Authentication Failed. Please check your credentials</div>}
            
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent
