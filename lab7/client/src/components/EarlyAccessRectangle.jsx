import useData from "../hooks/useData";
import earlyAccessRectangleData from "../mockData/earlyAccessRectangleData";

import Preloader from "./Preloader";

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
    const { isLoading, isError, error, data } = useData({
        endpoint: "early-access-rectangle",
        options: {
            method: "GET",
        },
    });

    if (isError) {
        console.log("error");
        console.log(error);
    };

    if (isLoading) return <Preloader />;
    const renderedData = data || earlyAccessRectangleData;
    const { earlyAccessRectangleLowtext, earlyAccessRectangleMainText, earlyAccessRectangleButton } = renderedData;

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

