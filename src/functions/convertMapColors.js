/** @format */

export const grayToReal = (
  oldWorld,
  sizeX,
  sizeY,
  BORDERS = [200, 100, 50]
) => {
  let world = [...oldWorld];

  for (let i = 0; i < sizeY; i++) {
    for (let j = 0; j < sizeX; j++) {
      let gray = world[i][j].BGRed;
      if (gray > BORDERS[0]) continue;
      else if (gray > BORDERS[1]) {
        world[i][j].BGRed = 0;
        world[i][j].BGGreen = 255;
        world[i][j].BGBlue = 0;
      } else if (gray > BORDERS[2]) {
        world[i][j].BGRed = 0;
        world[i][j].BGGreen = BORDERS[0];
        world[i][j].BGBlue = (100 - gray) * 4;
      } else {
        world[i][j].BGRed = 0;
        world[i][j].BGGreen = 0;
        world[i][j].BGBlue = BORDERS[0];
      }
    }
  }

  return world;
};
