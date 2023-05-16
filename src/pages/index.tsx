import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/layouts/Layout";
import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";
import { pokeApi } from "../../api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { PokemonCard } from "@/components/pokemon";

interface Porps {
  pokemons: SmallPokemon[];
}
const Home: NextPage<Porps> = ({ pokemons }) => {

  return (
    <Layout title="aplicación de pokemon">
      <h1>Hola mundo</h1>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map(({ id, name, image }) => (
          <PokemonCard key={id} pokemon={{ id, name, image }} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    const id = index + 1;
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    return {
      ...pokemon,
      id,
      image,
    };
  });

  return {
    props: {
      pokemons: pokemons,
    },
  };
};
