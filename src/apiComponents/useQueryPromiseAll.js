import { useCallback, useEffect, useState } from "react"

const initialState = {
  data: []
}

function useQueryPromiseAll(urls) {

const [data, setData] = useState(initialState)

  const fetchData = useCallback(() => {
   Promise.all(urls.map((url) => fetch(url)))
      .then((requests) =>
        Promise.all(requests.map((request) => request.json())).then(
          (responses) => {
            setData(responses)
          }
        )
      )
      .catch((error) => console.log(error))
      // .finally(() => console.log('finally'))
        },[setData])

  useEffect(() => {
    fetchData()
  }, [fetchData])

return {fetchData, data}

}


export default useQueryPromiseAll