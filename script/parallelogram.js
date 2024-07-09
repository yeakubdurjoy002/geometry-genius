function parallelogramCalculator() {
  const parallelogramBaseValue = document.getElementById("parallelogram-b");
  const getStringValue = parallelogramBaseValue.value;
  const getNumberValue = parseFloat(getStringValue);

  const parallelogramBaseLength = document.getElementById(
    "parallelogram-height"
  );
  const getStringValueHeight = parallelogramBaseLength.value;
  const getNumberValueHeight = parseFloat(getStringValueHeight);
  const totalArea = getNumberValue * getNumberValueHeight;
  const displayAreaValue = document.getElementById("parallelogram-area");
  displayAreaValue.innerHTML = totalArea;
  console.log(totalArea);
}
