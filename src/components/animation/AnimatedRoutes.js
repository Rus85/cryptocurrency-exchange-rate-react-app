import {Route, Routes } from 'react-router-dom'
import LinearChartContainer from '../charts/linearChart/LinearChartContainer'
import Breifcase from '../breifcase/Breifcase'
import SignUpForm from '../forms/SignUpForm'
import SignInForm from '../forms/SignInForm'
import Page404 from '../errors/Page404'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {

    return (
        <AnimatePresence>
            <Routes >
                <Route path='/' element={<LinearChartContainer />} />
                <Route path='/breifcase' element={<Breifcase />} />
                <Route path='/signup' element={<SignUpForm />} />
                <Route path='/signin' element={<SignInForm />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes