import { Provider } from "react-redux";
import appStore from "../../utils/appStore.js"
import Header from "../Header.js";
import { fireEvent, screen , render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("Should render header component with login button" , () =>
{
    render(
        <BrowserRouter>
            <Provider store = {appStore}>

                <Header />;

            </Provider>        
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();

    
})


it("Should render header component with cart item" , () =>
{
    render(
        <BrowserRouter>
            <Provider store = {appStore}>

                <Header />;

            </Provider>        
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();

    
})


it("Should change login button to logout on click" , () =>
{
    render(
        <BrowserRouter>
            <Provider store = {appStore}>

                <Header />;

            </Provider>        
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();

    
})