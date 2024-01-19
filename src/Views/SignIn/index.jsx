import React from 'react'
import { ProductContext } from '../../Context'
import Layout from "../../Components/Layout"
import Navbar from '../../Components/Navbar'
import SignInCont from '../../Components/SingInCont'
import './style.css'

function SignIn() {
  return (
    <>
    <Navbar/>
    <Layout>
      <SignInCont/>
    </Layout>
    </>
  )
}
  
  export default SignIn