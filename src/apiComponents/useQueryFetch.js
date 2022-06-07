import { useCallback, useEffect, useState } from 'react'

const initialState = {
  data: null,
  loading: false,
  error: null,
}

function useQueryApp(url, skipStart = false) {
  const [result, setResult] = useState(initialState)

  const setData = useCallback(
    (data) => {
      setResult((prev) => ({ ...prev, loading: false, error: null, data }))
    },
    [setResult]
  )

  const fetchData = useCallback(async () => {
    try {
      setResult((prev) => ({ ...prev, loading: true, error: null }))

      const response = await fetch(url)
      if (response.ok) {
        const request = await response.json()
        setResult((prev) => ({
          ...prev,
          loading: false,
          error: null,
          data: request,
        }))
      } else {
        setResult((prev) => ({
          ...prev,
          loading: false,
          error: new Error(
            `Could not fetch ${url}, status: ${response.status}`
          ),
        }))
      }
    } catch (error) {
      setResult((prev) => ({ ...prev, loading: false, error }))
    }
  }, [setResult, url])

  useEffect(() => {
    if (!skipStart) {
      fetchData()
    }

    return () => {
      setResult(initialState)
    }
    // eslint-disable-next-line
  }, [])

  return { ...result, fetchData, setData }
}

export default useQueryApp