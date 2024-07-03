import React from 'react';
import PokemonDetail from '@/components/PokemonDetail';
import axios from 'axios';
import { Metadata } from 'next';

interface DetailProps {
  params: {
    id: string;
  }
}

const fetchPokemonData = async (id: string) => {
  try {
    const response = await axios(`http://localhost:3000/api/pokemons/${id}`);
   // console.log('디테일 데이터',response);
    if (response.statusText !== 'OK') {
      throw new Error('Network response was not ok');
    }
    const data = await response.data;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // 오류를 다시 던져서 상위 컴포넌트에서 처리하게 함
  }
};
export const metadata: Metadata = {
  title: "Pokemon ✨",
  description: "pokemon collenctions book",
};

const PDetail = async ({params}: DetailProps) => {
  const { id } = params;
  const pokemon = await fetchPokemonData(id);

  return (
    <div>
      <PokemonDetail pokemon={pokemon} />
    </div>
  );
};


export default PDetail;
