window.addEventListener('load', (e)=>{


const contentBox = {
    element: document.querySelector(".content"),
    borderWidth: "0.5mm",
    borderStyle: "solid",
    borderColor: "black",
    width: "1220%",
    height: "4vh"
}

const contentText = {
    element: document.querySelector(".actualContent"),
    opacity: "1",
    project: document.querySelector(".projects"),
    practice: document.querySelector(".practice"),
    team: document.querySelector(".team"),
    services: document.querySelector(".services"),
    contact: document.querySelector(".contact")
}

const contentBoxRevert = {
    borderWidth: "0.7mm",
    borderStyle: "solid",
    borderColor: "black",
    width: "3.2vh",
    height: "3.2vh"
}

const contentTextRevert = {
    opacity: "0"
}



const logo = {
    WhiteElement: document.querySelector("#whiteLogo"),
    BlackElement: document.querySelector("#blackLogo"),
    opacity: "1",
    opacityRevert: "0"
}

const projects = {
    project1: { project: document.querySelector(".Project1"), image: document.querySelector(".Image1"), description: document.querySelector(".descriptionBoxP1") },
    project2: { project: document.querySelector(".Project2"), image: document.querySelector(".Image2"), description: document.querySelector(".descriptionBoxP2") },
    project3: { project: document.querySelector(".Project3"), image: document.querySelector(".Image3"), description: document.querySelector(".descriptionBoxP3") },
    project4: { project: document.querySelector(".Project4"), image: document.querySelector(".Image4"), description: document.querySelector(".descriptionBoxP4") },
    project5: { project: document.querySelector(".Project5"), image: document.querySelector(".Image5"), description: document.querySelector(".descriptionBoxP5") }
}


class Border {
    constructor(width, style, color, element) {
        this.width = width;
        this.style = style;
        this.color = color;
        this.element = element;
    }

    changeB() {
        return this.element.style.border = `${this.width} ${this.style} ${this.color}`;
    }

    changeBRight() {
        return this.element.style.borderRight = `${this.width} ${this.style} ${this.color}`;
    }

    changeBLeft() {
        return this.element.style.borderLeft = `${this.width} ${this.style} ${this.color}`;
    }

    changeBTop() {
        return this.element.style.borderTop = `${this.width} ${this.style} ${this.color}`;
    }

    changeBBottom() {
        return this.element.style.borderBottom = `${this.width} ${this.style} ${this.color}`;
    }
}

class WidthHeight {
    constructor(width, height, element) {
        this.element = element;
        this.width = width;
        this.height = height;
    }

    changeWidth() {
        return this.element.style.width = `${this.width}`;
    }

    changeHeight() {
        return this.element.style.height = `${this.height}`;
    }
}

class Opacity {
    constructor(opacity, element) {
        this.opacity = opacity;
        this.element = element;

    }

    changeOpacity() {
        return this.element.style.opacity = `${this.opacity}`
    }

    changeBackgroundOpacity() {
        return this.element.style.backgroundColor = `${this.opacity}`
    }
}

class Transform {
    constructor(scaleX, scaleY, rotate, element) {
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.rotate = rotate
        this.element = element;

    }

    changeScale() {
        return this.element.style.transform = `scale(${this.scaleX},${this.scaleY}) rotate(${this.rotate}deg)`
    }
}

class FontColor {
    constructor(r, g, b, color, element) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.color = color;
        this.element = element;
    }

    changeBlack() {
        this.element.style.color = "black";
    }

    changeWhite() {
        this.element.style.color = "white";
    }
}


const changeB = new Border(contentBox.borderWidth, contentBox.borderStyle, contentBox.borderColor, contentBox.element);

const revertB = new Border(contentBoxRevert.borderWidth, contentBoxRevert.borderStyle, contentBoxRevert.borderColor, contentBox.element);

const changeW = new WidthHeight(contentBox.width, contentBox.height, contentBox.element);

const revertW = new WidthHeight(contentBoxRevert.width, contentBoxRevert.height, contentBox.element);

const changeO = new Opacity(contentText.opacity, contentText.element);

const revertO = new Opacity(contentTextRevert.opacity, contentText.element);

const logoWhiteHover = new Opacity(logo.opacity, logo.WhiteElement);

const logoWhiteHoverRevert = new Opacity(logo.opacityRevert, logo.WhiteElement);

const logoBlackHover = new Opacity(logo.opacityRevert, logo.BlackElement);

const logoBlackHoverRevert = new Opacity(logo.opacity, logo.BlackElement);


function resolveAfter0Seconds(x, y) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x, y);
        }, 0);
    });
}

