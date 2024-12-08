import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import EarlyAccess from "../components/EarlyAccess";
import EarlyAccessRectangle from "../components/EarlyAccessRectangle";
import Blog from "../components/Blog";
import Final from "../components/Final";

const Home = ({ isEditable }) => {
  return (
    <>
      <section
        className="section header"
        id="header"
        // contentEditable={isEditable}
      >
        <Header />
      </section>
      <section className="section hero_section" id="hero">
        <Hero />
      </section>
      <section className="section brands_section" id="brands">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section" id="what-is">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here" id="future">
        <FutureHere />
      </section>
      <section className="section early_access_section" id="early-access">
        <EarlyAccess />
      </section>
      <div className="early_access_rectangle">
        <EarlyAccessRectangle />
      </div>
      <section className="section blog_section" id="blog">
        <Blog />
      </section>
      <section className="section final_section" id="final">
        <Final />
      </section>
    </>
  );
};

export default Home;
