import React from 'react'

const ListItem = ({props,actions}) => {
  let  {id,first_name, last_name, gender, email,image} = props
  return (
    <tr>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{gender}</td>
      <td>{email}</td>
      <td><img src={image} style={{height: '50px',width:'50px'}}/></td>
      <td><button id={id.toString()} className='delete-btn' onClick={actions}>Delete</button></td>
    </tr>
  )
}

export default ListItem