import axios from 'axios'


const AuthApiComponent = (url) => {
    async function fetchData(authData) {
        const response = await axios.post(url, authData)
        return response
    }

    return fetchData
}

export default AuthApiComponent

