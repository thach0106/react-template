import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,700&display=swap");

  html {
    font-size: 62.5%;
    box-sizing: border-box;

    body {
      font-family: Roboto, "DM Sans", sans-serif;
      font-size: 1.6rem;
      line-height: 1.5;
      text-rendering: optimizeSpeed;
      scroll-behavior: smooth;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
  }
`;

export const GlobalContainer = styled.div``;
