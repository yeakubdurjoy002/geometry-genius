function rectangleArea() {
  const rectangleWidth = document.getElementById("width");
  //   const rectangleHeight = document.getElementById("height");
  const rectangleValue = rectangleWidth.value;
  const valueNumber = parseFloat(rectangleValue);

  const rectangleLength = document.getElementById("rectangle-length");
  const rectangleLengthText = rectangleLength.value;
  const rectangleLengthNumber = parseFloat(rectangleLengthText);
  const rectangleBaseArea = valueNumber * rectangleLengthNumber;

  //   display  rectangle value
  const rectangleValueDisplay = document.getElementById("rectangle-area-value");
  rectangleValueDisplay.innerText = rectangleBaseArea;
  console.log(rectangleBaseArea);
}
