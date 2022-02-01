const hero = document.querySelector(".hero");
const text = hero.querySelector("h1"); 
const walk = 500; //means 500px of maximum shadow movement when the mouse moves

function shadow(e) {
    //fist: get the height and width of the thing with the moving shadow, in this case the emoji and the text
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    //alternative way of writing two lines above: const { offsetWidth: width, offsetHeight: height } = hero;

    //This bit takes the information of where your mouse is! We need to use let because the conditional below re-assigns values to it :) 
    let { offsetX: x, offsetY: y } = e;

    //at the moment the x and y values reset when you hover over the child element of the site, meaning the headline and the emoji
    //the following conditional stops that from happening; this=hero; e.target is wherever the mouse is
    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    //this bit offsets the shadow by 50px max
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    //styles the shadow: px on x- and y axis,  and colour; the * -1 in the variations makes the shadow move in the opposite way 
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(180,180,180,0.7), 
    ${yWalk}px ${xWalk * -1}px 0 rgba(90,70,90,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(50,250,180,0.7)
    `;
}

hero.addEventListener("mousemove", shadow);