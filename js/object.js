"use strict";

{
  const scores = [80, 90, 40];
  // console.log(scores[1]);

  //   scores[2] = 44;
  //   console.log(scores);

  //   console.log(scores.length);

  //   scores.push(60, 50);
  //   scores.shift();
  //   scores.unshift(99, 100);
  //   scores.pop();(

  scores.splice(1, 1, 40, 50);

  for (let i = 0; i < scores.length; i++) {
    console.log(`Scores ${i}: ${scores[i]}`);
  }
}
