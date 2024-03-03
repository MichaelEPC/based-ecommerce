import Layout from "../../Components/Layout"
import { ProductContext } from '../../Context'

function NotFound() {
  const {
    
  } = React.useContext(ProductContext);
  return (
    <>
      <Navbar/>
      <Layout>
        <p>NotFound</p>
      </Layout>
    </>
  )
}
  
  export default NotFound