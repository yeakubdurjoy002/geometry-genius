/**
 * step-1 get the value
 *step-2 added an id in the base input field
 *step-3 use getElementById to access the input field
 *step-4 get value from the input field ( value is now a string)
 *step-5 convert the value into a number using parseFloat
 *step-6
 */
function calculateTriangleArea() {
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  const triangleHeight = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeight.value;
  const height = parseFloat(triangleHeightText);
  const area = 0.5 * height * base;

  // display the triangle value
  const triangleValue = document.getElementById("triangle-area");
  triangleValue.innerText = area;

  console.log("The area of the triangle is", area);
}
