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

        fontFamily: "body", // Use a fonte Poppins para o corpo e cabeçalhos

        background: "#000",

        width:"100%",

        height:"100%",
      },

      '::-webkit-scrollbar': {

        width: "0.25rem", // Largura da scrollbar

        backgroundColor: "black", // Cor de fundo da scrollbar

      },

      '::-webkit-scrollbar-thumb': {

        backgroundColor: mode("blue.500", "gray.800")(props), // Cor do thumb (altere para a cor desejada)

        borderRadius: "10px", // Border radius de 10px

      },

      '*': {

        scrollbarColor: mode("blue.500 black", "gray.800 gray.700")(props), // Cor da thumb e da track

      },

    }),

  }

});

export default customTheme;