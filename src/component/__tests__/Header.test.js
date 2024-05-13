import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
test("checkHeaderComp", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //   const loginButton = screen.getByRole('button',{name:'Login'});

  const loginButton = screen.getByText('Login');

//   const cartItems = screen.getByText(/Cart/);
  expect(loginButton).toBeInTheDocument();
});



test('is cart there with items',()=>{
    render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
    )
  const cartItems = screen.getByText("Cart-(0)");
  expect(cartItems).toBeInTheDocument();
    })
test('is cart there',()=>{
    render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
    )
    const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
    })
    it('if click login it should logout',()=>{
        render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
        )
        const loginButton = screen.getByRole("button", {name: "Login"});
     fireEvent.click(loginButton);
     const logoutButton= screen.getByRole("button", {name: "Logout"});
     expect(logoutButton).toBeInTheDocument();


        })