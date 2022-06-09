import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import LinearChartContainer from '../charts/linearChart/LinearChartContainer';
import Breifcase from '../breifcase/Breifcase';
// import MainPage from '../pages/MainPage';
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
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App