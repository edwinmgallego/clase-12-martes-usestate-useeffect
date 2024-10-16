import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [data, setData] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const result = await response.json();
                setData(result);
                console.log(result)
            } catch (error) {
                console.error("error al cargar los datos: ", error)
            }
        };
        fetchData();

    }, [])
    return (
        <>
            <div>UseEffect</div>
            <h1>Datos Obtenidos:</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <strong>{item.name}</strong>
                        <p>{item.email}</p>
                    </li>))

                }
            </ul>

        </>

    )
}

export default UseEffect