import { useEffect, useState } from "react";
import { GoMoon } from "react-icons/go";
import { MdOutlineWbSunny } from "react-icons/md";

const ThemeToggle = () => {

    const [theme, setTheme] = useState(()=>{
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        document.querySelector('body').setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme)
    }, [theme]);

    return (
        <>
            <label className="swap swap-rotate cursor-pointer">
                <input
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={(e) =>
                        setTheme(e.target.checked ? "dark" : "light")
                    }
                />

                <MdOutlineWbSunny size={25} className="swap-off" />

                <GoMoon size={25} className="swap-on" />

            </label>
        </>
    );
};

export default ThemeToggle;