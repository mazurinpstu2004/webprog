import { createContext, useContext, useRef } from "react";
import earlyAccessRectangleData from "../../mockData/earlyAccessRectangleData";

const EarlyAccessRectangleContext = createContext();
const PostEarlyAccessRectangleContext = createContext();

const EarlyAccessRectangleContextProvider = ({ children }) => {
    const data = useRef(earlyAccessRectangleData);

    return (
        <EarlyAccessRectangleContext.Provider value={data.current}>
            {children}
        </EarlyAccessRectangleContext.Provider>
    );
};

const useEarlyAccessRectangleContext = () => useContext(EarlyAccessRectangleContext);
const usePostEarlyAccessRectangleContext = () => useContext(PostEarlyAccessRectangleContext);

export { useEarlyAccessRectangleContext, usePostEarlyAccessRectangleContext };
export default EarlyAccessRectangleContextProvider;