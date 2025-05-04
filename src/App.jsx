import { createBrowserRouter,Link,RouterProvider,} from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Api from "./components/Api";

const router =createBrowserRouter([
  {
    path: "/",
    element:(
      <>
      <Header />
      <Api/>
      <Home />
      </>
    ),
  },
  {
    path: "/about",
    element:(
      <>
      <Header />
      <About />
      </>
    ),
  },
  {
    path: "/contact",
    element:(
      <>
      <Header />
      
      <Contact />
      </>
    ),
  },
]);

function App() {
 
  return (
    <>
     <RouterProvider
      router={router} />
     
    </>
  );
}

export default App;
