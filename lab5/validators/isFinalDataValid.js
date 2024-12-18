const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isFinalDataValid = (data) => {
    isObjectHasProps(data, [
        "finalHeader",
        "finalButton",
        "finalFooterLeft",
        "finalFooterRight",
    ]);

    const { finalButton, finalFooterLeft, finalFooterRight } = data;

    isObjectHasProps(finalButton, [ "href", "text" ]);
    isObjectHasProps(finalFooterLeft, ["image", "address", "rights"]);
    isObjectHasProps(finalFooterLeft.image, ["src", "alt"]);

    isArrayHasLength(finalFooterRight);

    finalFooterRight.forEach((footerSection) => {
        isObjectHasProps(footerSection, ["title", "items"]);
        isArrayHasLength(footerSection.items);

        if (footerSection.title === "Контакты") {
            footerSection.items.forEach(item => isObjectHasProps(item, ["text"]));
        } else {
            footerSection.items.forEach(item => isObjectHasProps(item, ["href", "text"]));
        }
    });
};

module.exports = isFinalDataValid;