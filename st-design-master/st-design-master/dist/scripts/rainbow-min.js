const color_picker_1=document.querySelector("#color1"),color_picker_2=document.querySelector("#color2"),color_picker_3=document.querySelector("#color3"),color_picker_4=document.querySelector("#color4"),color_picker_5=document.querySelector("#color5"),color_picker_6=document.querySelector("#color6"),color_picker_7=document.querySelector("#color7"),boxShadow="0px 0px 1.5vw";function updateColor(o,e){document.querySelector(e).style.borderColor=o,document.querySelector(e).style.boxShadow=`${boxShadow} ${o}`}function reset(){document.querySelector("input[name='rainbow-color-number']").checked=!0}function setRainbow(o){let e=document.querySelector("#rainbowBase");color_picker_6.style.display="none",color_picker_7.style.display="none",e.innerHTML="";for(let r=1;r<=o;r++){let o=document.createElement("li"),t="";switch(r){case 1:o.setAttribute("id","firstColor"),t=color_picker_1.dataset.currentColor,o.style.borderColor=t,o.style.boxShadow=boxShadow+t;break;case 2:o.setAttribute("id","secondColor"),t=color_picker_2.dataset.currentColor,o.style.borderColor=t,o.style.boxShadow=boxShadow+t;break;case 3:o.setAttribute("id","thirdColor"),t=color_picker_3.dataset.currentColor,o.style.borderColor=t,o.style.boxShadow=boxShadow+t;break;case 4:o.setAttribute("id","fourthColor"),t=color_picker_4.dataset.currentColor,o.style.borderColor=t,o.style.boxShadow=boxShadow+t;break;case 5:o.setAttribute("id","fifthColor"),t=color_picker_5.dataset.currentColor,o.style.borderColor=t,o.style.boxShadow=boxShadow+t;break;case 6:o.setAttribute("id","sixthColor"),t=color_picker_6.dataset.currentColor,o.style.borderColor=t,o.style.boxShadow=boxShadow+t,color_picker_6.style.display="block";break;case 7:o.setAttribute("id","seventhColor"),t=color_picker_7.dataset.currentColor,o.style.borderColor=t,o.style.boxShadow=boxShadow+t,color_picker_7.style.display="block";break}e.append(o)}}document.querySelectorAll("input[name='rainbow-color-number']").forEach((o=>{o.addEventListener("change",(o=>{setRainbow(o.target.value)}))}));