import React from "react";
import PokemonDetail from "@/app/pokemons/_components/PokemonDetail";
import axios from "axios";
import { Metadata } from "next";

import type { Pokemon } from "@/types/Pokemon.type";

interface DetailProps {
  params: {
    id: string;
  };
}

const fetchPokemonData = async (id: string): Promise<Pokemon> => {
  try {
    const response = await axios(`http://localhost:3000/api/pokemons/${id}`);
    
    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const generateMetadata = async ({
  params,
}: DetailProps): Promise<Metadata> => {
  const { id } = params;

  const pokemon = await fetchPokemonData(id);

  return {
    title: `No.${pokemon.id.toString().padStart(4, "0")}_ ${pokemon.korean_name} 페이지 🌟`,
    description: `${pokemon.korean_name}의 타입과 능력, 기술을 알아보자-!`,
  };
};

const Detail = async ({ params }: DetailProps) => {
  const { id } = params;
  const pokemon = await fetchPokemonData(id);

  return (
    <div>
      <PokemonDetail pokemon={pokemon} />
    </div>
  );
};

export default Detail;
