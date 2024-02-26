import { useParams } from 'react-router-dom'
import { retriveTodoApi } from './api/TodoApiService';
import { useAuth } from './security/AuthContext';
import { useEffect, useState } from 'react';


export default function TodoComponent() {
    const { id } = useParams()

    const [description, setDescritpion] = useState('')
    
    const authContext = useAuth()
    
    const username = authContext.username

    useEffect(
        () => retrieveTodos(), [id]      
        )

    function retrieveTodos(){
        retriveTodoApi(username, id)
        .then(response => {
            console.log(response)
            setDescritpion(response.data.description)
        })
        .catch(error => console.log(error))
    }
    
    return (
        <div className="container">
            <h1>Enter To Details</h1>
            <div>
                description: {description}
            </div>
        </div>
    )
}