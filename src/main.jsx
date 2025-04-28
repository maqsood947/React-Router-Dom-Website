import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./screens/Home/Home.jsx";
import About from "./screens/About/About.jsx";
import Contact from "./screens/Contact/Contact.jsx";
import GitHub from "./screens/Github/GitHub.jsx"
import LogIn from "./screens/Log in/LogIn.jsx"
import Countries from "./screens/Countries/Countries.jsx";
import CountryDetail from "./screens/CountryDetail/CountryDetail.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "About",
//         element: <About />,
//       },
//       {
//         path: "Contact",
//         element:<Contact/>
//       },
//       {
//         path: "GitHub",
//         element:<GitHub/>
//       }
//     ],
//   },
// ]);


const router = createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element= {<Layout />}>
      <Route path="" element= {<Home />}/>
      <Route path="About" element= {<About />}/>
      <Route path="Contact" element= {<Contact />}/>
      <Route path="GitHub" element= {<GitHub />}/>
      <Route path="LogIn" element= {<LogIn />}/>
      <Route path="Countries" element= {<Countries />}/>
      {/* <Route path="Countries/" element= {<CountryDetail />}/> */}



  </Route>
)
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
