import { writable } from "svelte/store";
import tagColors from "../../constants/tagColors";

function tagColorLevelsStore() {
  const { subscribe } = writable(tagColors);

  return {
    subscribe,
  };
}

export const tagColorLevels = tagColorLevelsStore();
