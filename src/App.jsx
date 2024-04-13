import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import Footer from "./components/Layout/Footer";
import Members from "./pages/Members";
import Archive from "./pages/Archive";
import Books from "./pages/Books";
import Main from "./pages/Main";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import { useState, useEffect } from "react";

function App() {
  const [openbook, setOpenbook] = useState(false);
  const [books, setBooks] = useState([]);
  function toggleShow() {
    setOpenbook(!openbook);
  }
  const baseUrl = "http://127.0.0.1:8000/";
  useEffect(() => {
    const url = baseUrl + "books/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.Books);
      });
  }, []);

  function AddBookFunc(newBook) {
    const url = baseUrl + "books/add/";
    console.log(localStorage.getItem("access"));
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      Authorization: "Bearer " + localStorage.getItem("access"),
      body: JSON.stringify(newBook),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        toggleShow();
        setBooks([...books, data.book]);
      })
      .catch((e) => {
        console.log(e);
      });
  }
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
            <Sidebar />
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
          element: (
            <Books
              AddBookFunc={AddBookFunc}
              books={books}
              toggleShow={toggleShow}
              openbook={openbook}
            />
          ),
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
