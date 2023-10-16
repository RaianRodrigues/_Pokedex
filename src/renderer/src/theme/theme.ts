import { extendTheme } from "@chakra-ui/react";

import { mode } from "@chakra-ui/theme-tools";

import "@fontsource/poppins"

const customTheme = extendTheme({

  fonts: {

    body: "'Poppins', sans-serif",

    heading: "'Poppins', sans-serif",

  },

  colors: {

    customColor1: "#FF5733",

    customColor2: "#0066CC",

  },

  styles: {
    global: (props: any) => ({

      'html, body': {

        fontFamily: "body",

        width: "100%",

        height: "100%",

        background:"#191724"

      },

      '::-webkit-scrollbar': {

        width: "0.20rem",

        backgroundColor: "#111",

      },

      '::-webkit-scrollbar-thumb': {

        backgroundColor: mode("gray.600", "gray.800")(props),

        borderRadius: "10px",

      },

      '*': {

        scrollbarColor: mode("blue.500 black", "gray.800 gray.700")(props),

      },

    }),

  }

});

export default customTheme;