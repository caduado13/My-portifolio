let progress = document.getElementsByClassName("progress");
let percent = document.getElementsByClassName("percent");
let nav = document.getElementById("nav");
let proj = document.getElementsByClassName("proj-content");
let intro = document.getElementsByClassName("intro-sct");
let txtArea = document.getElementById("msg");
let workContainer = document.querySelector(".work-container");

let mySkills = [
    {
        leng: "html",
        skill: 96,
    },{
        leng: "css",
        skill: 93,
    },{
        leng: "javascript",
        skill: 88,
    },{
        leng: "git",
        skill: 92,
    },{
        leng: "node",
        skill: 68,
    }
];
for(let i = 0; i < progress.length; i++){
    progress[i].style.width = `${mySkills[i].skill}%`
    percent[i].innerText = `${mySkills[i].skill}%`
};

if(window.matchMedia("(max-width:768px)").matches){
    nav.innerHTML = `
    <ul><li>
        <span>
            <i class="fas fa-bars nav-bars" id="bar" onclick = "appear()" style="padding:0px"></i>
        </span>
    </li></ul>
    ` 
    intro[0].innerHTML = `        
    <div class="intro-container wrap">
        <div class="intro-img" style="padding-top:100px;">
            <img src="./img/perfil.jpeg" alt="">
        </div>
        <div class="intro-content" style="padding: 100px 0;">
            <h1><span>&#128075 &#128075  &#128075</span>Hello, i'm Carlos Eduardo, <span style="color: #E63946;">Web developer</span> from Brazil!</h1>
        </div>
    </div>
    <div class="path"></div>`;
};

function back(){
    nav.innerHTML = `
    <ul><li>
        <span>
            <i class="fas fa-bars nav-bars" id="bar" onclick = "appear()" style="padding:0px"></i>
        </span>
    </li></ul>
    `;
};

function appear(){
    nav.innerHTML = `
    <ul>
        <li>   
            <span><i class="fa-solid fa-angle-left" style="color:#fff" id="back" onclick="back()"></i></span>   
        </li>
            <li class = "nav-animation1">
                <a "href="mailto:devcarlos.siqueira@gmail.com" target="_blank">
                    <span>Email</span>
                </a>
            </li>
            <li class = "nav-animation2">
                <a href="https://www.linkedin.com/in/carlos-eduardo-de-siqueira-306673153/" target="_blank">
                    <span>Linkedin</span>
                </a>
            </li>
            <li class = "nav-animation3">
                <a href="https://github.com/caduado13" target="_blank">
                    <span>GitHub</span>
                </a>
            </li>
    </ul>`;
};

const attributes =[
    {
        image: "./img/Todo-img.jpg",
        mobile: "./img/todo-mobile.png",
        tittle: "To do list",
        paragraph: "To do list to make things",
        linkV: "",
        linkG: "https://github.com/caduado13/Simple-to-do-list "
    },{
        image: "./img/dw-full.png",
        mobile: "./img/dw-mobile.png",
        tittle: "Drink Water app",
        paragraph: "Description",
        linkV: "",
        linkG: "https://github.com/caduado13/Drink-water-app"
    },{
        image: "./img/form-img.png",
        mobile: "./img/form-mobile.png",
        tittle: "Free code camp form",
        paragraph: "A form example with regular expressions to register",
        linkV: "",
        linkG: ""
    }
];
let even = "reveal", odd = "revealOp",
img = [], mob = [], tit = [], par = [], liV = [], liG = [];
for(let i = 0; i < attributes.length; i++){
    img.push(attributes[i].image)
    mob.push(attributes[i].mobile)
    tit.push(attributes[i].tittle)
    par.push(attributes[i].paragraph)
    liV.push(attributes[i].linkV)
    liG.push(attributes[i].linkG)
};
let projects = [
    createProject(img[0],mob[0],even,tit[0],par[0],liV[0],liG[0]),
    createProject(img[1],mob[1],odd,tit[1],par[1],liV[1],liG[1]),
    createProject(img[2],mob[2],even,tit[2],par[2],liV[2],liG[2]),
];
workContainer.innerHTML = projects;

const worksContent = document.querySelectorAll(".works-content");
worksContent.forEach(e =>{
    if( e.classList.contains("revealOp")){
        e.classList.add("reverse")
    }
});

function createProject(img,mob,anim,tit,par,liV,liG,){
    return`<div class="works-content  ${anim}">
    <div class="works">
        <img src="${img}" alt="" class="img-bg">
        <div class="tela-container">    
            <canvas  width= "150px" height="300px" class="tela"></canvas> 
            <img src="${mob}" alt="" class="canvas-img">
        </div>
    </div>
    <div class="proj-content">
        <h2>${tit}</h2>
        <span></span>
        <p>${par}</p>
        <div class="leng-used">
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-js"></i>
        </div>
        <a href="${liV}" target="_blank">
            <button class="visit-btn">
                Visit
                <i class="fa-solid fa-arrow-up-right-from-square hide"></i>
            </button>
        </a>
        <a href="${liG}" target="_blank">
            <button class="visit-btn">
                GitHub
                <i class="fa-solid fa-arrow-up-right-from-square hide"></i>
            </button>
        </a>
    </div>
    </div>`
}; 
