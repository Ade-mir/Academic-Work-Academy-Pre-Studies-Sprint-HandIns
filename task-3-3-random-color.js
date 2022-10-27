// Go back to the “random color” task in week 1. With all you have learned about arrays this week. You probably realize that you can create the random color function with much less lines of code if you put your colors in an array. So go ahead and try to do that now.

randomColor();

function randomColor() {
  const colors = ['green', 'yellow', 'red', 'blue', 'purple', 'pink'];
  console.log(colors[Math.floor(Math.random() * 6)]);
}
