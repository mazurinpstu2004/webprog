const { isObjectHasProps } = require("./utils/validators");

const isEarlyAccessRectangleDataValid = (data) => {
    isObjectHasProps(data, [
        "earlyAccessRectangleLowtext",
        "earlyAccessRectangleMainText",
        "earlyAccessRectangleButton",
    ]);

    const { earlyAccessRectangleButton } = data;

    isObjectHasProps(earlyAccessRectangleButton, [ "href", "text" ]);
}

module.exports = isEarlyAccessRectangleDataValid;