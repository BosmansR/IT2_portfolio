// hier komt je code
// console.log("Hallo wereld!");

// hamburger menu

let toggleNavStatus = false;

document.querySelector("#btn-hamburger").addEventListener("click", function() {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarLinks = document.querySelectorAll (".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.visibility = "visible";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
        getSidebarLinks[i].style.opacity = "1";
    }
    toggleNavStatus = true;
  }   else if (toggleNavStatus === true) {
      getSidebarUl.style.visibility = "hidden";
      getSidebar.style.visibility = "hidden";

      let arrayLength = getSidebarLinks.length;
      for (let i = 0; i < arrayLength; i++) {
          getSidebarLinks[i].style.opacity = "0";
      }
      toggleNavStatus = false;
    }
}
);

// light/darkmode

document.querySelector("#light-dark").addEventListener("click", function() {
// body reskin
let mijnBody = document.querySelector("body")
let huidigeKlasseBody = mijnBody.className;
mijnBody.className = huidigeKlasseBody == "lightmode" ? "darkmode" : "lightmode";

// header reskin
let mijnHeader = document.querySelector("header")
let huidigeKlasseHeader = mijnHeader.className;
mijnHeader.className = huidigeKlasseHeader == "lightmode" ? "darkmode" : "lightmode";

// btn-hamburger reskin
let mijnHamburgerKnop = document.querySelector("#btn-hamburger")
let huidigeKlasseHamburgerKnop = mijnHamburgerKnop.className;
mijnHamburgerKnop.className = huidigeKlasseHamburgerKnop == "lightmode" ? "darkmode" : "lightmode";

// light-dark reskin
let mijnLichtknop = document.querySelector("#light-dark")
let huidigeKlasseLichtknop = mijnLichtknop.className;
mijnLichtknop.className = huidigeKlasseLichtknop == "lightmode" ? "darkmode" : "lightmode";

// h2 reskin
let mijnH2 = document.querySelectorAll("h2")
let huidigeKlasseH2;
let i = 0
while (i < mijnH2.length) {
huidigeKlasseH2 = mijnH2[i].className;
mijnH2[i].className = huidigeKlasseH2 == "lightmode" ? "darkmode" : "lightmode";
i++
}

// h3 reskin
let mijnH3 = document.querySelectorAll("h3")
let huidigeKlasseH3;
let i2 = 0
while (i2 < mijnH3.length) {
huidigeKlasseH3 = mijnH3[i2].className;
mijnH3[i2].className = huidigeKlasseH3 == "lightmode" ? "darkmode" : "lightmode";
i2++
}

// p reskin
let mijnP = document.querySelectorAll("p")
let huidigeKlasseP
i3 = 0
while (i3 < mijnP.length) {
huidigeKlasseP = mijnP[i3].className;
mijnP[i3].className = huidigeKlasseP == "lightmode" ? "darkmode" : "lightmode";
i3++
}

})
