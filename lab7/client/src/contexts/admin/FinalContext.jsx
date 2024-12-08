import { createContext, useContext, useRef } from "react";
import finalData from "../../mockData/finalData";

const FinalContext = createContext();
const PostFinalContext = createContext();

const FinalContextProvider = ({ children }) => {
    const data = useRef(finalData);

    return (
        <FinalContext.Provider value={data.current}>
            {children}
        </FinalContext.Provider>
    );
};

const useFinalContext = () => useContext(FinalContext);
const usePostFinalContext = () => useContext(PostFinalContext);

export { useFinalContext, usePostFinalContext };
export default FinalContextProvider;