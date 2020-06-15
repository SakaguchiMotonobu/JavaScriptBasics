"use strict";

{
  const point = {
    x: 100,
    y: 180,
  };

  const keys = Object.keys(point);
  keys.forEach((a) => {
    console.log(`Key: ${a} Value: ${point[a]}`);
  });
}
