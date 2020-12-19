export const renderTheme = (theme) => {
    document.documentElement.classList.add("color-theme-in-transition");
    document.documentElement.setAttribute("data-theme", theme);
    window.setTimeout(() => {
          document.documentElement.classList.remove("color-theme-in-transition");
    }, 1000);
}

export const setTheme = (theme) => {
    document.documentElement.classList.add("color-theme-in-transition");
    document.documentElement.setAttribute("data-theme", theme);
    window.setTimeout(() => {
          document.documentElement.classList.remove("color-theme-in-transition");
    }, 1000);
}