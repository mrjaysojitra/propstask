import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Datausa = () => {
    const [data, setdata] = useState([])

    useEffect(()=> {
        axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        .then((j)=>{setdata(j.data.data)})
    },[])
  return (
    <div>
        {data.map((a)=>{
            return(
                <tr>
                    <td>{a["ID Nation"]}</td>
                    <td>{a.Nation}</td>
                    <td>{a["ID Year"]}</td>
                    <td>{a.Year}</td>
                    <td>{a.Population}</td>
                    <td>{a["Slug Nation"]}</td>
                </tr>
            )
        })}
    </div>
  )
}

export const Datausa2 = () => {
    const [top, settop] = useState([])

    useEffect(()=>{
        axios.get("https://api2.binance.com/api/v3/ticker/24hr")
        .then((k)=> (settop(k.data)))
    })
  return (
    <div>
        {top.map((g)=>{
            return(
                <tr>
              <td>{g.symbol}</td> 
              <td>{g.priceChange}</td>
              <td>{g.priceChangePercent}</td>
              <td>{g.weightedAvgPrice}</td>
              <td>{g.prevClosePrice}</td>
              <td>{g.lastPrice}</td>
              <td>{g.lastQty}</td>
              </tr>
            )
        })}
    </div>
  )
}


export const Datausa3 = () => {
    const [all, setall] = useState([])

    useEffect(()=>{
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then((l)=>(setall(l.data.drinks)))
    })
  return (
    <div>
        {all.map((p)=>{
            return(
                <tr>
                    <td>{p.idDrink}</td>
                    <td>{p.strDrink}</td>
                    <td>{p.strDrinkAlternate}</td>
                    <td>{p.strTags}</td>
                    <td>{p.strVideo}</td>
                    <td>{p.strCategory}</td>
                </tr>
            )
        })}
    </div>
  )
}


export const Datausa4 = () => {
    const [first, setfirst] = useState([])

    useEffect(()=>{
        axios.get("https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json")
        .then((s)=> {(setfirst(s.data))})
    },[])
  return (
    <div>
        {first.map((g)=>{
            return(
                <tr>
                    <td>{g.disclosure_year}</td>
                    <td>{g.disclosure_date}</td>
                    <td>{g.transaction_date}</td>
                    <td>{g.owner}</td>
                </tr>
            )
        })}
    </div>
  )
}


export const Datausa5 = () => {
    const [second, setsecond] = useState([])

    useEffect(()=>{
        fetch("https://cryptingup.com/api/markets")
        .then(f=> f.json)
        .then(f=>{(setsecond(f.markets))})
    },[])
  return (
    <div>
        {second.map((w)=>{
            return(
                <tr>
                    <td>{w.price}</td>
                </tr>
            )
        })}
    </div>
  )
}



export const Datausa6 = () => {
    const [third, setthird] = useState([])

    useEffect(()=>{
        fetch("https://api.fda.gov/food/enforcement.json?limit=10")
        .then(j=>(j.json))
        .then(j=>(setthird(j)))
    })
  return (
    <div>
        {
            third.map((i)=>{
                return(
                    <tr>
                        <td>{i.disclaimer}</td>
                    </tr>
                )
            })
        }
    </div>
  )
}



