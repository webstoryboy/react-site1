import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "./components/Image";
import ImgText from "./components/ImgText";
import Slider from "./components/Slider";
import Text from "./components/Text";

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Contents>
        <Slider fonts="nexon" />
        <Image skill={["section", "nexon"]} />
        <ImgText skill={["section", "nexon", "gray"]} />
        <Card skill={["section", "nexon"]} />
        <Banner skill={["section", "gmarket"]} />
        <Text skill={["section", "nexon"]} />
      </Contents>
      <Footer skill={["section", "nexon", "gray"]} />
    </>
  );
}

export default App;
