import { useEffect, useState } from "react";
import Layout from "@/components/layouts/Layout";
import { NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { Card, Grid } from "@nextui-org/react";
import { FavoritePokemon } from "@/components/pokemon";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);
  return (
    <>
      <Layout>
        {favoritePokemons.length === 0 ? (
          <NoFavorites />
        ) : (
          <FavoritePokemon pokemons={favoritePokemons} />
        )}
      </Layout>
    </>
  );
};

export default FavoritesPage;
