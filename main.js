canvas = document.getElementById("myCanvas");
pen = canvas.getContext("2d");
mouse_event = "";
previous_mouse_x = "";
previous_mouse_y = "";
canvas.addEventListener("mousedown", my_mouse_down);

function my_mouse_down(e) {
    mouse_event = "md";
    console.log("mousedown");
}
canvas.addEventListener("mouseup", my_mouse_up);

function my_mouse_up(e) {
    mouse_event = "mu";
    console.log("mouseup");
}
canvas.addEventListener("mouseleave", my_mouse_leave);

function my_mouse_leave(e) {
    mouse_event = "ml";
    console.log("mouseleave");
}
canvas.addEventListener("mousemove", my_mouse_move)

function my_mouse_move(e) {
    console.log("mousemove");
    current_mouse_x = e.clientX - canvas.offsetLeft;
    current_mouse_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "md") {
        pen.beginPath();
        pen.strokeStyle="red";
        pen.lineWidth=2;
        pen.moveTo(previous_mouse_x, previous_mouse_y);
        pen.lineTo(current_mouse_x, current_mouse_y);
        pen.stroke();
    }
    previous_mouse_x=current_mouse_x;
    previous_mouse_y=current_mouse_y;
}