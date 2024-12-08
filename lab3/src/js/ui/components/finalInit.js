import finalData from "../../mockData/finalData.js";
import { finalTemplate } from "../templates/finalTemplate.js";

const initFinal = (finalNode) => {
    finalNode.insertAdjacentHTML("beforeend", finalTemplate(finalData));
};

export default initFinal;