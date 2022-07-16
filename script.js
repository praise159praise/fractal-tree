function setup() {
    createCanvas(700, 700)
    document.querySelector("#angle").min = 0
    document.querySelector("#angle").max = TWO_PI


}

function draw() {
    background(51)
    translate(350, height)
    branch(200, 50, 10)
}
function branch(len, weight, color) {
    stroke(parseInt(color))

    strokeWeight(weight)
    line(0, 0, 0, -len)
    translate(0, -len)
    
    if (len > 4) {
        push()
        rotate(parseFloat(document.querySelector("#angle").value, 7))
        branch(len * 0.7, weight * 0.6, color+10)
        pop()
        push()
        rotate(-parseFloat(document.querySelector("#angle").value, 7))
        branch(len * 0.7, weight * 0.6, color+20)
        pop()
       
    }
}