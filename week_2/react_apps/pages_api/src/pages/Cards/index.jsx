import axios from 'axios';
import  { useEffect, useState } from 'react'

const Cards = () => {

    const [data, setData] = useState([])
    console.log(data);
    useEffect(() => {
        console.log("cards just rendered!");
        const options = {
            method: 'GET',
            url: 'https://pokemon-tcg-card-prices.p.rapidapi.com/card',
            params: {
              setId: '33ee55f4-30d0-4900-850f-36a351fb9719',
              set: 'vivid-voltage',
              series: 'sword-and-shield'
            },
            headers: {
              'X-RapidAPI-Key': 'e9dd5c505bmsh10af0feb62c21f6p157c6ejsna7ce1a3e1469',
              'X-RapidAPI-Host': 'pokemon-tcg-card-prices.p.rapidapi.com'
            }
          };

          axios(options).then((response) => {
            console.log(response);
            setData(response.data.results)
          })

        return () => {
            console.log("cards is dismounting")
        }
    }, [])

  return (
    <div>
        {data.map((object) => {
            return (
                <div key={object.cardId} style={{padding: "8px"}}>
                    <div>Card Name: {object.name}</div>
                    <div>By: {object.artist}</div>

                </div>
            )
        })}
    </div>
  )
}

export default Cards