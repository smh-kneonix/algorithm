function halfAdder(x, y) {
  let c, s;
  if (!x * y + x * !y) {
    s = 1;
  } else {
    s = 0;
  }

  if (x && y) {
    c = 1;
  } else {
    c = 0;
  }

  return [c,s];
}

halfAdder(0, 1);
