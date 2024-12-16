//Changer l'image du logo
document.getElementsByTagName("img")[0].src =
  "https://www.webyn.ai/user/themes/webyn/images/logo/logo-webyn.webp";

//Changer la taille de l'image
document.getElementsByTagName("img")[0].width = 300;
document.getElementsByTagName("img")[0].height = 60;

//Changer le texte
document.getElementsByTagName("h1")[1].innerHTML =
  "Generate<span style='color : #0ea5e9;'> more revenue  </span>with your website!";

//Changer le texte de la description

const text =
  "97% of your trafic does not convert. Webyn automatically generates improvements on your website to maximise your conversions. \n100% No-Code.";
document.getElementsByTagName("p")[0].innerText = text;


//Changer les boutons
document.getElementsByTagName("button")[4].innerHTML = "Book a demo";
document.getElementsByTagName("button")[5].innerHTML = "Analyse my Website →";

document.getElementsByTagName("button")[4].style.borderRadius = "30px";
document.getElementsByTagName("button")[4].style.backgroundColor = "#0ea5e9";
document.getElementsByTagName("button")[5].style.borderRadius = "30px";