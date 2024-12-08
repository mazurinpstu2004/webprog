export const createBlogHeaderTemplate = (text) => {
    return `
        <h1>
            ${text}
        </h1>
    `;
};

export const createMainBlogPictureTemplate = (src) => {
    return `
        <img src="${src}" />
    `;
};

export const createMainBlogDateTemplate = (text) => {
    return `
        <p class="date_text">
            ${text}
        </p>
    `;
};

export const createMainBlogTitleTemplate = (text) => {
    return `
        <h3 class="article_header">
            ${text}
        </h3>
    `;
};

export const createMainBlogLinkTemplate = ({ href, text }) => {
    return `
        <a href="${href}" class="article_link">
            ${text}
        </a>
    `;
};

export const createSecondaryBlogTemplate = ({
    src, date, title,
    link: { href, text }
}) => {
    return `
        <div class="blog">
            <img src="${src}" />
            <div id="rectangle">
                <div class="article_inf">
                    <p class="date_text">
                        ${date}
                    </p>
                    <h3 class="article_header">
                        ${title}
                    </h3>
                    <a href="${href}" class="article_link">
                        ${text}
                    </a>
                </div>
            </div>
        </div>
    `;
};

export const blogTemplate = ({
    blogHeader,
    mainBlogPicture,
    mainBlogDate,
    mainBlogTitle,
    mainBlogLink,
    secondaryBlog,
}) => {
    const blogHeaderTemplate = createBlogHeaderTemplate(blogHeader);
    const mainBlogPictureTemplate = createMainBlogPictureTemplate(mainBlogPicture);
    const mainBlogDateTemplate = createMainBlogDateTemplate(mainBlogDate);
    const mainBlogTitleTemplate = createMainBlogTitleTemplate(mainBlogTitle);
    const mainBlogLinkTemplate = createMainBlogLinkTemplate(mainBlogLink);
    const secondaryBlogTemplate = secondaryBlog.map(createSecondaryBlogTemplate).join("");

    const resultTemplate = `
        ${blogHeaderTemplate}
        <div class="blog_container">
            <div class="main_blog">
                ${mainBlogPictureTemplate}
                <div id="rectangle">
                    <div class="article_inf">
                        ${mainBlogDateTemplate}
                        ${mainBlogTitleTemplate}
                        ${mainBlogLinkTemplate}
                    </div>
                </div>
            </div>
            <div class="secondary_blog">
                ${secondaryBlogTemplate}
            </div>
        </div>
    `;
    return resultTemplate;
};

