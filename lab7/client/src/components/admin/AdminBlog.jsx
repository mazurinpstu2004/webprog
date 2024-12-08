import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
    useBlogContext,
    usePostBlogContext,
} from "../../contexts/admin/BlogContext"

const AdminMainBlog = ({image, date, title, link}) => {
    const [srcData, setSrcData] = useState(image.src);
    const [altData, setAltData] = useState(image.alt);
    const [dateData, setDateData] = useState(date);
    const [titleData, setTitleData] = useState(title);
    const [hrefData, setHrefData] = useState(link.href);
    const [textData, setTextData] = useState(link.text);
    let blogContext = useBlogContext();

    const handleSrcData = (e) => {
        setSrcData(e.target.value);
        blogContext.src = e.target.value;
    };

    const handleAltData = (e) => {
        setAltData(e.target.value);
        blogContext.alt = e.target.value;
    };

    const handleDateData = (e) => {
        setDateData(e.target.value);
        blogContext.date = e.target.value;
    };

    const handleTitleData = (e) => {
        setTitleData(e.target.value);
        blogContext.title = e.target.value;
    };

    const handleHrefData = (e) => {
        setHrefData(e.target.value);
        blogContext.href = e.target.value;
    };

    const handleTextData = (e) => {
        setTextData(e.target.value);
        blogContext.text = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Главный блог:</h3>
            <div className="block__item">
                <label>Адрес картинки:</label>
                <input 
                    type="text"
                    className="item__long_input"
                    value={srcData}
                    onChange={handleSrcData}
                />
            </div>
            <div className="block__item">
                <label>Описание:</label>
                <input 
                    type="text"
                    className="item__long_input"
                    value={altData}
                    onChange={handleAltData}
                />
            </div>
            <div className="block__item">
                <label>Дата</label>
                <input 
                    type="text"
                    className="item__long_input"
                    value={dateData}
                    onChange={handleDateData}
                />
            </div>
            <div className="block__item">
                <label>Заголовок</label>
                <input 
                    type="text"
                    className="item__long_input"
                    value={titleData}
                    onChange={handleTitleData}
                />
            </div>
            <div className="block__item">
                <label>Ссылка</label>
                <input 
                    type="text"
                    className="item__long_input"
                    value={hrefData}
                    onChange={handleHrefData}
                />
            </div>
            <div className="block__item">
                <label>Текст ссылки</label>
                <input 
                    type="text"
                    className="item__long_input"
                    value={textData}
                    onChange={handleTextData}
                />
            </div>
        </div>
    )
};

const AdminSingleSecondaryBlog = ({image, date, title, link}) => {
    const [srcData, setSrcData] = useState(image.src);
    const [altData, setAltData] = useState(image.alt);
    const [dateData, setDateData] = useState(date);
    const [titleData, setTitleData] = useState(title);
    const [hrefData, setHrefData] = useState(link.href);
    const [textData, setTextData] = useState(link.text);
    let blogContext = useBlogContext();

    const handleSrcData = (e) => {
        setSrcData(e.target.value);
        blogContext.src = e.target.value;
    };

    const handleAltData = (e) => {
        setAltData(e.target.value);
        blogContext.alt = e.target.value;
    };

    const handleDateData = (e) => {
        setDateData(e.target.value);
        blogContext.date = e.target.value;
    };

    const handleTitleData = (e) => {
        setTitleData(e.target.value);
        blogContext.title = e.target.value;
    };

    const handleHrefData = (e) => {
        setHrefData(e.target.value);
        blogContext.href = e.target.value;
    };

    const handleTextData = (e) => {
        setTextData(e.target.value);
        blogContext.text = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <div className="block__item">
                <label>Адрес картинки:</label>
                <input 
                    type="text"
                    className="item__long_input"
                    value={srcData}
                    onChange={handleSrcData}
                />
            </div>
            <div className="block__item">
                <label>Описание:</label>
                <input 
                    type="text"
                    className="item__long_input"
                    value={altData}
                    onChange={handleAltData}
                />
            </div>
            <div className="block__item">
                <label>Дата:</label>
                <input 
                    type="text"
                    className="item__long_input"
                    value={dateData}
                    onChange={handleDateData}
                />
            </div>
            <div className="block__item">
                <label>Заголовок:</label>
                <input 
                    type="text"
                    className="item__long_input"
                    value={titleData}
                    onChange={handleTitleData}
                />
            </div>
            <div className="block__item">
                <label>Ссылка:</label>
                <input 
                    type="text"
                    className="item__long_input"
                    value={hrefData}
                    onChange={handleHrefData}
                />
            </div>
            <div className="block__item">
                <label>Текст ссылки:</label>
                <input 
                    type="text"
                    className="item__long_input"
                    value={textData}
                    onChange={handleTextData}
                />
            </div>
        </div>
    )
};

const AdminSecondaryBlog = ({ blog }) => {
    return (
        <div className="admin_container_block">
            <h3>Вторичные блоги:</h3>
            {blog.map((item, index) => (
                    <AdminSingleSecondaryBlog key={index} image={item.image} 
                    date={item.date} title={item.title} link={item.link} 
                />
            ))}
        </div>
    )
}

const AdminBlog = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "blog",
        options: {
            method: "GET",
        },
    });

    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

    const postData = usePostBlogContext();

    const handlePostData = async () => {
        try {
            setIsPostDataLoading(true);
            const { isPostDataError, postDataError } = await postData();
            setIsPostDataError(isPostDataError);
            setIsPostDataError(postDataError);
        } catch (error) {
            console.log(error);
            setIsPostDataError(isPostDataError);
            setPostDataError(postDataError);
        }
        setIsPostDataLoading(false);
    };

    if (isLoading) return <Preloader />;
    if (isError) return <div>{JSON.stringify(error)}</div>;
    if (!data) return <Preloader />;

    return (
        <div className="admin_container admin_Blog">
            <h2>Блог-секция</h2>
            <AdminMainBlog image={data.mainBlogPicture} date={data.mainBlogDate}
            title={data.mainBlogTitle} link={data.mainBlogLink}/>
            <AdminSecondaryBlog blog={data.secondaryBlog} />
            <button className="btn primary-btn" onClick={handlePostData}>
                {isPostDataLoading && <Preloader />} Сохранить
            </button>
            {isError && <div className="error">{JSON.stringify(error)}</div>}
            {isPostDataError && (
                <div className="error">{JSON.stringify(postDataError)}</div>
            )}
        </div>
    );
};

export default AdminBlog;