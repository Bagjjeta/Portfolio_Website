const container = document.getElementById('projects');
const projects = document.querySelectorAll('.project_container');
const count = projects.length;

let currentHeight = 100;

if (window.innerWidth < 577) {
    for (let i = 2; i < count; i++) {
        currentHeight += 55;
    }
}
else if (window.innerWidth < 769) {
    for (let i = 4; i < count; i++) {
        if ((i - 4) % 2 === 0) {
            currentHeight += 30;
        }
    }
}
else {
    for (let i = 6; i < count; i++) {
        if ((i - 6) % 3 === 0) {
            currentHeight += 80;
        }
    }
}

container.style.height = `${currentHeight}vh`;