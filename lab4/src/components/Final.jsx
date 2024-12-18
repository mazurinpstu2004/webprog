import finalData from "../mockData/finalData";

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

export const FooterLeft = ({ data }) => {
    const {image: { src, alt }, address, rights} = data

    return (
        <>
            <img src={src} alt={alt} />
            <p className="some_inf">{address}</p>
            <p className="some_inf">{rights}</p>
        </>
    );
};
export const FooterRight = ({ data }) => {
    return data.map((column) => (
        <div className="footer_inf">
            <h3>{column.title}</h3>
            {column.items.map((item) => {
                if (item.href) {
                    return (
                        <a href={item.href} className="footer_link">
                            {item.text}
                        </a>
                    );
                } else {
                    return (
                        <p className="footer_inf">{item.text}</p>
                    );
                }
            })}
        </div>
    ));
};

export const Final = () => {
    const {finalHeader, finalButton, finalFooterLeft, finalFooterRight  } = finalData;

    return (
        <>
            <FinalHeader header={finalHeader} />
            <FinalButton button={finalButton} />
            <div className="footer">
                <div className="footer_left">
                    <FooterLeft data={finalFooterLeft}/>
                </div>
                <div className="footer_right">
                    <FooterRight data={finalFooterRight}/>
                </div>
            </div>
        </>
    );
};

export default Final;