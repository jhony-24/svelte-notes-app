import { writable } from "svelte/store";

function themeApplicationStore() {
  const { subscribe, set } = writable("light");

  /**
   * @param {"light"|"dark"} theme
   */
  const setTheme = (theme) => set(theme);
  const setLightTheme = () => setTheme("light");
  const setDarkTheme = () => setTheme("dark")  

  return {
    subscribe,
    setTheme,
    setLightTheme,
    setDarkTheme
  };
}

export const themeApplication = themeApplicationStore();
