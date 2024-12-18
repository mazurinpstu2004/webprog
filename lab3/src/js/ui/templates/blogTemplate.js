export const createBlogHeaderTemplate = (text) => {
    return `
        <h1>
            ${text}
        </h1>
    `;
};

export const createMainBlogLinkTemplate = ({ href, text }) => {
    return `
        <a href="${href}" class="article_link">
            ${text}
        </a>
    `;
};

export const createMainBlogTemplate = ({
    src, date, title,
    link: { href, text }
}) => {
    return `
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
    `
}

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
    mainBlog,
    secondaryBlog,
}) => {
    const blogHeaderTemplate = createBlogHeaderTemplate(blogHeader);
    const mainBlogTemplate = createMainBlogTemplate(mainBlog);
    const secondaryBlogTemplate = secondaryBlog.map(createSecondaryBlogTemplate).join("");

    const resultTemplate = `
        ${blogHeaderTemplate}
        <div class="blog_container">
            <div class="main_blog">
                ${mainBlogTemplate}
            </div>
            <div class="secondary_blog">
                ${secondaryBlogTemplate}
            </div>
        </div>
    `;
    return resultTemplate;
};

