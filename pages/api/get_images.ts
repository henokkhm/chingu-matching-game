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

export default function getImagesData(
  req: NextApiRequest,
  res: NextApiResponse<ImageDataType | ErrorMessageType>
) {
  if (req.method === "GET") {
    if (req.query.numImages) {
      const numImages = Number(req.query.numImages);
      if (isNaN(numImages)) {
        res.status(400).json({
          message:
            "Please provide an integer for the number of images you want",
        });
      }
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
