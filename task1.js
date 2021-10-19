console.log("Dom");
const btn1 = document.querySelector("#btn1")
const funn= ()=> {
  const f1 = document.querySelector(".head")  
  f1.style.fontSize = "50px"
}
btn1.addEventListener("click", funn)


const pra1 = document.querySelector("#btn2")
const fun2 = ()=> {
    const f2 = document.querySelector(".p1")
    f2.style.fontFamily= "verdana"
}
btn2.addEventListener("click", fun2)

const pra2 = document.querySelector("#btn3")
const fun3 = () => {
  const f3 = document.querySelector(".p1")
  f3.style.backgroundColor = "red";

}
btn3.addEventListener("click", fun3)

//______________________________
const HideImage = () => {
  const image = document.getElementById("pyImg");
  image.style.display = "none";
};
const hideImageButton = document.getElementById("hideImage");
hideImageButton.addEventListener("click", HideImage);

// _______________________________

const alternateImage = () => {
  const image = document.getElementById("jsImg");
  if (
    image.src ==
    "https://joya.info/images/content/438914-1200x700c56x50-Kaffee-mit-pflanzlicher-Milch-Barista_1200x798.jpg"
  ) {
    image.src =
      "https://blog.warriorcoffee.com/hubfs/_MG_3386.jpg";
  } else {
    image.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjT7h4bAY3MTz8WY8aNwWaU0Zxv1teAuptE8u83Fi4mzosVP162_xmocmEY755YvLbIJ0&usqp=CAU";
  }
};

const alternateImageButton = document.getElementById("alternateImage");
alternateImageButton.addEventListener("click", alternateImage);

//__________________________________

const changeImage = (event) => {
  const image = document.getElementById("cImg");
  if (event.currentTarget.alt === "c logo") {
    image.alt = "ruby on rails logo";
    image.src =
      "https://lebanonajel.com/wp-content/uploads/2021/10/coffee-%D9%82%D9%87%D9%88%D8%A9.jpg";
  } else {
    image.alt = "c logo";
    image.src =
      "https://cdn2.nogarlicnoonions.com/images/thumbs/image.php?width=2000&height=2000&image=/images/articles/2021-07/best-coffee-beans-luxe-digital2021-07-11-10-19-37.jpg";
  }
};

const cImage = document.getElementById("cImg");
cImage.addEventListener("mouseenter", changeImage);
cImage.addEventListener("mouseleave", changeImage);

//_______________________

const rightClickImage = () => {
  alert("You right clicked on an image");
};

const imagesRightClick = document.querySelectorAll("img");
imagesRightClick.forEach((element) => {
  element.addEventListener("contextmenu", rightClickImage);
});

//______________________________________

const enteredData = () => {
  alert("You entered data in the input");
};
const input = document.getElementById("input");
input.addEventListener("input", enteredData);

//______________________________________

const pageLoaded = () => {
  alert("The page is fully loaded");
};

window.addEventListener("load", pageLoaded);

// _____________________________

const highlightP = (event) => {
  const paragraphs = document.querySelectorAll("p");
  if (event.currentTarget.style.backgroundColor === "lightblue") {
    paragraphs.forEach((element) => {
      element.style.backgroundColor = "white";
    });
  } else {
    paragraphs.forEach((element) => {
      element.style.backgroundColor = "lightblue";
    });
  }
};

const highlightParagraphs = document.querySelectorAll("p");
highlightParagraphs.forEach((element) => {
  element.addEventListener("mouseenter", highlightP);
  element.addEventListener("mouseleave", highlightP);
});