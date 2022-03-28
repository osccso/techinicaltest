import React,{useState,useEffect} from 'react'
import { url } from '../utils/usefulValues'
import { StyledList } from './StyledComps'
import ListItem from './ListItem'


const UsersList = () => {
  const [list,setList] = useState([])
  useEffect(()=>{
    getData()
  },[])

  async function getData() {
    console.log('insidegetdata')
    try {
      const response =await fetch(url,
      {
        method:'GET',
        headers:{
          'Content-type':'application/json'
        }
      })
      if (response.ok){
        const data = await response.json()
        setList(data)
      }
      else {
        console.log('Fail')
      }
    } catch (error) {
      console.log("Fetch/Network error")
      return null 
    }
  }
  console.log(list)
  async function deleteRegister(e) {
    let idToDelete = e.target.id
    console.log(e.target.id);
    list.find(item => item.id.toString() === idToDelete)
    const response = await fetch(url+idToDelete,{
      method:'DELETE',
      header:{
        'Content-type':'application/json'
      }
    })
    getData()
  }
  return (
    <StyledList>
      <table className='table'>
        <thead className='header-table'>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>email</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => <ListItem key={item.id} props={item} actions={deleteRegister}/>)}
        </tbody>
      </table>
    </StyledList>
  )
}

export default UsersList