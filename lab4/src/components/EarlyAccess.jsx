import earlyAccessData from "../mockData/earlyAccessData";

export const EarlyAccessPicture = ({ earlyAccessPicture: {src, alt} }) => (
    <img src={src} alt={alt} />
);

export const EarlyAccessRightContainer = ({ item }) => {
    const { req, title, description, link: {href, text} } = item;

    return (
        <>
            <p className="request">{req}</p>
            <h2>{title}</h2>
            <p className="some_text">{description}</p>
            <a href={href}>{text}</a>
        </>
    )
}


export const EarlyAccess = () => {
    const { earlyAccessPicture, earlyAccessRequest, earlyAccessHeader, earlyAccessDescription, earlyAccessLink } = earlyAccessData;

    return (
        <>
            <div className="left_early_access">
                <EarlyAccessPicture earlyAccessPicture={earlyAccessPicture} />
            </div>
            <div className ="right_early_access">
                <EarlyAccessRightContainer item={{
                    req: earlyAccessRequest,
                    title: earlyAccessHeader,
                    description: earlyAccessDescription,
                    link: earlyAccessLink,
                }} />
            </div>
        </>
    )
};

export default EarlyAccess;