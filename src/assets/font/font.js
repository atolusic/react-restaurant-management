import blanchCapsInline from "./blanch_caps_inline-webfont.woff";
import haymaker from "./Haymaker.woff";

let fontPrimary = {
  myFont: ["blanch"],
  file: [
    {
      fontFamily: "Blanch Caps Inline Regular",
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215",
      fontStyle: "normal",
      fontWeight: "normal",
      file: blanchCapsInline,
      fontType: "truetype",
      fileLocal: "Blanch Caps Inline Regular"
    }
  ]
};

let fontSecondary = {
  myFont: ["blanch"],
  file: [
    {
      fontFamily: "Haymaker",
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215",
      fontStyle: "normal",
      fontWeight: "normal",
      file: haymaker,
      fontType: "truetype",
      fileLocal: "Haymaker"
    }
  ]
};

export { fontPrimary, fontSecondary };
