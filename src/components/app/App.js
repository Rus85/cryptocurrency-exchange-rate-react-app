import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import LinearChartContainer from '../charts/linearChart/LinearChartContainer';
import Breifcase from '../breifcase/Breifcase';
import SignUpForm from '../form/SignUpForm';
import SignInForm from '../form/SignInForm';
import './app.css'

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path='/' element={<LinearChartContainer />} />
                        <Route path='/breifcase' element={<Breifcase />} />
                        <Route path='/signup' element={<SignUpForm />} />
                        <Route path='/signin' element={<SignInForm />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App