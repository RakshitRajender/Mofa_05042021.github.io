



window.addEventListener('load', (e)=>{

console.log(e);

const contentBox = {
    element: document.querySelector(".content"),
    borderWidth: "0.5mm",
    borderStyle: "solid",
    borderColor: "white",
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

const aContent = {
    element: document.querySelector(".actualContent")
}


const logo = {
    WhiteElement: document.querySelector("#whiteLogo"),
    BlackElement: document.querySelector("#blackLogo"),
    opacity: "1",
    opacityRevert: "0"
}


const arrowsContent = {
    leftElement: document.querySelector(".arrowContentLeft"),
    rightElement: document.querySelector(".arrowContentRight")
}

const buttonSlide = {
    imageOne: document.querySelector(".imgOne"),
    imageTwo: document.querySelector(".imgTwo"),
    imageThree: document.querySelector(".imgThree"),
    imageFour: document.querySelector(".imgFour"),
}

const image = {
    imageOne: document.querySelector(".One"),
    imageTwo: document.querySelector(".Two"),
    imageThree: document.querySelector(".Three"),
    imageFour: document.querySelector(".Four"),
    carousal: document.querySelector(".carousal")
}

const tag = {
    tagText: document.querySelector(".textTag"),
    tagText1: document.querySelector(".textTag1"),
    tagText2: document.querySelector(".textTag2"),
    tagText3: document.querySelector(".textTag3")
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

    contentText.project.addEventListener('click', removeEvPr )
    
    contentText.practice.addEventListener('click',removeEvPrac )
    
    contentText.team.addEventListener('click', removeEvTe)
    
    // contentText.services.addEventListener('click', () => {
    //     window.location = "D:/Web_Dev/Mofa_16032021/4_Services/Services_index.html";
    // })
    
    contentText.contact.addEventListener('click', removeEvCon)


    await resolveAfter0Seconds(contentBox.element.removeEventListener('click', animateNav));
    await resolveAfter400Seconds(changeB.changeB(), changeW.changeHeight());
    await resolveAfter10000Seconds(changeW.changeWidth(), changeO.changeOpacity());
    await resolveAfter800Seconds(revertO.changeOpacity());
    await resolveAfter400Seconds(revertW.changeWidth());
    await resolveAfter400Seconds(revertB.changeB(), revertW.changeHeight());

    await resolveAfter0Seconds(contentBox.element.addEventListener('click', animateNav));

    await resolveAfter0Seconds(contentText.project.removeEventListener('click', removeEvPr ), contentText.practice.removeEventListener('click',removeEvPrac ))

    await resolveAfter0Seconds(contentText.team.removeEventListener('click',removeEvTe ), contentText.contact.removeEventListener('click', removeEvCon))

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

contentBox.element.addEventListener('mouseenter', ()=>{
    contentBox.element.style.transform="scale(0.7) rotate(-180deg)";
})

contentBox.element.addEventListener('mouseleave', ()=>{
    contentBox.element.style.transform="scale(1) rotate(-180deg)";
})



contentText.project.addEventListener('mouseenter', () => {
    contentText.project.style.color = "white"
})

contentText.practice.addEventListener('mouseenter', () => {
    contentText.practice.style.color = "white"
})

contentText.team.addEventListener('mouseenter', () => {
    contentText.team.style.color = "white"
})

// contentText.services.addEventListener('mouseenter', () => {
//     contentText.services.style.color = "white"
// })

contentText.contact.addEventListener('mouseenter', () => {
    contentText.contact.style.color = "white"
})

contentText.project.addEventListener('mouseleave', () => {
    contentText.project.style.color = "black"
})

contentText.practice.addEventListener('mouseleave', () => {
    contentText.practice.style.color = "black"
})

contentText.team.addEventListener('mouseleave', () => {
    contentText.team.style.color = "black"
})

// contentText.services.addEventListener('mouseleave', () => {
//     contentText.services.style.color = "black"
// })

contentText.contact.addEventListener('mouseleave', () => {
    contentText.contact.style.color = "black"
})




arrowsContent.leftElement.addEventListener('mouseenter', () => {
    new Transform(1.05, 1.05, 45, arrowsContent.leftElement).changeScale();
    new Border("0.6mm", "solid", "white", arrowsContent.leftElement).changeBLeft();
    new Border("0.6mm", "solid", "white", arrowsContent.leftElement).changeBBottom();
    new Border("0mm", "solid", "rgba(255, 255, 255, 0)", arrowsContent.leftElement).changeBRight();
    new Border("0mm", "solid", "rgba(255, 255, 255, 0)", arrowsContent.leftElement).changeBTop();
    new Opacity("rgba(255, 255, 255, 0)", arrowsContent.leftElement).changeBackgroundOpacity();
})

arrowsContent.leftElement.addEventListener('mouseleave', () => {
    new Transform(1, 1, 45, arrowsContent.leftElement).changeScale();
    new Border("0.6mm", "solid", "black", arrowsContent.leftElement).changeBLeft();
    new Border("0.6mm", "solid", "black", arrowsContent.leftElement).changeBBottom();
    new Border("0.6mm", "solid", "rgba(29, 29, 29, 0.384)", arrowsContent.leftElement).changeBRight();
    new Border("0.6mm", "solid", "rgba(29, 29, 29, 0.384)", arrowsContent.leftElement).changeBTop();
    new Opacity("rgba(255, 255, 255, 0.281)", arrowsContent.leftElement).changeBackgroundOpacity();
})




arrowsContent.rightElement.addEventListener('mouseenter', () => {
    new Transform(1.05, 1.05, 45, arrowsContent.rightElement).changeScale();
    new Border("0.6mm", "solid", "white", arrowsContent.rightElement).changeBRight();
    new Border("0.6mm", "solid", "white", arrowsContent.rightElement).changeBTop();
    new Border("0mm", "solid", "rgba(255, 255, 255, 0)", arrowsContent.rightElement).changeBLeft();
    new Border("0mm", "solid", "rgba(255, 255, 255, 0)", arrowsContent.rightElement).changeBBottom();
    new Opacity("rgba(255, 255, 255, 0)", arrowsContent.rightElement).changeBackgroundOpacity();
})

arrowsContent.rightElement.addEventListener('mouseleave', () => {
    new Transform(1, 1, 45, arrowsContent.rightElement).changeScale();
    new Border("0.6mm", "solid", "black", arrowsContent.rightElement).changeBRight();
    new Border("0.6mm", "solid", "black", arrowsContent.rightElement).changeBTop();
    new Border("0.6mm", "solid", "rgba(29, 29, 29, 0.384)", arrowsContent.rightElement).changeBLeft();
    new Border("0.6mm", "solid", "rgba(29, 29, 29, 0.384)", arrowsContent.rightElement).changeBBottom();
    new Opacity("rgba(255, 255, 255, 0.281)", arrowsContent.rightElement).changeBackgroundOpacity();
})



function addFront() {
    const src = image.imageOne.getAttribute("src");

    let imageNo;

    if (parseInt(src.slice(0, 1)) == 4) {
        imageNo = 1;
    }
    else { imageNo = parseInt(src.slice(0, 1)) + 1; }

    const nextImage = document.createElement("img");
    image.carousal.insertBefore(nextImage, image.imageOne);
    nextImage.setAttribute("class", `One`);
    nextImage.setAttribute("src", `${imageNo}.jpg`);

    if (imageNo == 1) {
        buttonSlide.imageOne.style.transform = "scale(1.8)";

    }

    else if (imageNo == 2) {
        buttonSlide.imageTwo.style.transform = "scale(1.8)";

    }

    else if (imageNo == 3) {
        buttonSlide.imageThree.style.transform = "scale(1.8)";

    }

    else if (imageNo == 4) {
        buttonSlide.imageFour.style.transform = "scale(1.8)";

    }
}

function addBack() {
    const src = image.imageOne.getAttribute("src");

    let imageNo;

    if (parseInt(src.slice(0, 1)) == 1) {
        imageNo = 4;
    }
    else { imageNo = parseInt(src.slice(0, 1)) - 1; }

    const nextImage = document.createElement("img");
    image.carousal.insertBefore(nextImage, image.imageOne);
    nextImage.setAttribute("class", `One`);
    nextImage.setAttribute("src", `${imageNo}.jpg`);

    if (imageNo == 1) {
        buttonSlide.imageOne.style.transform = "scale(1.8)";

    }

    else if (imageNo == 2) {
        buttonSlide.imageTwo.style.transform = "scale(1.8)";
    }

    else if (imageNo == 3) {
        buttonSlide.imageThree.style.transform = "scale(1.8)";

    }

    else if (imageNo == 4) {
        buttonSlide.imageFour.style.transform = "scale(1.8)";

    }
}

function buttonBack() {
    buttonSlide.imageOne.style.transform = "scale(1)"
    buttonSlide.imageTwo.style.transform = "scale(1)"
    buttonSlide.imageThree.style.transform = "scale(1)"
    buttonSlide.imageFour.style.transform = "scale(1)"
}

function fontColorChange() {


    if (image.imageOne.getAttribute("src") == "1.jpg") {

        tag.tagText.style.opacity = "1";
        tag.tagText1.style.opacity = "0";
        tag.tagText2.style.opacity = "0";
        tag.tagText3.style.opacity = "0";
    }

    else if (image.imageOne.getAttribute("src") == "2.jpg") {

        tag.tagText.style.opacity = "0";
        tag.tagText1.style.opacity = "1";
        tag.tagText2.style.opacity = "0";
        tag.tagText3.style.opacity = "0";
    }

    else if (image.imageOne.getAttribute("src") == "3.jpg") {

        tag.tagText.style.opacity = "0";
        tag.tagText1.style.opacity = "0";
        tag.tagText2.style.opacity = "1";
        tag.tagText3.style.opacity = "0";
    }

    else if (image.imageOne.getAttribute("src") == "4.jpg") {

        tag.tagText.style.opacity = "0";
        tag.tagText1.style.opacity = "0";
        tag.tagText2.style.opacity = "0";
        tag.tagText3.style.opacity = "1";
    }

}

arrowsContent.leftElement.addEventListener('mousedown', async () => {
    await resolveAfter0Seconds(arrowsContent.leftElement.style.transform = "scale(0.8) rotate(45deg)");

})

arrowsContent.leftElement.addEventListener('mouseup', async () => {

    await resolveAfter0Seconds(buttonBack());
    await resolveAfter0Seconds(arrowsContent.leftElement.style.transform = "scale(1)");
    await resolveAfter0Seconds(arrowsContent.leftElement.style.pointerEvents = "none");
    await resolveAfter0Seconds(arrowsContent.leftElement.setAttribute("disabled", "true"));
    await resolveAfter0Seconds(image.imageOne.setAttribute("class", "Two"));
    await resolveAfter200Seconds(addBack());
    await resolveAfter0Seconds(image.imageThree.style.opacity = "0");
    // await resolveAfter0Seconds(image.imageThree.remove(".Three"), image.carousal.insertBefore(image.imageThree, image.imageOne.nextSibling));
    await resolveAfter400Seconds(image.imageOne.style.opacity = "0");
    await resolveAfter0Seconds(image.imageTwo = document.querySelector(".Two"));
    await resolveAfter0Seconds(image.imageOne = document.querySelector(".One"));
    await resolveAfter0Seconds(image.imageThree.setAttribute("src", image.imageOne.getAttribute("src")));
    await resolveAfter0Seconds(fontColorChange());
    await resolveAfter0Seconds(image.imageOne.style.transform="scale(1.04)");
    await resolveAfter0Seconds(image.imageTwo.remove(".Two"));
    await resolveAfter0Seconds(arrowsContent.leftElement.setAttribute("disabled", "false"));
    await resolveAfter0Seconds(arrowsContent.leftElement.style.pointerEvents = "all");

})

arrowsContent.rightElement.addEventListener('mousedown', async () => {
    await resolveAfter0Seconds(arrowsContent.rightElement.style.transform = "scale(0.8) rotate(45deg)");


})

arrowsContent.rightElement.addEventListener('mouseup', async (e) => {

    await resolveAfter0Seconds(buttonBack());
    await resolveAfter0Seconds(arrowsContent.rightElement.style.transform = "scale(1)");
    await resolveAfter0Seconds(arrowsContent.rightElement.style.pointerEvents = "none");
    await resolveAfter0Seconds(arrowsContent.rightElement.setAttribute("disabled", "true"));
    await resolveAfter0Seconds(image.imageOne.setAttribute("class", "Two"));
    await resolveAfter200Seconds(addFront());
    await resolveAfter0Seconds(image.imageThree.style.opacity = "0");
    // await resolveAfter0Seconds(image.imageThree.remove(".Three"), image.carousal.insertBefore(image.imageThree, image.imageOne.nextSibling));
    await resolveAfter400Seconds(image.imageOne.style.opacity = "0");
    await resolveAfter0Seconds(image.imageTwo = document.querySelector(".Two"));
    await resolveAfter0Seconds(image.imageOne = document.querySelector(".One"));
    await resolveAfter0Seconds(image.imageThree.setAttribute("src", image.imageOne.getAttribute("src")));
    await resolveAfter0Seconds(fontColorChange());
    await resolveAfter0Seconds(image.imageOne.style.transform="scale(1.04)");
    await resolveAfter0Seconds(image.imageTwo.remove(".Two"));

    await resolveAfter0Seconds(arrowsContent.rightElement.setAttribute("disabled", "false"));
    await resolveAfter0Seconds(arrowsContent.rightElement.style.pointerEvents = "all");

    console.log(e);
})


function addAuto() {
    const src = image.imageThree.getAttribute("src");

    let imageNo;

    if (parseInt(src.slice(0, 1)) == 4) {
        imageNo = 1;
    }
    else { imageNo = parseInt(src.slice(0, 1)) + 1; }

    const nextImage = document.createElement("img");
    image.carousal.insertBefore(nextImage, image.imageThree);
    nextImage.setAttribute("class", `Three`);
    nextImage.setAttribute("src", `${imageNo}.jpg`);

    if (imageNo == 1) {
        buttonSlide.imageOne.style.transform = "scale(1.8)";

    }

    else if (imageNo == 2) {
        buttonSlide.imageTwo.style.transform = "scale(1.8)";

    }

    else if (imageNo == 3) {
        buttonSlide.imageThree.style.transform = "scale(1.8)";

    }

    else if (imageNo == 4) {
        buttonSlide.imageFour.style.transform = "scale(1.8)";

    }
}


async function next() {

    await resolveAfter0Seconds(image.imageThree.setAttribute("class", "Four"));
    await resolveAfter200Seconds(addAuto());
    await resolveAfter400Seconds(image.imageThree.style.opacity = "0");
    await resolveAfter0Seconds(image.imageFour = document.querySelector(".Four"));
    await resolveAfter0Seconds(image.imageThree = document.querySelector(".Three"));
    await resolveAfter0Seconds(image.imageOne.setAttribute("src", image.imageThree.getAttribute("src")));
    await resolveAfter0Seconds(fontColorChange());
    await resolveAfter0Seconds(image.imageThree.style.transform="scale(1.04)");
    await resolveAfter8000Seconds(image.imageFour.remove(".Four"));
    await resolveAfter0Seconds(buttonBack());
    // if()
    await resolveAfter0Seconds(next());

}

next();




function add(x) {


    let imageNo;
    imageNo = x;

    const nextImage = document.createElement("img");
    image.carousal.insertBefore(nextImage, image.imageOne);
    nextImage.setAttribute("class", `One`);
    nextImage.setAttribute("src", `${imageNo}.jpg`);

    if (imageNo == 1) {
        buttonSlide.imageOne.style.transform = "scale(1.8)"

    }

    else if (imageNo == 2) {
        buttonSlide.imageTwo.style.transform = "scale(1.8)"
    }

    else if (imageNo == 3) {
        buttonSlide.imageThree.style.transform = "scale(1.8)"
    }

    else if (imageNo == 4) {
        buttonSlide.imageFour.style.transform = "scale(1.8)"
    }
}

buttonSlide.imageOne.addEventListener('mousedown', async () => {
    buttonSlide.imageOne.style.transform = "scale(0.7)";
})

buttonSlide.imageOne.addEventListener('mouseup', async () => {
    await resolveAfter0Seconds(buttonBack());
    await resolveAfter0Seconds(buttonSlide.imageOne.style.transform = "scale(1)");
    await resolveAfter0Seconds(buttonSlide.imageOne.pointerEvents = "none");
    await resolveAfter0Seconds(buttonSlide.imageOne.setAttribute("disabled", "true"));
    await resolveAfter0Seconds(image.imageOne.setAttribute("class", "Two"));
    await resolveAfter200Seconds(add(1));
    await resolveAfter0Seconds(image.imageThree.style.opacity = "0");
    await resolveAfter400Seconds(image.imageOne.style.opacity = "0", tag.tagText.style.color = "black");

    await resolveAfter0Seconds(image.imageTwo = document.querySelector(".Two"));
    await resolveAfter0Seconds(image.imageOne = document.querySelector(".One"));
    await resolveAfter0Seconds(image.imageThree.setAttribute("src", image.imageOne.getAttribute("src")));
    await resolveAfter0Seconds(fontColorChange());
    await resolveAfter0Seconds(image.imageOne.style.transform="scale(1.04)");
    await resolveAfter0Seconds(image.imageTwo.remove(".Two"));
    await resolveAfter0Seconds(buttonSlide.imageOne.setAttribute("disabled", "false"));
    await resolveAfter0Seconds(buttonSlide.imageOne.style.pointerEvents = "all");

})

buttonSlide.imageTwo.addEventListener('mousedown', async () => {
    buttonSlide.imageTwo.style.transform = "scale(0.7)";
})

buttonSlide.imageTwo.addEventListener('mouseup', async () => {
    await resolveAfter0Seconds(buttonBack());
    await resolveAfter0Seconds(buttonSlide.imageTwo.style.transform = "scale(1)");
    await resolveAfter0Seconds(buttonSlide.imageTwo.pointerEvents = "none");
    await resolveAfter0Seconds(buttonSlide.imageTwo.setAttribute("disabled", "true"));
    await resolveAfter0Seconds(image.imageOne.setAttribute("class", "Two"));
    await resolveAfter200Seconds(add(2));
    await resolveAfter0Seconds(image.imageThree.style.opacity = "0");
    await resolveAfter400Seconds(image.imageOne.style.opacity = "0", tag.tagText.style.color = "black");

    await resolveAfter0Seconds(image.imageTwo = document.querySelector(".Two"));
    await resolveAfter0Seconds(image.imageOne = document.querySelector(".One"));
    await resolveAfter0Seconds(image.imageThree.setAttribute("src", image.imageOne.getAttribute("src")));
    await resolveAfter0Seconds(fontColorChange());
    await resolveAfter0Seconds(image.imageOne.style.transform="scale(1.04)");
    await resolveAfter0Seconds(image.imageTwo.remove(".Two"));
    await resolveAfter0Seconds(buttonSlide.imageTwo.setAttribute("disabled", "false"));
    await resolveAfter0Seconds(buttonSlide.imageTwo.style.pointerEvents = "all");



})

buttonSlide.imageThree.addEventListener('mousedown', async () => {
    buttonSlide.imageThree.style.transform = "scale(0.7)";
})

buttonSlide.imageThree.addEventListener('mouseup', async () => {
    await resolveAfter0Seconds(buttonBack());
    await resolveAfter0Seconds(buttonSlide.imageThree.style.transform = "scale(1)");
    await resolveAfter0Seconds(buttonSlide.imageThree.pointerEvents = "none");
    await resolveAfter0Seconds(buttonSlide.imageThree.setAttribute("disabled", "true"));
    await resolveAfter0Seconds(image.imageOne.setAttribute("class", "Two"));
    await resolveAfter200Seconds(add(3));
    await resolveAfter0Seconds(image.imageThree.style.opacity = "0");
    await resolveAfter400Seconds(image.imageOne.style.opacity = "0", tag.tagText.style.color = "black");
    await resolveAfter0Seconds(image.imageTwo = document.querySelector(".Two"));
    await resolveAfter0Seconds(image.imageOne = document.querySelector(".One"));
    await resolveAfter0Seconds(image.imageThree.setAttribute("src", image.imageOne.getAttribute("src")));
    await resolveAfter0Seconds(fontColorChange());
    await resolveAfter0Seconds(image.imageOne.style.transform="scale(1.04)");
    await resolveAfter0Seconds(image.imageTwo.remove(".Two"));
    await resolveAfter0Seconds(buttonSlide.imageThree.setAttribute("disabled", "false"));
    await resolveAfter0Seconds(buttonSlide.imageThree.style.pointerEvents = "all");

})

buttonSlide.imageFour.addEventListener('mousedown', async () => {
    buttonSlide.imageFour.style.transform = "scale(0.7)";
})

buttonSlide.imageFour.addEventListener('mouseup', async () => {
    await resolveAfter0Seconds(buttonBack());
    await resolveAfter0Seconds(buttonSlide.imageFour.style.transform = "scale(1)");
    await resolveAfter0Seconds(buttonSlide.imageFour.pointerEvents = "none");
    await resolveAfter0Seconds(buttonSlide.imageFour.setAttribute("disabled", "true"));
    await resolveAfter0Seconds(image.imageOne.setAttribute("class", "Two"));
    await resolveAfter200Seconds(add(4));
    await resolveAfter0Seconds(image.imageThree.style.opacity = "0");
    await resolveAfter400Seconds(image.imageOne.style.opacity = "0");
    await resolveAfter0Seconds(image.imageTwo = document.querySelector(".Two"));
    await resolveAfter0Seconds(image.imageOne = document.querySelector(".One"));
    await resolveAfter0Seconds(image.imageThree.setAttribute("src", image.imageOne.getAttribute("src")));
    await resolveAfter0Seconds(fontColorChange());
    await resolveAfter0Seconds(image.imageOne.style.transform="scale(1.04)");
    await resolveAfter0Seconds(image.imageTwo.remove(".Two"));
    await resolveAfter0Seconds(buttonSlide.imageFour.setAttribute("disabled", "false"));
    await resolveAfter0Seconds(buttonSlide.imageFour.style.pointerEvents = "all");

})






})
