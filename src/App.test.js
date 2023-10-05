import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import App from './App';
import { LocationDisplay } from "./components/LocationDisplay";
import { createMemoryHistory } from "history";
import { Router, MemoryRouter, BrowserRouter } from "react-router-dom";
import PokemonList from "./components/PokemonList";


// Normal Element
import TestElements from "./components/TestElements";


// Testing Events
import TestEvents from "./components/TestEvents";


// Testing Async
import TestAsync from "./components/TestAsync";


// Context
import CounterProvider, {
  Counter,
  CounterContext,
} from "./components/TestContext";


//React Router DOM
import TestRouter from "./components/TestRouter";

//  React-Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import TestRedux from "./components/TestRedux";
import { reducer } from "./components/reducer";
// Axios

afterEach(cleanup);

it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


it("should equal to 0", () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId("counter")).toHaveTextContent(0);
});


it("should be enabled", () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
});


it("should be disabled", () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId("button-down")).toBeDisabled();
});


it("increments counter", () => {
  const { getByTestId } = render(<TestEvents />);
  fireEvent.click(getByTestId("button-up"));
  expect(getByTestId("counter")).toHaveTextContent("1");
});


it("decrements counter", () => {
  const { getByTestId } = render(<TestEvents />);
  fireEvent.click(getByTestId("button-down"));
  expect(getByTestId("counter")).toHaveTextContent("-1");
});


it("increments counter after 0.5s", async () => {
  const { getByTestId, getByText } = render(<TestAsync />);
  fireEvent.click(getByTestId("button-up"));
  const counter = await waitFor(() => getByText("1"));
  expect(counter).toHaveTextContent("1");
});


const renderWithContext = component => {
  return {
    ...render(
      <CounterProvider value={CounterContext}>{component}</CounterProvider>,
    ),
  };
};


it("checks if initial state is equal to 0", () => {
  const { getByTestId } = renderWithContext(<Counter />);
  expect(getByTestId("counter")).toHaveTextContent(0);
});


it("increments the counter", () => {
  const { getByTestId } = renderWithContext(<Counter />);
  fireEvent.click(getByTestId("button-up"));
  expect(getByTestId("counter")).toHaveTextContent("1");
});


it("decrements the counter", () => {
  const { getByTestId } = renderWithContext(<Counter />);
  fireEvent.click(getByTestId("button-down"));
  expect(getByTestId("counter")).toHaveTextContent("-1"); 
});


describe('PokemonList Component', ()=>{
  it('should render correct name', async()=>{
    render(<PokemonList />);
    await  waitFor(()=>{
      screen.getByText('charmander')
    })
  })
})




test('rendering a component that uses useLocation', () => {
  const route = '/some-route'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[route]}>
      <LocationDisplay />
    </MemoryRouter>,
  )

  // verify location display is rendered
  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})

