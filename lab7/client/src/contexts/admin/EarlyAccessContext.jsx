import { createContext, useContext, useRef } from "react";
import earlyAccessData from "../../mockData/earlyAccessData"

const EarlyAccessContext = createContext();
const PostEarlyAccessContext = createContext();

const EarlyAccessContextProvider = ({ children }) => {
    const data = useRef(earlyAccessData);

    return (
        <EarlyAccessContext.Provider value={data.current}>
            {children}
        </EarlyAccessContext.Provider>
    );
};

const useEarlyAccessContext = () => useContext(EarlyAccessContext);
const usePostEarlyAccessContext = () => useContext(PostEarlyAccessContext);

export { useEarlyAccessContext, usePostEarlyAccessContext };
export default EarlyAccessContextProvider;