import React, {useState} from 'react'
import search from '../img/search.svg'
import { NavLink } from 'react-router-dom'

export const Content = () => {

    const [listEmployees, setlistEmployees] = useState([])
    const [animation, setanimation] = useState(false)

    

    const url_employee = async () => {

        const path = await fetch("https://raw.githubusercontent.com/sapardo10/content/master/RH.json");
        const rep = await path.json()
        const {employees} = rep

        const orderArray = (x,y ) => {
            if (x.wage > y.wage) {
                return -1     
            }

            if (x.wage < y.wage) {
                return 1
            }
        }

        const orderList = employees.sort(orderArray)
        setlistEmployees(orderList)
        setanimation(true)
        
    }

    const hiden = () => {

        setanimation(false)
        setTimeout(() => {
            
            setlistEmployees([])
        }, 3000);
    }

    return (
        <div className='list'>
            <div className='list_employee'>
                <img src={search } alt='search' className='imgSearch'/>
                <div className='btn_list' onClick={ listEmployees[0]? hiden:url_employee }>
                    <p>{ listEmployees[0]? "Hiden":"Employees list" }</p>
                </div>
            </div>

            <div className={`content_employees ${ animation ? "animation" : "animation_end" }`}>

                    {listEmployees.map(x => (
                        <div key={x.id}>
                            <h3>Employee</h3>
                            <p><b>Name: </b> <NavLink to={`/employee/${x.id}`}>{x.name}</NavLink> </p>
                        </div>
                    ))}

                </div>
            
        </div>
    )
}
