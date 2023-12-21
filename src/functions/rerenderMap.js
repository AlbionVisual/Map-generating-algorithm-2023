/** @format */

export const rerenderMap = (
  world,
  sizeX,
  sizeY,
  WEIGHTS = [1, 1, 1, 1],
  OFFSET = [0, 1, 0, 2],
  DEEPNESS = [1, 2, 4, 8]
) => {
  let newMap = [...world];
  let chunkedMap = [[[]]];
  for (let k = 0; k < DEEPNESS.length; k++) {
    chunkedMap[k] = [];
    for (let i = 0; i - 1 < sizeY / DEEPNESS[k]; i++) {
      chunkedMap[k][i] = [];
      for (let j = 0; j - 1 < sizeX / DEEPNESS[k]; j++) {
        chunkedMap[k][i][j] = Math.random() * 256;
      }
    }
  }
  // console.log("Chunks:", chunkedMap);

  for (let i = 0; i < sizeY; i++) {
    for (let j = 0; j < sizeX; j++) {
      let weightSum = 0;
      let koff = 0;
      for (let s = 0; s < WEIGHTS.length; s++) {
        weightSum += WEIGHTS[s];
        koff +=
          chunkedMap[s][Math.floor((i + OFFSET[s]) / DEEPNESS[s])][
            Math.floor((j + OFFSET[s]) / DEEPNESS[s])
          ] * WEIGHTS[s];
      }
      koff /= weightSum;
      newMap[i][j] = { BGRed: koff, BGGreen: koff, BGBlue: koff };
      // if (i == 0 && j == 0) console.log("First element:", newMap[i][j]);
    }
  }

  // console.log("New map:", newMap);
  return newMap;
};

export const fillRandomly = (sizeX, sizeY, world = [[]]) => {
  // fill world with color
  const defaultWorld = [...world];
  for (let i = 0; i < sizeY; i++) {
    defaultWorld[i] = [];
    for (let k = 0; k < sizeX; k++) {
      const koff = Math.random() * 255;
      defaultWorld[i][k] = { BGRed: koff, BGGreen: koff, BGBlue: koff };
    }
  }
  return defaultWorld;
};
