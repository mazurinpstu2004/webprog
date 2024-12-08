import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
    useEarlyAccessContext,
    usePostEarlyAccessContext,
} from "../../contexts/admin/EarlyAccessContext";

const AdminEarlyAccessLeft = ({ image }) => {
    const [srcData, setSrcData] = useState(image.src);
    const [altData, setAltData] = useState(image.alt);
    let earlyAccessContext = useEarlyAccessContext();

    const handleSrcData = (e) => {
        setSrcData(e.target.value);
        earlyAccessContext.src = e.target.value;
    };

    const handleAltData = (e) => {
        setAltData(e.target.value);
        earlyAccessContext.alt = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Изображение:</h3>
            <div className="block__item">
                <label>Ссылка:</label>
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
        </div>
    );
};

const AdminEarlyAccessRight = ({ req, header, description, link }) => {
    const [reqData, setReqData] = useState(req);
    const [headerData, setHeaderData] = useState(header);
    const [descriptionData, setDescriptionData] = useState(description);
    const [linkHrefData, setLinkHref] = useState(link.href);
    const [linkTextData, setLinkText] = useState(link.text);
    let earlyAccessContext = useEarlyAccessContext();

    const handleReqData = (e) => {
        setReqData(e.target.value);
        earlyAccessContext.req = e.target.value;
    };

    const handleHeaderData = (e) => {
        setHeaderData(e.target.value);
        earlyAccessContext.header = e.target.value;
    };

    const handleDescriptionData = (e) => {
        setDescriptionData(e.target.value);
        earlyAccessContext.description = e.target.value;
    };

    const handleLinkHrefData = (e) => {
        setLinkHref(e.target.value);
        earlyAccessContext.href = e.target.value;
    };

    const handleLinkTextData = (e) => {
        setLinkText(e.target.value);
        earlyAccessContext.text = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Контент:</h3>
            <div className="block__item">
                <label>Запрос:</label>
                <input
                    type="text"
                    className="item__long_input"
                    value={reqData}
                    onChange={handleReqData}
                />
            </div>
            <div className="block__item">
                <label>Заголовок:</label>
                <input
                    type="text"
                    className="item__long_input"
                    value={headerData}
                    onChange={handleHeaderData}
                />
            </div>
            <div className="block__item">
                <label>Описание:</label>
                <input
                    type="text"
                    className="item__long_input"
                    value={descriptionData}
                    onChange={handleDescriptionData}
                />
            </div>
            <div className="block__item">
                <label>Ссылка:</label>
                <input
                    type="text"
                    className="item__long_input"
                    value={linkHrefData}
                    onChange={handleLinkHrefData}
                />
            </div>
            <div className="block__item">
                <label>Текст ссылки:</label>
                <input
                    type="text"
                    className="item__long_input"
                    value={linkTextData}
                    onChange={handleLinkTextData}
                />
            </div>
        </div>
    );
};

const AdminEarlyAccess = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "early-access",
        options: {
            method: "GET",
        },
    });

    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

    const postData = usePostEarlyAccessContext();

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
        <div className="admin_container admin_Early_Access">
            <h2>Ранний доступ 1</h2>
            <AdminEarlyAccessLeft image={data.earlyAccessPicture} />
            <AdminEarlyAccessRight req={data.earlyAccessRequest} header={data.earlyAccessHeader} 
            description={data.earlyAccessDescription} link={data.earlyAccessLink} />
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

export default AdminEarlyAccess;