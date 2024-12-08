const { isObjectHasProps } = require("./utils/validators");

const isEarlyAccessDataValid = (data) => {
    isObjectHasProps(data, [
        "earlyAccessPicture",
        "earlyAccessRequest",
        "earlyAccessHeader",
        "earlyAccessDescription",
        "earlyAccessLink",
    ])

    const { earlyAccessPicture, earlyAccessLink } = data

    isObjectHasProps(earlyAccessPicture, [ "src", "alt" ])

    isObjectHasProps(earlyAccessLink, [ "href", "text" ])
};

module.exports = isEarlyAccessDataValid;