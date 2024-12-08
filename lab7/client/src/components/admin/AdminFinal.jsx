import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
    useFinalContext,
    usePostFinalContext,
} from "../../contexts/admin/FinalContext"

const AdminFinalHeader = ({ header }) => {
    const [headerData, setHeaderData] = useState(header);
    let finalContext = useFinalContext();

    const handleHeaderData = (e) => {
        setHeaderData(e.target.value);
        finalContext.header = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Заголовок:</h3>
            <div className="block__item">
                <label>Текст заголовка:</label>
                <input 
                    type="text"
                    className="item__long_input"
                    value={headerData}
                    onChange={handleHeaderData}
                />
            </div>
        </div>
    );
};

const AdminFinalButton = ({ button }) => {
    const [hrefData, setHrefData] = useState(button.href);
    const [textData, setTextData] = useState(button.text);
    let earlyAccessRectangleContext = useFinalContext();

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
            <h3>Кнопка:</h3>
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
};

const AdminFinalFooterLeft = ({ image, address, rights }) => {
    const [srcData, setSrcData] = useState(image.src);
    const [altData, setAltData] = useState(image.alt);
    const [addressData, setAddressData] = useState(address);
    const [rightsData, setRightsData] = useState(rights);
    let finalContext = useFinalContext();

    const handleSrcData = (e) => {
        setSrcData(e.target.value);
        finalContext.src = e.target.value;
    };

    const handleAltData = (e) => {
        setAltData(e.target.value);
        finalContext.alt = e.target.value;
    };

    const handleAddressData = (e) => {
        setAddressData(e.target.value);
        finalContext.address = e.target.value;
    };

    const handleRightsData = (e) => {
        setRightsData(e.target.value);
        finalContext.rights = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Левый футер:</h3>
            <div className="block_item">
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
                <label>Адрес:</label>
                <input 
                    type="text"
                    className="item__long_input"
                    value={addressData}
                    onChange={handleAddressData}
                />
            </div>
            <div className="block__item">
                <label>Права:</label>
                <input 
                    type="text"
                    className="item__long_input"
                    value={rightsData}
                    onChange={handleRightsData}
                />
            </div>
        </div>
    );
};

const AdminFinalFooterRight = ({ link, company, contacts }) => {
    const [hrefLinkData, setHrefLinkData] = useState(link.map(item => item.href));
    const [textLinkData, setTextLinkData] = useState(link.map(item => item.text));
    const [hrefCompanyData, setHrefCompanyData] = useState(company.map(item => item.href));
    const [textCompanyData, setTextCompanyData] = useState(company.map(item => item.text));
    const [textContactsData, setTextContactsData] = useState(contacts.map(item => item.text));
    let finalContext = useFinalContext();

    const handleHrefLinkData = (e) => {
        setHrefLinkData(e.target.value);
        finalContext.link.href = e.target.value;
    };

    const handleTextLinkData = (e) => {
        setTextLinkData(e.target.value);
        finalContext.link.text = e.target.value;
    };

    const handleHrefCompanyData = (e) => {
        setHrefCompanyData(e.target.value);
        finalContext.company.href = e.target.value;
    };

    const handleTextCompanyData = (e) => {
        setTextCompanyData(e.target.value);
        finalContext.company.text = e.target.value;
    };

    const handleTextContactsData = (e) => {
        setTextContactsData(e.target.value);
        finalContext.contacts.text = e.target.value;
    };

    return (
        <div className="admin_container_block">
            <h3>Правый футер:</h3>
            
            <h3>Ссылки:</h3>
            {link.map((item, index) => (
                <div className="block__item" key={index}>
                    <label>Ссылка:</label>
                    <input
                        type="text"
                        className="item__long_input"
                        value={hrefLinkData[index]}
                        onChange={handleHrefLinkData}
                    />
                    <label>Текст ссылки:</label>
                    <input
                        type="text"
                        className="item__long_input"
                        value={textLinkData[index]}
                        onChange={handleTextLinkData}
                    />
                </div>
            ))}
    
            <h3>Компания:</h3>
            {company.map((item, index) => (
                <div className="block__item" key={index}>
                    <label>Ссылка:</label>
                    <input
                        type="text"
                        className="item__long_input"
                        value={hrefCompanyData[index]}
                        onChange={handleHrefCompanyData}
                    />
                    <label>Текст ссылки:</label>
                    <input
                        type="text"
                        className="item__long_input"
                        value={textCompanyData[index]}
                        onChange={handleTextCompanyData}
                    />
                </div>
            ))}
    
            <h3>Контакты:</h3>
            {contacts.map((item, index) => (
                <div className="block__item" key={index}>
                    <label>Текст:</label>
                    <input
                        type="text"
                        className="item__long_input"
                        value={textContactsData[index]}
                        onChange={handleTextContactsData}
                    />
                </div>
            ))}
        </div>
    );
};

const AdminFinal = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "final",
        options: {
            method: "GET",
        },
    });

    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

    const postData = usePostFinalContext();

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
        <div className="admin_container admin_Final">
            <h2>Футер</h2>
            <AdminFinalHeader header={data.finalHeader} />
            <AdminFinalButton button={data.finalButton} />
            <AdminFinalFooterLeft image={data.finalFooterLeftImage} address={data.finalFooterLeftAddress}
            rights={data.finalFooterLeftRights} />
            <AdminFinalFooterRight link={data.finalFooterRight.link} company={data.finalFooterRight.company} 
            contacts={data.finalFooterRight.contacts} />
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

export default AdminFinal;