import { BrowserRouter as Router} from 'react-router-dom'
import Header from '../header/Header'
import AnimatedRoutes from '../animation/AnimatedRoutes'
import './app.css'

const App = () => {

    return (
        <Router>
            <div className="app">
                <Header />
                <AnimatedRoutes />
            </div>
        </Router>
    )
}

export default App