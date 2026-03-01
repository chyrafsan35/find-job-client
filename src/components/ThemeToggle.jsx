const ThemeToggle = ({theme}) => {

    const setTheme = () => {
        document.querySelector('body').setAttribute('data-theme', theme);
    }

    return (
        <>
            <div onClick={setTheme} className="theme-opt" id={`theme-${theme}`}></div>
        </>
    );
};

/**
 * const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
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
    );
};
 */

export default ThemeToggle;