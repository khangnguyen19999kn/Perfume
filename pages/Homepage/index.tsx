import React,{useState} from "react";
import TopHeader from "./component/TopHeader";
import Navbar from "./component/Navbar";
import Carousel from "./component/Carousels";
import NewProc from "./component/NewProc";
import AuthenBanner from "./component/AuthenBanner";
import ForMan from "./component/ForMan";
import ForWoman from "./component/ForWomen";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

export default function index({ swapis }: any) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  
  useHotkeys([["mod+J", () => toggleColorScheme()]]);
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
    <div>
      <TopHeader />
      <Navbar />
      <Carousel />
      <NewProc swapis={swapis} />
      <AuthenBanner />
      <ForMan />
      <ForWoman />
    </div>
    </MantineProvider>
    </ColorSchemeProvider>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://636479368a3337d9a2f7a739.mockapi.io/api/v1/perfumetest"
  );
  const swapis = await res.json();
  return {
    props: {
      swapis,
    },
  };
}
