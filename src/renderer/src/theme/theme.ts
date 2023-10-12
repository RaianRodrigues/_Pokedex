import { extendTheme } from "@chakra-ui/react";

import { mode } from "@chakra-ui/theme-tools";

import "@fontsource/poppins"

import backImage2 from "../../../../resources/backImage2.png";

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

        position: "relative",
      },

      body: {

        backgroundImage: backImage2,

        backgroundSize: "cover",

        position: "relative",

        '&::before': {

          content: '""',

          position: "fixed",

          top: 0,

          left: 0,

          width: "100%",

          height: "100%",

          background: "rgba(0, 0, 0, 0.2)",

          backdropFilter: "brightness(0.8) blur(3px)",

        },

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