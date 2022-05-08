import { useEffect, useState } from "react"

const useGrocery = () => {
    const [grocery, setGrocery] = useState([])
    useEffect(() => {
        fetch('https://floating-crag-70347.herokuapp.com/grocery')
            .then(res => res.json())
            .then(data => setGrocery(data))
    }, [])
    return [grocery, setGrocery]
}
export default useGrocery