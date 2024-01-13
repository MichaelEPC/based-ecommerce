import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import Navbar from '../../Components/Navbar'
import { ProductProvider } from '../../Context'


function Home() {

  return (
    <>
    <Navbar/>
     <Layout>
        <p>Home</p>
        <Card/>
     </Layout>
    </>
  )
}

export default Home