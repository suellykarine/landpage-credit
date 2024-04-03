"use client";

import { createGlobalStyle } from "styled-components";
import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";
export const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
export const inter = Inter({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const GlobalStyle = createGlobalStyle`
:root {
    --primary-color:   #1c1f4e;
    --secondary-color: #ec8931;
    --deposition-blue: #1B3F7E;
    --white:           #FFFFFF;
    --gray:            #b6b6b6;
    --gray-placeholder:#7B8499;
    --red-alert :      #c93642;
    --bg-form:   #1c2158;
}
 body {
    background-color: #1c1f4e;
    font-family: ${roboto.style.fontFamily};
    overflow-x: hidden;
    cursor: default;
    }
    a, button{
      cursor: pointer;
    }
   input{
    cursor: text
   }

`;
