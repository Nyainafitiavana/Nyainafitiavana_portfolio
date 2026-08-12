import {Lang} from "./types";

export function detectLang(): Lang {
    if (typeof navigator === "undefined") return "fr";
    return navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
}
