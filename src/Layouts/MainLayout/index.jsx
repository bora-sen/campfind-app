import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <main className="container mx-auto">
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default MainLayout;
