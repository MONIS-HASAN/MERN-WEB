import Header from './Header'
import Footer from './Footer'

import Contact from '../pages/Contact'
import AddProducts from '../pages/AddProducts'
import Products from '../pages/ProductsList';
import Home from '../pages/Home';
// import { BrowserRouter, Routes , Route , Outlet } from 'react-router-dom';
import { createBrowserRouter , RouterProvider , Outlet } from 'react-router-dom';
import ProductsList from '../pages/ProductsList';


export default function Router(){
    const Layout = () => {
        return(
          <>
           <Header />
           <Outlet />
           <Footer />
          </>
        )
      }
    
    // const BrowserRoutes = () => {
    //     return(
    //         <>
    //             <BrowserRouter>
    //                 <Routes>
    //                     <Route path="/" element={<Layout/>}>
    //                         <Route path="/" element={<Home />}/>
    //                         <Route path="contact-us" element={<Contact />}/>
    //                         <Route path="add-products" element={<AddProducts />}/>
    //                         <Route path="products" element={< />}/>
    //                     </Route>
            
    //                 </Routes>
    //             </BrowserRouter>
    //         </>
    //     )
    // }  
    const BrowserRoutes = createBrowserRouter([
        {
            path:"/",
            element:<Layout />,
            children:[
                {
                    path:"/",
                    element:<Home />
                },
                {
                    path:"contact-us",
                    element:<Contact />
                },
                {
                    path:"add-products",
                    element:<AddProducts />
                },
                {
                    path:"products",
                    element:<ProductsList />
                }
            ]
        }
    ])
    return(
        <>
            {/* <BrowserRoutes/> */}
            <RouterProvider router={BrowserRoutes} />
       
        </>
    )
}