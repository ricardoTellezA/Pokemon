import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Props } from "../pokemon/[id]";
import React from "react";
import { Pokemon, PokemonListResponse } from "@/interfaces";
import { pokeApi } from "../../../api";
import PokemonList from "@/components/pokemon/PokemonList";

const Name: NextPage<Props> = ({ pokemon }) => {
  return <PokemonList pokemon={pokemon} />;
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  // @ts-ignore
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);
  // @ts-ignore
  const pokemonNames: string[] = data?.results?.map((pokemon) => pokemon.name);

  //   importar pokemon por nombre

  return {
    paths: pokemonNames.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };

  return {
    props: {
      pokemon,
    },
  };
};

export default Name;
