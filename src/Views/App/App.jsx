import React from 'react'
import AppUI from './AppUI'
import { ProductProvider } from '../../Context'


function App() {
  return (
    <ProductProvider>
    <AppUI/>
    </ProductProvider>
  )
}

export default App
