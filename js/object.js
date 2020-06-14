"use strict";

{
  const scores = [80, 90, 40, 70];

  //   const [a, b, c, d] = scores;
  //   console.log(a);
  //   console.log(b);
  //   console.log(c);
  //   console.log(d);

  //   const [a, b, ...c] = scores;
  //   console.log(a);
  //   console.log(b);
  //   console.log(c);

  let x = 30;
  let y = 70;

  [x, y] = [y, x];

  console.log(x);
  console.log(y);
}
