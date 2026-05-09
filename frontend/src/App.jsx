import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import NewArrivals from "./components/Sections/NewArrivals";
import "react-multi-carousel/lib/styles.css";
import Category from "./components/Sections/Categories/Category";
import content from "./data/content.json";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <NewArrivals />
      {content?.pages?.shop?.sections?.map((item, index) => (
        <Category key={item?.title + index} {...item} />
      ))}
      <Footer content={content.footer} />
    </>
  );
}

export default App;
