// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import generateRandArr from "../../utils/generateRandomArrayInRange";

type ImageDataType = {
  images: {
    url: string;
    id: number;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ImageDataType>
) {
  // const { numImages } = req.body;
  const numImages = 10;
  const imageIds = generateRandArr(1, 906, numImages);
  const ImageData = imageIds.map((id) => ({
    url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    id,
  }));
  res.status(200).json({ images: ImageData });
}
