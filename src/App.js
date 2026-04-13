import { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";





const Grocery = lazy(() => import("./components/Grocery.js"));

const AppLayout = () => {

const [userName , setUserName] = useState();

useEffect(()=> {
    const data = {
        name: "Ankush"
    };
    setUserName(data.name);
}, []); 

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
        </Provider>
        
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },

            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Grocery />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }

        ],

        errorElement: <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);