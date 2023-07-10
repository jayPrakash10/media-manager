import "./style.scss";
import { useContext } from "react";
import { ThemeContext } from "../../Utilities/Theme/themes";

const Page = ({ children }) => {
    const theme = useContext(ThemeContext);

    return (
        <div className={`page_container py-3 px-2 px-sm-5 pb-5 m-0 ${theme.bg_color} ${theme.text_color}`}>
            <div className="pt-5"></div>
            { children }
        </div>
    )
}

export default Page;