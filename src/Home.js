import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store'
import { Rout_page } from './routes/routes'

export const Home = () => {
    return (
        <>
        <BrowserRouter>
            <Provider store={store}>
                < Rout_page />
            </Provider>
        </BrowserRouter>
        </>
    )
}
