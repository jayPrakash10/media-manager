import { createContext } from "react"

export const themes = {
    light : {
        theme_type : "light",
        text_color : "text-dark",
        bg_color : "bg-light",
        border_color : "border-dark",
        toggle_bg_color : "bg-primary",
    },
    dark : {
        theme_type : "dark",
        text_color : "text-light",
        bg_color : "bg-dark",
        border_color : "border-light",
        toggle_bg_color : "bg-light",
    }
}

export const ThemeContext = createContext(themes.light);