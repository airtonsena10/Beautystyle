import { extendTheme } from "@chakra-ui/react";

const colors = {
  gray: {
    900: "#171923",
    600: "#2D3748",
    700: "#2D3748",
    400: "#EDF2F7",
  },
};

const fonts = {
  body: "DM Sans",
};

export const theme = extendTheme({ colors, fonts });
