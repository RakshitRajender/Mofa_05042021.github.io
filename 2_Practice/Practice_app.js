window.addEventListener('load', ()=>{

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

const aContent = {
    element: document.querySelector(".actualContent")
}


const logo = {
    WhiteElement: document.querySelector("#whiteLogo"),
    BlackElement: document.querySelector("#blackLogo"),
    opacity: "1",
    opacityRevert: "0"
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

function resolveAfter2000Seconds(x, y) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x, y);

        }, 2000);
    });
}

function resolveAfter4000Seconds(x, y) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x, y);

        }, 4000);
    });
}

function resolveAfter5000Seconds(x, y) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x, y);

        }, 5000);
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
    contentBox.element.style.transform="scale(0.7)";
})

contentBox.element.addEventListener('mouseleave', ()=>{
    contentBox.element.style.transform="scale(1)";
})


contentText.project.addEventListener('mouseenter', () => {
    contentText.project.style.color = "grey"
})

contentText.practice.addEventListener('mouseenter', () => {
    contentText.practice.style.color = "grey"
})

contentText.team.addEventListener('mouseenter', () => {
    contentText.team.style.color = "grey"
})

// contentText.services.addEventListener('mouseenter', () => {
//     contentText.services.style.color = "grey"
// })

contentText.contact.addEventListener('mouseenter', () => {
    contentText.contact.style.color = "grey"
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






async function FirstFewLines()  {
    await resolveAfter400Seconds();
    await resolveAfter1600Seconds(document.querySelector("#line2").style.borderTop = "0.4mm solid rgb(240, 240, 240)");
    await resolveAfter2000Seconds(document.querySelector(".AtMofa").style.opacity = "1")
    await resolveAfter4000Seconds(document.querySelector(".WeBelieve").style.opacity = "1")
    await resolveAfter4000Seconds(document.querySelector(".ForOur").style.opacity = "1")
    await resolveAfter0Seconds(scroll());
}
 
FirstFewLines();

async function scroll() {
    await resolveAfter400Seconds(window.scrollTo({ top: 900, behavior: 'smooth' }));
    await resolveAfter6500Seconds(document.querySelector("#line3").style.opacity = "1", document.querySelector("#line3").style.borderTop = "0.4mm solid rgb(240, 240, 240)");

    await resolveAfter0Seconds(window.scrollTo({ top: 1900, behavior: 'smooth' }));
    await resolveAfter1600Seconds(document.querySelector("#line4").style.borderTop = "0.4mm solid rgb(240, 240, 240)");
    await resolveAfter2000Seconds(document.querySelector(".MofaEst").style.opacity = "1")
    await resolveAfter2000Seconds(document.querySelector(".bg1").style.opacity = "1")
    await resolveAfter2000Seconds(document.querySelector(".AtInception").style.opacity = "1")
    await resolveAfter4000Seconds(bg5())
    await resolveAfter2000Seconds(document.querySelector(".NowStrength").style.opacity = "1")
    await resolveAfter5000Seconds(bg18())
    
    await resolveAfter6500Seconds(document.querySelector(".bgBack").style.opacity="0", window.scrollTo({ top: 3200, behavior: 'smooth' }));

    
    await resolveAfter6500Seconds(window.scrollTo({ top: 4100, behavior: 'smooth' }));
    await resolveAfter0Seconds(window.scrollTo({ top: 6000, behavior: 'smooth' }), document.querySelector("html").style.overflowY="scroll");
    
}

async function bg5() {
   await resolveAfter400Seconds(document.querySelector(".bg2").style.opacity = "1")
   await resolveAfter400Seconds(document.querySelector(".bg3").style.opacity = "1")
   await resolveAfter400Seconds( document.querySelector(".bg4").style.opacity = "1")
   await resolveAfter400Seconds( document.querySelector(".bg5").style.opacity = "1")
   await resolveAfter400Seconds(document.querySelector(".bg6").style.opacity = "1")
}

async function bg18() {
    await resolveAfter200Seconds(document.querySelector(".bg7").style.opacity = "1")
    await resolveAfter200Seconds (document.querySelector(".bg8").style.opacity = "1")
    await resolveAfter200Seconds(document.querySelector(".bg9").style.opacity = "1")
    await resolveAfter200Seconds(document.querySelector(".bg10").style.opacity = "1")
    await resolveAfter200Seconds(document.querySelector(".bg11").style.opacity = "1")
    await resolveAfter200Seconds(document.querySelector(".bg12").style.opacity = "1")
    await resolveAfter200Seconds(document.querySelector(".bg13").style.opacity = "1")
    await resolveAfter200Seconds(document.querySelector(".bg14").style.opacity = "1")
    await resolveAfter200Seconds(document.querySelector(".bg15").style.opacity = "1")
    await resolveAfter200Seconds(document.querySelector(".bg16").style.opacity = "1")
    await resolveAfter200Seconds(document.querySelector(".bg17").style.opacity = "1")
    await resolveAfter200Seconds(document.querySelector(".bg18").style.opacity = "1")
}



document.querySelector("#Proj").addEventListener('mouseenter', () => {
    document.querySelector("#Proj").style.color = "grey";
})

document.querySelector("#Proj").addEventListener('mouseleave', () => {
    document.querySelector("#Proj").style.color = "white";
})

document.querySelector("#Proj").addEventListener('mouseup', async () => {
    await resolveAfter400Seconds(document.querySelector("#Proj").style.transform = "scale(1)");
    await resolveAfter0Seconds(window.location = "https://rakshitrajender.github.io/Mofa_16032021.github.io/1_Project/Project_index.html");
})

document.querySelector("#Proj").addEventListener('mousedown', () => {
    document.querySelector("#Proj").style.transform = "scale(0.9)"
})




document.querySelector("#Team").addEventListener('mouseenter', () => {
    document.querySelector("#Team").style.color = "grey"
})

document.querySelector("#Team").addEventListener('mouseleave', () => {
    document.querySelector("#Team").style.color = "white"
})

document.querySelector("#Team").addEventListener('mouseup', async () => {
    await resolveAfter400Seconds(document.querySelector("#Team").style.transform = "scale(1)");
    await resolveAfter0Seconds(window.location = "https://rakshitrajender.github.io/Mofa_16032021.github.io/3_Team/Team_index.html");
})

document.querySelector("#Team").addEventListener('mousedown', () => {
    document.querySelector("#Team").style.transform = "scale(0.9)"
})



document.querySelector("#Cont").addEventListener('mouseenter', () => {
    document.querySelector("#Cont").style.color = "grey"
})

document.querySelector("#Cont").addEventListener('mouseleave', () => {
    document.querySelector("#Cont").style.color = "white"
})

document.querySelector("#Cont").addEventListener('mouseup', async () => {
    await resolveAfter400Seconds(document.querySelector("#Cont").style.transform = "scale(1)");
    await resolveAfter0Seconds(window.location = "https://rakshitrajender.github.io/Mofa_16032021.github.io/5_Contact/Contact_index.html");
})

document.querySelector("#Cont").addEventListener('mousedown', () => {
    document.querySelector("#Cont").style.transform = "scale(0.9)"
})

})