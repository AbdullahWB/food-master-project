import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../../Pages/Home/Home/Home";
import Details from "../../Pages/Details/Details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Details></Details>,
                loader: ({params})=> fetch(`http://localhost:3000/chefs/${params.id}`)
            }
        ]
    }
])

export default router;