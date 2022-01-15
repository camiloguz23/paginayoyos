import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux'
import {useParams} from 'react-router-dom'
import user from '../img/user.svg'
import { id_method, new_method } from '../redux/method_action'


export const Infouser = () => {

    const {id_user} = useParams()
    const [userID, setuserID] = useState({employees:[]})
    const [change,setChange] = useState()
    const dispatch = useDispatch()

    const showUSer = async () => {

        const path = await fetch("https://raw.githubusercontent.com/sapardo10/content/master/RH.json");
        const rep = await path.json()
        const {employees} = rep

        const user = employees.filter((x) => (x.id == id_user))
        const [userData] = user
        setuserID(userData)
        dispatch(id_method(userData.id))
        
    
    }

    useEffect (() =>{
        showUSer()
    },[])

    
    const search_input = async (input_name) => {

        const path = await fetch("https://raw.githubusercontent.com/sapardo10/content/master/RH.json");
        const rep = await path.json()
        const {employees} = rep

        const user = employees.filter((x) => (x.name == change))
        if (user[0]) {
            const [userData] = user
            setuserID(userData)
            dispatch(id_method(userData.id))
        } else {
            
            console.log(user)
            console.log(input_name.target.value)
        }

    }

    const addUser = (id) => {
        const newEmployee = userID.employees.filter(x => x.id == id)
        const [add] = newEmployee
        dispatch( new_method(add) )
        console.log(newEmployee)
    }

    return (
        <>
            <div className='search'>
                <input type="text" placeholder='Enter the name ' onChange={(e) => setChange(e.target.value) }/>
                <button onClick={search_input}>Search</button>
            </div>
            <div className='Infouser'>
                <img src={user} alt='user' className='imgUser'/>
                
            
                    <div className='Datauser' >
                        <h2>{userID.name}</h2>

                        <div className='info'>
                            <span><b>Position:</b> {userID.position}</span>
                            <span><b>Wage:</b> {userID.wage}</span>
                        </div>

                    
                        <h3>Employees</h3> 
                        <div className='employees'>
                            {
                                userID.employees[0]?
                                userID.employees.map(emp => (
                                    <span key={emp.id}><b>Name:</b> {emp.name}  <i className='bx bx-user-plus cursor' onClick={ () => addUser(emp.id) }></i></span>
                                ))
                                :
                                <span >Haven't employees  </span>
                            }
                        </div>
                        
                        
                    </div>
                
            
            
            </div>
        </>
    )
}
