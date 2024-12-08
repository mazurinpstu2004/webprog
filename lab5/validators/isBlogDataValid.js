const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isBlogDataValid = (data) => {
    isObjectHasProps(data, [
        "blogHeader",
        "mainBlogPicture",
        "mainBlogDate",
        "mainBlogTitle",
        "secondaryBlog",
    ]);

    const { mainBlogPicture, mainBlogLink, secondaryBlog } = data;

    isObjectHasProps(mainBlogPicture, [ "src", "alt" ]);

    isObjectHasProps(mainBlogLink, [ "href", "text" ]);

    isArrayHasLength(secondaryBlog);

    secondaryBlog.forEach((item) => {
        isObjectHasProps(item, ["image", "date", "title", "link"]);
        isObjectHasProps(item.image, [ "src", "alt" ]);
        isObjectHasProps(item.link, [ "href", "text" ]);
    })
};

module.exports = isBlogDataValid;