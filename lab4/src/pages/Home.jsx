import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import EarlyAccess from "../components/EarlyAccess";
import EarlyAccessRectangle from "../components/EarlyAccessRectangle";
import Blog from "../components/Blog";
import Final from "../components/Final";

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section early_access_section">
        <EarlyAccess />
      </section>
      <div className="early_access_rectangle">
        <EarlyAccessRectangle />
      </div>
      <section className="section blog_section">
        <Blog />
      </section>
      <section className="section final_section">
        <Final />
      </section>
      <p class="copyright">© 2023 GPT-3. Все права защищены</p>
    </>
  );
};

export default Home;
