// Custom Cursor
const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");
const cursorCircle = document.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
	let x = e.clientX;
	let y = e.clientY;

	cursorDot.style.top = y + "px";
	cursorDot.style.left = x + "px";
	cursorCircle.style.top = y + "px";
	cursorCircle.style.left = x + "px";
});