/**
 * Inline script that runs before first paint so the saved theme is applied
 * without a flash. Dark is the default; "darkMode" is the legacy storage key.
 */
export const themeScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("theme")||(localStorage.getItem("darkMode")==="false"?"light":null);if(t!=="light")d.classList.add("dark")}catch(e){d.classList.add("dark")}})()`;