function resolveAfter200Seconds(x, y) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x, y);

        }, 200);
    });
}

function resolveAfter400Seconds(x, y) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x, y);

        }, 400);
    });
}

function resolveAfter800Seconds(x, y) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x, y);

        }, 800);
    });
}

function resolveAfter1600Seconds(x, y) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x, y);

        }, 1600);
    });
}

function resolveAfter6500Seconds(x, y) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x, y);

        }, 6500);
    });
}

function resolveAfter8000Seconds(x, y) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x, y);

        }, 8000);
    });
}

function resolveAfter10000Seconds(x, y, z) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x, y, z);

        }, 10000);
    });
}

function removeEvPr(){
    window.location = "https://rakshitrajender.github.io/Mofa_16032021.github.io/1_Project/Project_index.html";
}

function removeEvPrac(){
    window.location = "https://rakshitrajender.github.io/Mofa_16032021.github.io/2_Practice/Practice_index.html";
}

function removeEvTe(){
    window.location = "https://rakshitrajender.github.io/Mofa_16032021.github.io/3_Team/Team_index.html";
}

function removeEvCon(){
    window.location = "https://rakshitrajender.github.io/Mofa_16032021.github.io/5_Contact/Contact_index.html";
}

async function animateNav() {

    contentText.project.addEventListener('click', removeEvPr)

    contentText.practice.addEventListener('click', removeEvPrac)

    contentText.team.addEventListener('click', removeEvTe)

    // contentText.services.addEventListener('click', () => {
    //     window.location = "D:/Web_Dev/Mofa_16032021/4_Services/Services_index.html";
    // })

    contentText.contact.addEventListener('click', removeEvCon)

    await resolveAfter0Seconds(contentBox.element.removeEventListener('mouseenter', mouseEntercontent))
    await resolveAfter0Seconds(contentBox.element.removeEventListener('click', animateNav));
    await resolveAfter400Seconds(changeB.changeB(), changeW.changeHeight());
    await resolveAfter10000Seconds(changeW.changeWidth(), changeO.changeOpacity());
    await resolveAfter800Seconds(revertO.changeOpacity());
    await resolveAfter400Seconds(revertW.changeWidth());
    await resolveAfter400Seconds(revertB.changeB(), revertW.changeHeight());

    await resolveAfter0Seconds(contentBox.element.addEventListener('click', animateNav));
    await resolveAfter0Seconds(contentBox.element.addEventListener('mouseenter', mouseEntercontent));
    await resolveAfter0Seconds(contentText.project.removeEventListener('click', removeEvPr), contentText.practice.removeEventListener('click', removeEvPrac))

    await resolveAfter0Seconds(contentText.team.removeEventListener('click', removeEvTe), contentText.contact.removeEventListener('click', removeEvCon))

}

logo.WhiteElement.addEventListener('mouseenter', () => {
    logoWhiteHover.changeOpacity();
    logoBlackHover.changeOpacity();
})

logo.WhiteElement.addEventListener('mouseleave', () => {
    logoWhiteHoverRevert.changeOpacity();
    logoBlackHoverRevert.changeOpacity();
})

logo.WhiteElement.addEventListener('mousedown', (e) => {

    const transformWhite = new Transform(0.985, 0.985, 0, logo.WhiteElement);
    const transformBlack = new Transform(0.985, 0.985, 0, logo.BlackElement);

    transformWhite.changeScale();
    transformBlack.changeScale();

})

