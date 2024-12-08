const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isFinalDataValid = (data) => {
    isObjectHasProps(data, [
        "finalHeader",
        "finalButton",
        "finalFooterLeftImage",
        "finalFooterLeftAddress",
        "finalFooterLeftRights",
        "finalFooterRight",
    ]);

    const { finalButton, finalFooterLeftImage, finalFooterRight } = data;

    isObjectHasProps(finalButton, [ "href", "text" ]);

    isObjectHasProps(finalFooterLeftImage, [ "src", "alt" ]);

    isArrayHasLength(finalFooterRight.link);
    isArrayHasLength(finalFooterRight.company);
    isArrayHasLength(finalFooterRight.contacts);

    finalFooterRight.link.forEach((item) => isObjectHasProps(item, [ "href", "text" ]));
    finalFooterRight.company.forEach((item) => isObjectHasProps(item, [ "href", "text" ]));
    finalFooterRight.contacts.forEach((item) => isObjectHasProps(item, [ "text" ]));

}

module.exports = isFinalDataValid