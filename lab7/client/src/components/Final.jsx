import useData from "../hooks/useData";
import finalData from "../mockData/finalData";

import Preloader from "./Preloader";

export const FinalHeader = ({ header }) => {
    return (
        <h1 className="final_header">{header}</h1>
    );
};

export const FinalButton = ({button: { href, text }}) => {
    return (
        <a href={href}>
            <button className="request_access_button">
                {text}
            </button>
        </a>
    );
};

export const FooterLeft = ({ item }) => {
    const {image: { src, alt }, address, rights} = item

    return (
        <>
            <img src={src} alt={alt} />
            <p className="some_inf">{address}</p>
            <p className="some_inf">{rights}</p>
        </>
    );
};
export const FooterRight = ({ item }) => {
    const { link, company, contacts } = item

    return (
        <>
            <div className="footer_inf">
                <h3>Ссылки</h3>
                {link.map((item, index) => (<a key={index} href={item.href} className="footer_link">{item.text}</a>))}
            </div>
            <div className="footer_inf">
                <h3>Компания</h3>
                {company.map((item, index) => (<a key={index} href={item.href} className="footer_link">{item.text}</a>))}
            </div>
            <div className="footer_inf">
                <h3>Контакты</h3>
                {contacts.map((item, index) => (<p key={index} className="footer_inf">{item.text}</p>))}
            </div>
        </>
    );
};

export const Final = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "final",
        options: {
            method: "GET",
        },
    });

    if (isError) {
        console.log("error");
        console.log(error);
    }

    if (isLoading) return <Preloader />;
    const renderedData = data || finalData;
    const {finalHeader, finalButton, finalFooterLeftImage, finalFooterLeftAddress, finalFooterLeftRights, finalFooterRight } = renderedData;

    return (
        <>
            <FinalHeader header={finalHeader} />
            <FinalButton button={finalButton} />
            <div className="footer">
                <div className="footer_left">
                    <FooterLeft item={{
                        image: finalFooterLeftImage,
                        address: finalFooterLeftAddress,
                        rights: finalFooterLeftRights
                    }} />
                </div>
                <div className="footer_right">
                    <FooterRight item={finalFooterRight} />
                </div>
            </div>
        </>
    );
};

export default Final;