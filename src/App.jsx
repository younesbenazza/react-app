import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import Footer from "./components/Layout/Footer";
import Members from "./pages/Members";
import Archive from "./pages/Archive";
import Books from "./pages/Books";
import Main from "./pages/Main";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import Statistics from "./pages/Statistics";
import Loan from "./pages/Loan";
import LibraryCard from "./pages/LibraryCard";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";

function App() {
  const [openpopup, setOpenpopup] = useState(false);
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  function toggleShow() {
    setOpenpopup(!openpopup);
  }
  const baseUrl = "http://127.0.0.1:8000/";
  useEffect(() => {
    const url = baseUrl + "books/";
    fetch(baseUrl + "books/")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.Books);
      });
    fetch(baseUrl + "students/")
      .then((response) => response.json())
      .then((data) => {
        setMembers(data.Students);
      });
  }, []);

  function AddBookFunc(newBook) {
    const url = baseUrl + "books/add/";
    console.log(localStorage.getItem("access"));
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      Authorization: "Bearer," + localStorage.getItem("access"),
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
  function AddMemberFunc(newBook) {
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
        setMembers([...members, data.student]);
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

  function Logout() {
    localStorage.clear();
    return <Navigate to="/login" />;
  }

  function RegisterAndLogout() {
    localStorage.clear();
    return <Register />;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
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
              openbook={openpopup}
            />
          ),
        },
        {
          path: "archive",
          element: <Archive />,
        },
        {
          path: "statistics",
          element: <Statistics />,
        },
        {
          path: "loan",
          element: <Loan />,
        },
        {
          path: "librarycard",
          element: <LibraryCard />,
        },
        {
          path: "members",
          element: (
            <Members
              AddMemberFunc={AddMemberFunc}
              members={members}
              toggleShow={toggleShow}
              openmember={openpopup}
            />
          ),
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <RegisterAndLogout />,
    },
    {
      path: "logout",
      element: <Logout />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
