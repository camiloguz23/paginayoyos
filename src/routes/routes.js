import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { Infouser } from '../components/Infouser'
import { Newemployee } from '../components/Newemployee'

import Main from '../pages/main'
import { Notfound } from '../pages/Notfound'
import { Layout } from './Layout'

export const Rout_page = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main/>} />
                
                <Route path="/employee/:id_user"  element={
                    <Layout>
                        <Infouser/>
                    </Layout>
                } />

                <Route path="/new" element={
                    <Layout>
                        <Newemployee />
                    </Layout>
                } />

               <Route path="/employee" element={<Main/>} /> 
               <Route path="/*" element={<Notfound />} />
            </Routes>
        </>
    )
}
/* <Employees/> */