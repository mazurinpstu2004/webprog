import blogData from "../mockData/blogData";

export const BlogHeader = ({ header }) => {
    return (
        <h1>{header}</h1>
    );
};

export const MainBlog = ({ item }) => {
    const { image: { src, alt }, date, title, link: { href, text } } = item;

    return (
        <>
            <img src={src} alt={alt} />
            <div id="rectangle">
                <div className="article_inf">
                    <p className="date_text">{date}</p>
                    <h3 className="article_header">{title}</h3>
                    <a href={href} className="article_link">{text}</a>
                </div>
            </div>
        </>
    );
};

export const SecondaryBlog = ({ item }) => {
    const { image: { src, alt }, date, title, link: { href, text } } = item;

    return (
        <div class="blog">
            <img src={src} alt={alt} />
            <div id="rectangle">
                <div className="article_inf">
                    <p className="date_text">{date}</p>
                    <h3 className="article_header">{title}</h3>
                    <a href={href} className="article_link">{text}</a>
                </div>
            </div>
        </div>
    );
};

export const Blog = () => {
    const { blogHeader, mainBlogPicture, mainBlogDate, mainBlogTitle, mainBlogLink, secondaryBlog } = blogData;

    return (
        <>
            <BlogHeader header={blogHeader} />
            <div className="blog_container">
                <div className="main_blog">
                    <MainBlog item={{
                        image: mainBlogPicture,
                        date: mainBlogDate,
                        title: mainBlogTitle,
                        link: mainBlogLink
                    }} />
                </div>
                <div className="secondary_blog">
                    {secondaryBlog.map((item, index) => (
                        <SecondaryBlog key={index} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;