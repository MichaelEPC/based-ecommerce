import React from 'react'
import { ProductContext } from '../../Context'
import Layout from "../../Components/Layout"
import Navbar from '../../Components/Navbar'
import SignUpCont from '../../Components/SingUpCont'
import './style.css'

function SingUp() {
  const {
    users,
    setUsers,
    userID,
    setUserID,
  } = React.useContext(ProductContext);
  
  return (
    <>
    <Layout>
      <SignUpCont users={users} setUsers={setUsers} userID={userID} setUserID={setUserID}/>
    </Layout>
    </>
  )
}
  
  export default SingUp