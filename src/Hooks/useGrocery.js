import { useEffect, useState } from "react"

const useGrocery = () => {
    const [grocery, setGrocery] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/grocery')
            .then(res => res.json())
            .then(data => setGrocery(data))
    }, [])
    return [grocery, setGrocery]
}
export default useGrocery