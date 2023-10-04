"use client";

import Image from "next/image";
import API from "@/services/api";
import { PokemonDetailProps } from "@/types/pokemon";
import { useEffect, useState } from "react";

export default function PokemonId({ params }: { params: { id: string } }) {
  const [data, setData] = useState<PokemonDetailProps>();

  useEffect(() => {
    async function getPokemon() {
      const response = await API.get(`/${params.id}`);
      const data = response.data;

      setData(data);
    }

    getPokemon();
  }, [params.id]);

  return (
    <div className="flex items-center justify-center p-10">
      <div className="bg-white rounded-lg shadow dark:bg-gray-700 w-3/5">
        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {data?.name}
          </h3>
        </div>
        <div className="p-6 space-y-6 flex flex-col items-center">
          <Image
            className="rounded-t-lg py-2"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data?.id}.png`}
            width="120"
            height="120"
            alt={"pokemon: " + data?.name}
          />
          <div>
            <h2 className="leading-relaxed text-xl text-gray-500 dark:text-red-700 font-bold">
              Número:
            </h2>
            <h2 className="text-center text-base leading-relaxed text-gray-500 dark:text-white">
              #{data?.id}
            </h2>
          </div>
          <div>
            <h2 className="text-center text-xl leading-relaxed text-gray-500 dark:text-red-700 font-bold">
              Tipo:
            </h2>
            <div>
              {data?.types.map((pokemon, index) => (
                <span
                  className={`text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded`}
                  key={index}
                >
                  {pokemon.type.name}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col text-center mr-10">
              <h2 className="leading-relaxed text-xl text-gray-500 dark:text-red-700 font-bold">
                Altura
              </h2>
              <h3 className="text-base leading-relaxed text-gray-500 dark:text-white">
                {data?.height}
              </h3>
            </div>
            <div className="flex flex-col text-center">
              <h2 className="leading-relaxed text-xl text-gray-500 dark:text-red-700 font-bold">
                Peso
              </h2>
              <h3 className="text-base leading-relaxed text-gray-500 dark:text-white">
                {data?.weight}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
