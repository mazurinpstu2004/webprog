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

    finalFooterRight.forEach((column) => {
        isObjectHasProps(column, ["title", "items"]);
        isArrayHasLength(column.items);
        column.items.forEach((item) => {
            if (item.href && item.text) {
                isObjectHasProps(item, ["href", "text"]);
            } else {
                isObjectHasProps(item, ["text"]);
            }
        });
    });
};

module.exports = isFinalDataValid