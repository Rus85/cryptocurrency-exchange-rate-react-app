import axios from 'axios'


const AuthApiComponent = (url) => {
    async function fetchData(authData) {
        const response = await axios.post(url, authData)
        console.log((JSON.stringify(response.data, null, 2)))
    }

    return fetchData
}

export default AuthApiComponent

