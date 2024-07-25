import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Contacts from "./Contacts";
import Projects from "./Projects";
import About from "./About";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        /> <Route
        path="/projects"
        element={
          <Layout>
            <Projects/>
          </Layout>
        }
      /> <Route
      path="/about"
      element={
        <Layout>
          <About/>
        </Layout>
      }
    />
        <Route
          path="/contacts"
          element={
            <Layout>
              <Contacts />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
