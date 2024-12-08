import earlyAccessRectangleData from "../mockData/earlyAccessRectangleData";

export const EarlyAccessRectangleText = ({ item }) => {
    const {lowText, mainText} = item

    return (
        <>
            <p className="low_text">{lowText}</p>
            <p className="main_text">{mainText}</p>
        </>
    );
};

export const EarlyAccessRectangleButton = ({button: { href, text }}) => {
    return (
        <a href={href}>
            <button className="start_button">
                {text}
            </button>
        </a>
    );
};

export const EarlyAccessRectangle = () => {
    const { earlyAccessRectangleLowtext, earlyAccessRectangleMainText, earlyAccessRectangleButton } = earlyAccessRectangleData;

    return (
        <>
            <div id="rectangle">
                <div className="earn_access_text">
                    <EarlyAccessRectangleText item={{
                        lowText: earlyAccessRectangleLowtext,
                        mainText: earlyAccessRectangleMainText
                    }} />
                </div>
                <EarlyAccessRectangleButton button={earlyAccessRectangleButton}/>
            </div>
        </>
    );
};

export default EarlyAccessRectangle;

