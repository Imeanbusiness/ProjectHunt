var device = "null"

const ua = navigator.userAgent
if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
  device = "phone"
} else if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
  device = "tablet"
} else {
  device = "dektop"
}
var w = window.innerWidth;
if (device == "phone" || w <= 1000) {
  document.getElementById("maind").style.paddingLeft = "0px";
  document.getElementById("maind").style.paddingRight = "0px";

}




