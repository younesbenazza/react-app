import Header from "./components/Layout/Header";
import Menu from "./components/Layout/Menu";
import Footer from "./components/Layout/Footer";
import Members from "./pages/Members";
import Archive from "./pages/Archive";
import Books from "./pages/Books";
import Main from "./pages/Main";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";

function App() {
  const Layout = () => {
    return (
      <div className="h-screen">
        <div className="flex flex-row min-h-full w-screen">
          <div className="flex flex-col flex-grow">
            <div className="bg-neutral-50 h-10">
              <Header />
            </div>
            <div className="bg-neutral-50 flex-grow">
              <Outlet />
            </div>
            <div className="bg-neutral-50">
              <Footer />
            </div>
          </div>
          <div className="border-x border-s-neutral-300">
            <Menu />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "books",
          element: <Books />,
        },
        {
          path: "archive",
          element: <Archive />,
        },
        {
          path: "members",
          element: <Members />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