logo.WhiteElement.addEventListener('mouseup', async (e) => {

    const transformWhite = new Transform(1, 1, 0, logo.WhiteElement);
    const transformBlack = new Transform(1, 1, 0, logo.BlackElement);

    await resolveAfter200Seconds(transformWhite.changeScale(),
        transformBlack.changeScale());
    await resolveAfter0Seconds(window.location = "https://rakshitrajender.github.io/Mofa_16032021.github.io/index.html");

})



contentBox.element.addEventListener('click', animateNav)

function mouseEntercontent() {
    contentBox.element.style.transform = "scale(0.9) rotate(-180deg)";
}

contentBox.element.addEventListener('mouseenter', mouseEntercontent);

contentBox.element.addEventListener('mouseleave', ()=>{
    contentBox.element.style.transform="scale(1) rotate(-180deg)";
})


contentText.project.addEventListener('mouseenter', () => {
    contentText.project.style.color = "grey";
})

contentText.practice.addEventListener('mouseenter', () => {
    contentText.practice.style.color = "grey";
})

contentText.team.addEventListener('mouseenter', () => {
    contentText.team.style.color = "grey";
})

// contentText.services.addEventListener('mouseenter', () => {
//     contentText.services.style.color = "grey";
// })

contentText.contact.addEventListener('mouseenter', () => {
    contentText.contact.style.color = "grey";
})

contentText.project.addEventListener('mouseleave', () => {
    contentText.project.style.color = "black";
})

contentText.practice.addEventListener('mouseleave', () => {
    contentText.practice.style.color = "black";
})

contentText.team.addEventListener('mouseleave', () => {
    contentText.team.style.color = "black";
})

// contentText.services.addEventListener('mouseleave', () => {
//     contentText.services.style.color = "black";
// })

contentText.contact.addEventListener('mouseleave', () => {
    contentText.contact.style.color = "black"
})





 async function inittial(e) {

    await resolveAfter200Seconds();
    await resolveAfter0Seconds(projects.project1.project.style.transform = "scale(1,1)");
    await resolveAfter800Seconds(anime({
        targets: projects.project1.image,
        translateX: 0
    }));
    await resolveAfter800Seconds(anime({
        targets: projects.project1.description,
        translateX: 0
    }));

    await resolveAfter0Seconds(projects.project2.project.style.transform = "scale(1,1)");
    await resolveAfter800Seconds(anime({
        targets: projects.project2.image,
        translateX: 0
    }));
    await resolveAfter0Seconds(anime({
        targets: projects.project2.description,
        translateX: 0
    }));

 }

 inittial();

let last_known_scroll_position = 0;
let ticking = false;

async function doSomething(scroll_pos) {
    if (scroll_pos >= 350 && scroll_pos <= 1372) {
        await resolveAfter0Seconds(projects.project3.project.style.transform = "scale(1,1)");
        await resolveAfter800Seconds(anime({
            targets: projects.project3.image,
            translateX: 0
        }));
        await resolveAfter0Seconds(anime({
            targets: projects.project3.description,
            translateX: 0
        }));

    }

    if (scroll_pos >= 800 && scroll_pos <= 1372) {
        await resolveAfter0Seconds(projects.project4.project.style.transform = "scale(1,1)");
        await resolveAfter800Seconds(anime({
            targets: projects.project4.image,
            translateX: 0
        }));
        await resolveAfter0Seconds(anime({
            targets: projects.project4.description,
            translateX: 0
        }));
    }

    if (scroll_pos >= 1100 && scroll_pos <= 1372) {
        await resolveAfter0Seconds(projects.project5.project.style.transform = "scale(1,1)");
        await resolveAfter800Seconds(anime({
            targets: projects.project5.image,
            translateX: 0
        }));
        await resolveAfter0Seconds(anime({
            targets: projects.project5.description,
            translateX: 0
        }));
    }
}


window.addEventListener('scroll', (e) => {

    last_known_scroll_position = e.target.defaultView.window.pageYOffset;

    console.log(last_known_scroll_position);

    if (!ticking) {
        setTimeout(function () {
            doSomething(last_known_scroll_position);
            ticking = false;
        }, 200);

        ticking = true;
    }

})

})