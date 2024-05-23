import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import Main from "./Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { QueryClient, QueryClientProvider } from "react-query";
import RedirectHandler from "./RedirectHandler";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "/:id",
    element: <RedirectHandler />, // instead of element i want to make a get request to this link localhost:8080/get/:id and send the user the url that will be send by the server
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
);
