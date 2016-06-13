var slideNum = 1;
var slideOneNum = document.getElementsByClassName("waffle_iron")[0].getAttribute("data-slide-num");
var slideTwoNum = document.getElementsByClassName("waffle_iron")[1].getAttribute("data-slide-num");
var slideThreeNum = document.getElementsByClassName("waffle_iron")[2].getAttribute("data-slide-num");
function updateWaffle() {
	if (slideOneNum != slideNum) {
		document.getElementsByClassName("waffle_iron")[0].style.visibility = "hidden";
	} else if (slideOneNum == slideNum) {
		document.getElementsByClassName("waffle_iron")[0].style.visibility = "visible";
	}
	if (slideTwoNum != slideNum) {
		document.getElementsByClassName("waffle_iron")[1].style.visibility = "hidden";
	} else if (slideTwoNum == slideNum) {
		document.getElementsByClassName("waffle_iron")[1].style.visibility = "visible";
	}
	if (slideThreeNum != slideNum) {
		document.getElementsByClassName("waffle_iron")[2].style.visibility = "hidden";
	} else if (slideThreeNum == slideNum) {
		document.getElementsByClassName("waffle_iron")[2].style.visibility = "visible";
	}
}
function changeNCheck(c,slideMax) {
	slideNum += c;
	if (slideNum > slideMax) {
		slideNum = 1;
	} else if (slideNum < 1) {
		slideNum = 3;
	}
	updateWaffle();
}
updateWaffle();