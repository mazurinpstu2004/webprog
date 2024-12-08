import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initEarlyAccess from "../components/initEarlyAccess.js";
import initEarlyAccessRectangle from "../components/initEarlyAccessRectangle.js";
import initBlog from "../components/initBlog.js";
import initFinal from "../components/finalInit.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section early_access_section"></section>
    <div class="early_access_rectangle"></div>
    <section class="section blog_section"></section>
    <section class="section final_section"></section>
    <p class="copyright">© 2023 GPT-3. Все права защищены</p>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);

  const earlyAccessNode = rootNode.querySelector(".early_access_section")
  initEarlyAccess(earlyAccessNode)

  const earlyAccessRectangleNode = rootNode.querySelector(".early_access_rectangle")
  initEarlyAccessRectangle(earlyAccessRectangleNode)

  const blogNode = rootNode.querySelector(".blog_section")
  initBlog(blogNode)

  const finalNode = rootNode.querySelector(".final_section")
  initFinal(finalNode)
};

export default homePage;
