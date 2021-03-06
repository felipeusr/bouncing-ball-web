var ball = document.querySelector("#ball");
var obs = document.querySelector("#obstacle");
var pos_x = 0
var pos_y = 0
var velocidade_x = 3
var velocidade_y = 4

function movement() { // função que movimenta o objeto
    pos_x += velocidade_x
    pos_y += velocidade_y
    ball.style.left = `${pos_x}px`
    ball.style.top = `${pos_y}px`

    if (pos_x >= window.innerWidth - ball.clientWidth) { // colisão da bola com a parede direita
        velocidade_x = -3
    }
    if (pos_x <= 0) { // colisão da bola com a parede esquerda
        velocidade_x = 3
    }


    if (pos_y >= window.innerHeight - ball.clientHeight) { // colisão da bola com o teto
        velocidade_y = -4
    }
    if (pos_y <= 0) { // colisão da bola com o chão
        velocidade_y = 4
    }

    // colisão com o obstaculo

    if (ball.getBoundingClientRect().left < obs.getBoundingClientRect().left+obs.clientWidth &&
        ball.getBoundingClientRect().left+ball.clientWidth > obs.getBoundingClientRect().left &&
        ball.getBoundingClientRect().top < obs.getBoundingClientRect().top+obs.clientHeight &&
        ball.getBoundingClientRect().top+ball.clientHeight > obs.getBoundingClientRect().top) {
            if (ball.getBoundingClientRect().left >= (obs.getBoundingClientRect().left-ball.clientWidth)) {
                velocidade_x = -3
            }
            if (ball.getBoundingClientRect().left >= (obs.getBoundingClientRect().left+obs.clientWidth-ball.clientWidth)) {
                velocidade_x = 3
            }
            if (ball.getBoundingClientRect().top >= obs.getBoundingClientRect().top-ball.clientHeight) {
                velocidade_y = -3
            }
            if (ball.getBoundingClientRect().top >= obs.getBoundingClientRect().top+obs.clientHeight-ball.clientHeight) {
                velocidade_y = 3
            }
    }
}


window.setInterval(movement, 1); // chamada da função que movimenta o objeto