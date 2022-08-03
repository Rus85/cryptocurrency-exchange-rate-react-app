import { motion } from 'framer-motion'
import './page404.css'

const Page404 = () => {
    return (
        <motion.div className='error-page'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                        <h2>Page not found</h2>
                    </div>
                    <a href="/">На главную</a>
                </div>
            </div>
        </motion.div>
    )
}

export default Page404