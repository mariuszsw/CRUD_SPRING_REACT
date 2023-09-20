import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp(){
    return (
        <div className="TodoApp">
            <HeaderComponent/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}/>
                    <Route path='/login' element={<LoginComponent />}/>
                    <Route path='/welcome/:username' element={<WelcomeComponent /> }/>
                    <Route path='/todos' element={<ListTodosComponent /> }/>
                    <Route path='/logout' element={<LogoutComponent /> }/>
                    <Route path='*' element={<ErrorComponent /> }/>
                </Routes>
            </BrowserRouter>   
            <FooterComponent/>         
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

function WelcomeComponent() {

    const {username} = useParams();

    console.log(username);

    return(
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos. <Link to="/todos">Go here</Link>
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

    const today = new Date();

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDate())

    const todos = [
                    {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
                    {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate},
                    {id: 3, description: 'Learn DevOps', done: false, targetDate: targetDate}
                ]

    return(
        <div className="ListTodosComponent">
            <h1>Things You Want to Do!</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>description</td>
                            <td>id Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
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

function HeaderComponent() {
    return(
        <div className="header">
            <div>
                Header <hr />
            </div>
        </div>
    )
}


function FooterComponent() {
    return(
        <div className="footer">
            <div>
            <hr />  Footer 
            </div>
        </div>
    )
}

function LogoutComponent() {
    return(
        <div className="LogoutComponent">
            <h1>You are logged out!</h1>
            <div>
                Thank you for using our App. Come back soom!
            </div>
        </div>
    )
}
