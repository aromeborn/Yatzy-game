import React from "react";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";




function App({children}) {
  return (
  <div >
    <Header />
    {children}
    <Footer />


  </div>
  );
}


export default App;
