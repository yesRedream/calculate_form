var selectedCleantype = document.forms["cleantypeForm"].elements["cleantypes"];

var cleantype_time = new Array();
cleantype_time["Standart"]=2;
cleantype_time["Standard Plus"]=3;
cleantype_time["Deep Clean"]=5;
cleantype_time["Moving In/Out"]=5;


function getCleantypeTime() {
    var cleantypeTime=0;

    for(var i = 0; i < selectedCleantype.length; i++) {
        if(selectedCleantype[i].checked) {
            cleantypeTime = cleantype_time[selectedCleantype[i].value];
            document.getElementById("cleantypeCount").innerHTML=selectedCleantype[i].value;
            break;
        }
    }
    return cleantypeTime;
}

var bedroom_time_standart = new Array();
bedroom_time_standart["Studio"]=0;
bedroom_time_standart["1"]=0.25;
bedroom_time_standart["2"]=0.5;
bedroom_time_standart["3"]=0.75;
bedroom_time_standart["4"]=1;
bedroom_time_standart["5"]=1.25;

var bedroom_time_plus = new Array();
bedroom_time_plus["Studio"]=0;
bedroom_time_plus["1"]=0.5;
bedroom_time_plus["2"]=0.75;
bedroom_time_plus["3"]=1.25;
bedroom_time_plus["4"]=1.5;
bedroom_time_plus["5"]=2;

var bedroom_time_deep = new Array();
bedroom_time_deep["Studio"]=0;
bedroom_time_deep["1"]=0.75;
bedroom_time_deep["2"]=1.25;
bedroom_time_deep["3"]=2;
bedroom_time_deep["4"]=2.5;
bedroom_time_deep["5"]=3.25;


function getBedroomsTime() {
    var bedroomTime=0;
    var theForm = document.forms["bedroomForm"];
    var selectedBedroom = theForm.elements["bedrooms"];

    for(var i = 0; i < selectedBedroom.length; i++) {
        if(selectedBedroom[i].checked) {
        	if(selectedCleantype[0].checked) {
            	bedroomTime = bedroom_time_standart[selectedBedroom[i].value];
        	}
        	else if(selectedCleantype[1].checked) {
            	bedroomTime = bedroom_time_plus[selectedBedroom[i].value];
        	}

        	else if(selectedCleantype[2].checked || selectedCleantype[3].checked) {
            	bedroomTime = bedroom_time_deep[selectedBedroom[i].value];
        	}

            document.getElementById("bedroomsCount").innerHTML=selectedBedroom[i].value;
            break;
        }
    }
    return bedroomTime;
}

var bathrooms_time_standart = new Array();
bathrooms_time_standart["1"]=0;
bathrooms_time_standart["2"]=0.5;
bathrooms_time_standart["3"]=1;
bathrooms_time_standart["4"]=1.5;
bathrooms_time_standart["5"]=2;

var bathrooms_time_plus = new Array();
bathrooms_time_plus["1"]=0;
bathrooms_time_plus["2"]=0.75;
bathrooms_time_plus["3"]=1.5;
bathrooms_time_plus["4"]=2.25;
bathrooms_time_plus["5"]=3;

var bathrooms_time_deep = new Array();
bathrooms_time_deep["1"]=0;
bathrooms_time_deep["2"]=1.25;
bathrooms_time_deep["3"]=2.5;
bathrooms_time_deep["4"]=3.75;
bathrooms_time_deep["5"]=5;

function bathroomsTime() {
    var bathroomTime=0;
    var theForm = document.forms["bathroomForm"];
    var selectedBathroom = theForm.elements["bathrooms"];

    for(var i = 0; i < selectedBathroom.length; i++) {
        if(selectedBathroom[i].checked) {
        	if(selectedCleantype[0].checked) {
                bathroomTime = bathrooms_time_standart[selectedBathroom[i].value];
        	}
        	else if(selectedCleantype[1].checked) {
                bathroomTime = bathrooms_time_plus[selectedBathroom[i].value];
        	}

        	else if(selectedCleantype[2].checked || selectedCleantype[3].checked) {
            	bathroomTime = bathrooms_time_deep[selectedBathroom[i].value];
        	}

            document.getElementById("bathroomsCount").innerHTML=selectedBathroom[i].value;
            break;
        }
    }
    return bathroomTime;
}

function getTotal() {

    var cakePrice = getCleantypeTime()+getBedroomsTime()+bathroomsTime();

    document.getElementById("cleanTime").innerHTML="~"+cakePrice+' hours';

    var totalPrice = Math.ceil(cakePrice*34.5);

    document.getElementById("sumPrice").innerHTML=totalPrice+'$';
}


window.onload = getTotal;
window.onchange = getTotal;