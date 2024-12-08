import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
    useEarlyAccessRectangleContext,
    usePostEarlyAccessRectangleContext,
} from "../../contexts/admin/EarlyAccessRectangleContext";

const AdminEarlyAccessRectangleText = ({ lowText, mainText }) => {
    const [lowTextData, setLowTextData] = useState(lowText);
    const [mainTextData, setMainTextData] = useState(mainText);
    let earlyAccessRectangleContext = useEarlyAccessRectangleContext();

    const handleLowTextData = (e) => {
        setLowTextData(e.target.value);
        earlyAccessRectangleContext.lowText = e.target.value;
    };

    const handleMainText = (e) => {
        setMainTextData(e.target.value);
        earlyAccessRectangleContext.mainText = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Текст:</h3>
            <div className="block__item">
                <label>Текст поменьше:</label>
                <input 
                    type="text"
                    className="item__long_input"
                    value={lowTextData}
                    onChange={handleLowTextData}
                />
            </div>
            <div className="bloc__item">
                <label>Текст побольше:</label>
                <input 
                    type="text"
                    className="item__long_input"
                    value={mainTextData}
                    onChange={handleMainText}
                />
            </div>
        </div>
    );
};

const AdminEarlyAccessRectangleButton = ({ button }) => {
    const [hrefData, setHrefData] = useState(button.href);
    const [textData, setTextData] = useState(button.text);
    let earlyAccessRectangleContext = useEarlyAccessRectangleContext();

    const handleHrefData = (e) => {
        setHrefData(e.target.value);
        earlyAccessRectangleContext.href = e.target.value;
    };

    const handleTextData = (e) => {
        setTextData(e.targer.value);
        earlyAccessRectangleContext.text = e.target.value;
    };

    return (
        <div className="block__card">
            <div className="bloc__item">
                <label>Наименование кнопки:</label>
                <input 
                type="text"
                value={textData}
                onChange={handleTextData}
                />
            </div>
            <div className="bloc__item">
                <label>Ссылка:</label>
                <input 
                type="text"
                value={hrefData}
                onChange={handleHrefData}
                />
            </div>
        </div>
    );
}

const AdminEarlyAccessRectangle = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "early-access-rectangle",
        options: {
            method: "GET",
        },
    });

    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

    const postData = usePostEarlyAccessRectangleContext();

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
        <div className="admin_container admin_Early_Access_Rectangle">
            <h2>Ранний доступ 2</h2>
            <AdminEarlyAccessRectangleText lowText={data.earlyAccessRectangleLowText} 
            mainText={data.earlyAccessRectangleMainText} />
            <AdminEarlyAccessRectangleButton button={data.earlyAccessRectangleButton}/>
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

export default AdminEarlyAccessRectangle;