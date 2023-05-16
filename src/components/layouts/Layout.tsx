import Head from "next/head";
import { FC } from "react";
import { NavBar } from "../ui";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const origin = (typeof window ===  'undefined') ? '' : window.location.origin;


const Layout: FC<Props> = ({ children, title }) => {
  
  
  return (
    <>
      <Head>
        <title>{title || "PokemonApp"}</title>
        <meta name="author" content="Ricardo Tellez" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokedex, pokemones`} />
        <meta
          property="og:title"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta
          property="og:description"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/images/banner.png`}
        />
      </Head>

      {/* NavBar */}
      <NavBar />
      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
