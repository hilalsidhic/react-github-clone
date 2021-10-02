import React from 'react'

function Table(props) {
    return(
    props.data.map((obj,index) =>{
        return (
            <tr>
              <td>{index}</td>
              <td>{obj.title}</td>
              <td>{obj.body}</td>
            </tr>
          );
    })
    )
}

export default Table
