// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import generateRandArr from "../../utils/generateRandomArrayInRange";

type ImageDataType = {
  images: {
    url: string;
    id: number;
  }[];
};

type ErrorMessageType = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ImageDataType | ErrorMessageType>
) {
  if (req.method === "GET") {
    if (req.body.numImages) {
      const { numImages } = req.body;
      const imageIds = generateRandArr(1, 906, numImages);
      const ImageData = imageIds.map((id) => ({
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        id,
      }));
      res.status(200).json({ images: ImageData });
    } else {
      res
        .status(400)
        .json({ message: "Please provide the number of images you want" });
    }
  } else {
    res.status(405).json({ message: "Method not supported" });
  }
}
