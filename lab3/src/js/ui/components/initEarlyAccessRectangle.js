import earlyAccessRectangleData from "../../mockData/earlyAccessRectangleData.js";
import { earlyAccessRectangleTemplate } from "../templates/earlyAccessRectangleTemplate.js";

const initEarlyAccessRectangle = (earlyAccessRectangleNode) => {
    earlyAccessRectangleNode.insertAdjacentHTML("beforeend", earlyAccessRectangleTemplate(earlyAccessRectangleData))
};

export default initEarlyAccessRectangle;