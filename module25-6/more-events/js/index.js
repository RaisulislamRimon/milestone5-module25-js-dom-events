/* 
click, mouseenter, mousemove, focus, blur, keydown, keyup
 
*/

/* document.getElementById("text-field").addEventListener("keydown", function () {
  console.log("focus");
}); */

/* document
  .getElementById("text-field")
  .addEventListener("keypress", function (event) {
    //   console.log("focus", event.target);
    // console.log("focus", event);
    console.log("focus", event.target.value);
  });
 */

document
  .getElementById("text-field")
  .addEventListener("keyup", function (event) {
    //   console.log("focus", event.target);
    // console.log("focus", event);
    console.log("focus", event.target.value);
  });

document.getElementById("btn-more").addEventListener("mousemove", function () {
  console.log("More button clicked");
});
