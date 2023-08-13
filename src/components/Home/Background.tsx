import { BackgroundProps } from "../interfaces";

const Background: React.FC<BackgroundProps> = ({ handleScroll, children }) => {
    return (
        <div
            className="relative overflow-y-scroll will-change-scroll h-[calc(100vh-20px)] p-0 pb-0 "
            onScroll={handleScroll}
        >
            {children}
        </div >
    );
};

export default Background;