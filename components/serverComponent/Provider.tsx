import React, { Fragment } from "react";
import { ThemeProvider } from "../clientComponent";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";

export interface ProviderProps {
  children?: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return (
    <Fragment>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <NavigationBar />
        {children}
        <Footer />
      </ThemeProvider>
    </Fragment>
  );
};
