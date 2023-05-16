import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";
import React from "react";

export const NavBar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de la app"
        width={70}
        height={70}
      />
      <Link href="/">
        <Text color="white" h2>
          P
        </Text>
        <Text color="white" h3>
          okemon
        </Text>
      </Link>
      <Spacer css={{ flex: 1 }} />
      <Link href="/favorites" css={{marginRight: "10px"}}>
        <Text color="white">Favoritos</Text>
      </Link>
    </div>
  );
};
