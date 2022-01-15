import React from 'react'
import imgEmployee from '../img/employee.svg'
import { useSelector } from 'react-redux' 

export const Newemployee = () => {

    const {New_employee} = useSelector(x => x) // se obtiene los datos de redux
    return (
        <div className='body_new'>
            <div className='NewEmployee'>
                <img src={imgEmployee} alt='employee' />
                <div>
                    <h2 className='title_employee'>New employees</h2>

                    <div className='listEmployee'>
                        { New_employee.map(x=>( // se hace un mapeo de la lista que tenemso en redux de los nuevos empleado
                            <p key={x.id} className='contentEmployee'>{x.name}</p>
                        )) }
                    </div>

                </div>
            </div>
        </div>
    )
}
