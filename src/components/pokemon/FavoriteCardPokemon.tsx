import React from "react";
import { Card } from "@nextui-org/react";
import { useRouter } from "next/router";

const FavoriteCardPokemon = ({ id }: { id: number }) => {
  const router = useRouter();
  const onFavoriteClick = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Card
      isHoverable
      isPressable
      css={{ padding: 10 }}
      onClick={onFavoriteClick}
    >
      <Card.Image
        width={"100%"}
        height={"140px"}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
      />
    </Card>
  );
};

export default FavoriteCardPokemon;
