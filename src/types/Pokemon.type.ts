export type Pokemon = {
  id: number;
  name: string;
  korean_name: string;
  height: number;
  weight: number;
  sprites: { front_default: string };
  types: { type: { name: string; korean_name: string } }[];
  abilities: { ability: { name: string; korean_name: string } }[];
  moves: { move: { name: string; korean_name: string } }[];
}

export type Colors = {
  노말: string;
  불꽃: string;
  물: string;
  풀: string;
  전기: string;
  얼음: string;
  격투: string;
  독: string;
  땅: string;
  비행: string;
  에스퍼: string;
  벌레: string;
  바위: string;
  고스트: string;
  드래곤: string;
  악: string;
  강철: string;
  페어리: string;
};