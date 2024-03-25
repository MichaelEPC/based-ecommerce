
function Layout({ children }) {

  return (
    <>
     <div className='layout flex flex-col items-center mt-20'>
        {children}
     </div>
    </>
  )
}

export default Layout