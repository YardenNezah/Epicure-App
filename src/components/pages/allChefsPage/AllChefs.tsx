import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import ChefsGrid from "./ChefsGrid";

const AllChefs = () => {
  return (
    <div className="all-chefs-page">
      <Header />
      <h2>Chefs</h2>  
       <ChefsGrid /> 
      <Footer />
    </div>
  );
};

export default AllChefs;
