import earlyAccessData from "../../mockData/earlyAccessData.js"
import { earlyAccessTemplate } from "../templates/earlyAccessTemplate.js"

const initEarlyAccess = (earlyAccessNode) => {
    earlyAccessNode.insertAdjacentHTML("beforeend", earlyAccessTemplate(earlyAccessData));
};

export default initEarlyAccess;