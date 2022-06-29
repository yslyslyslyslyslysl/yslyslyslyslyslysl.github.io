var score = 0;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function update_score() {
    score += 1;
    scoreboard = document.getElementById("score")
    scoreboard.textContent = "Pigs hunted: " + score;

    let pig_x_axis = getRndInteger(50, window.innerWidth - 50);
    let pig_y_axis = getRndInteger(50, window.innerHeight - 50);

    pig = document.getElementById("pig")
    pig.style.left = pig_x_axis + 'px';
    pig.style.top = pig_y_axis + 'px';
}