const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isBlogDataValid = (data) => {
    isObjectHasProps(data, [
        "blogHeader",
        "mainBlog",
        "secondaryBlog",
    ]);

    const { mainBlog, secondaryBlog } = data;

    isObjectHasProps(mainBlog, ["image", "date", "title", "link"]);
    isObjectHasProps(mainBlog.image, ["src", "alt"]);
    isObjectHasProps(mainBlog.link, ["href", "text"]);

    isArrayHasLength(secondaryBlog);

    secondaryBlog.forEach((item) => {
        isObjectHasProps(item, ["image", "date", "title", "link"]);
        isObjectHasProps(item.image, [ "src", "alt" ]);
        isObjectHasProps(item.link, [ "href", "text" ]);
    })
};

module.exports = isBlogDataValid;