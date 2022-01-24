import { v4 as uuidv4 } from "uuid";

export const addUniqueID = async (movieList) => {
  return (movieList = await movieList.map((item) => ({
    ...item,
    uniqueID: uuidv4(),
  })));
};
