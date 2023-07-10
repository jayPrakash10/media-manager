import "./style.scss";
import { useContext } from "react";
import { ThemeContext } from "../../Utilities/Theme/themes";

const TopBar = ({
    changeTheme,
}) => {
    let theme = useContext(ThemeContext);

    const setTheme = () => {
        if(theme.theme_type === "light") {
            changeTheme("dark");
        } else {
            changeTheme("light");
        }
    }

    return (
        <div className={`navbar fixed-top shadow px-3 px-sm-5 py-3 ${theme.bg_color} ${theme.text_color}`}>
            <div className="col-auto ms-auto">
                <div className={`theme_switch position-relative ${theme.border_color}`} role="button" onClick={setTheme}>
                    <div className="position-relative w-100 h-100">
                        <span className={`switch position-absolute ${theme.theme_type} ${theme.toggle_bg_color}`}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;