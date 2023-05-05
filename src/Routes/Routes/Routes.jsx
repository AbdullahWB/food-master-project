import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../../Pages/Home/Home/Home";
import Details from "../../Pages/Details/Details";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Terms from "../../Pages/Terms/Terms";
import Blog from "../../Pages/Blog/Blog";
import About from "../../Pages/About/About";
import Favorite from "../../Pages/Home/Favorite/Favorite";
import Recipes from "../../Pages/Recipes/Recipes";
import Error from "../../Pages/error/Error";
import FoodDetails from "../../Pages/FoodDetails/FoodDetails";
import Booking from "../../Pages/Booking/Booking";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <PrivetRoute><Details></Details></PrivetRoute>,
                loader: ({params})=> fetch(`https://food-lover-server-abdullahwb.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '/blog',
                element: <PrivetRoute><Blog></Blog></PrivetRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/favorite',
                element: <PrivetRoute><Favorite></Favorite></PrivetRoute>
            },
            {
                path: '/recipes',
                element: <PrivetRoute><Recipes></Recipes></PrivetRoute>
            },
            {
                path: '/foodDetails/:id',
                element: <PrivetRoute><FoodDetails></FoodDetails></PrivetRoute>,
                loader: ({params})=> fetch(`https://food-lover-server-abdullahwb.vercel.app/categories/category/${params.id}`)
            },
            {
                path: '/booking',
                element: <PrivetRoute><Booking></Booking></PrivetRoute>
            }
        ]
    }
])

export default router;