import React, { useEffect,useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component


export const AG = () => {
    const [column, setcolumn] = useState([
        {field: 'postId', filter: true},
        {field: 'id', filter: true},
        {field: 'name' },
        {field: 'email',filter: true}
    ])

    const [row, setrow] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(y => y.json())
        .then(y => {
            setrow(y)
        })
    },[])
  return (
    <div className="ag-theme-alpine" style={{width: 820, height: 1000}}>
        <AgGridReact    rowData={row} 
         columnDefs={column}>

        </AgGridReact>
    </div>
  )
}



export const AG2 = () => {
    const [row, setrow] = useState([])

    const [col, setcol] = useState([
        {field: 'albumId', filter: true},
        {field: 'id', filter: true},
        {field: 'title' },
        {field: 'email',filter: true,
        template: '<div src="url"></div>'}
    ])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(j => j.json())
        .then(j => {setrow(j)})
    },[])
  return (
    <div className="ag-theme-alpine" style={{width: 800, height: 800}}>
    <AgGridReact
     rowData={row} 
     columnDefs={col}>

    </AgGridReact>
</div>
  )
}

