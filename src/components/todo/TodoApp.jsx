import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate, useParams} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp(){
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}/>
                    <Route path='/login' element={<LoginComponent />}/>
                    <Route path='/welcome/:username' element={<WelcomeComponent /> }/>
                    <Route path='*' element={<ErrorComponent /> }/>
                    <Route path='/todos' element={<ListTodosComponent /> }/>
                </Routes>
            </BrowserRouter>            
        </div>
    )   
}

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
        console.log(username);
        console.log(password);

        if(username==='Mariusz' && password==='dummy'){
            console.log('Sucess');
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate('/welcome/${username}');
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

function WelcomeComponent() {

    const {username} = useParams();

    console.log(username);

    return(
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Welcome Component
            </div>
        </div>
    )
}


function ErrorComponent() {
    return(
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>
                Apologies for the 404. Reach out to our team at ABC-DEF-GHIJ.
            </div>
        </div>
    )
}

function ListTodosComponent() {

    const todos = [
                    {id: 1, description: 'Learn AWS'},
                    {id: 2, description: 'Learn Full Stack Dev'},
                    {id: 3, description: 'Learn DevOps'}
                ]

    return(
        <div className="ListTodosComponent">
            <h1>Things You Want to Do!</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                </tr>
                            )
                        )
                    }
                   
                    </tbody>
                </table>
            </div>
        </div>
    )
}
