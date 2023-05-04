let drinkList = [];
let categoryList = [];

let nickelPackageList = ["Pina Colada", "Shirley Temple"]

var formPage1 = document.getElementById("form-page-1");
var formPage2 = document.getElementById("form-page-2");

var minimenu = document.getElementById("minimenu");
function showMenu(drink) {
    try {
        var title = drink.getAttribute("data-title");
        var text = drink.getAttribute("data-text");
        var list = document.createElement("ul");
        var items = text.split(",");
        for (var i = 0; i < items.length; i++) {
            var item = document.createElement("li");
            var p = document.createElement("h4");
            p.textContent = items[i];
            item.appendChild(p);
            list.appendChild(item);
        }

        /* console.log(list); */
        document.getElementById("miniMenuTitle").innerHTML = title;

        // remove all child elements of minimenu except the first one

        while (minimenu.children.length > 1) {
            minimenu.removeChild(minimenu.lastChild);
        }
        // append the new list to the minimenu
        minimenu.appendChild(list);
    } catch {
        console.error();
    }

    drink.nextElementSibling.classList.toggle('show-overlay');
    addDrinkToList(drink);

}

function addDrinkToList(element) {

    let drinkTitle = element.getAttribute('data-title');
    let drinkCategory = element.getAttribute('data-category');

    if (!drinkList.includes(drinkTitle)) {
        drinkList.push(drinkTitle);
        // add the category to the categoryList if it is not already there
        if (!categoryList.includes(drinkCategory)) {
            categoryList.push(drinkCategory);
        }
    } else {
        var index = drinkList.indexOf(drinkTitle);
        if (index > -1) { // if the value exists in the array
            drinkList.splice(index, 1); // remove one element at that index
            // check if the category is still needed in the categoryList
            let categoryNeeded = false;
            for (let drink of drinkList) {
                if (element.getAttribute('data-category') == drinkCategory) {
                    categoryNeeded = true;
                    break;
                }
            }
            // if the category is not needed, remove it from the categoryList
            if (!categoryNeeded) {
                var categoryIndex = categoryList.indexOf(drinkCategory);
                if (categoryIndex > -1) {
                    categoryList.splice(categoryIndex, 1);
                }
            }
        }
    }

    /* console.log(drinkList); */

    updateInputField();
}

function updateInputField() {
    let inputField = document.getElementById('drinks');
    let drinkListString = drinkList.join(', ');
    inputField.value = drinkListString;

    /* console.log(inputField.value) */
}

function checkForm() {
    let elements = document.getElementById('quote-form').elements;
    let valid = true;
    for (let i = 0; i < elements.length; i++) {

        if (!elements[i].checkValidity()) {
            valid = false;
            /* console.log(elements[i]); */
            
            window.scrollTo(0,0);
            elements[i].reportValidity();
            break;
        }
    }
    if (valid) {
        showSelectedDrinks();
    }
}

function showSelectedDrinks() {

    window.scrollTo(0, 0);
    document.getElementById('review-firstname').innerText = document.getElementById('firstname').value;
    document.getElementById('review-lastname').innerText = document.getElementById('lastname').value;
    document.getElementById('review-company').innerText = document.getElementById('company').value;
    document.getElementById('review-email').innerText = document.getElementById('email').value;
    document.getElementById('review-phone').innerText = document.getElementById('phone').value;
    document.getElementById('review-eventtype').innerText = document.getElementById('eventtype').value;
    document.getElementById('review-eventdate').innerText = document.getElementById('eventdate').value;
    document.getElementById('review-venueaddress').innerText = document.getElementById('venueaddress').value;
    document.getElementById('review-durationofevent').innerText = document.getElementById('durationofevent').value;
    document.getElementById('review-guestcount').innerText = document.getElementById('guestcount').value;
    document.getElementById('review-tipjar').innerText = document.getElementById('tipjar').value;
    document.getElementById('review-packagetype').innerText = document.getElementById('packagetype').value;

    if (document.getElementById('power').selectedIndex > 0){
        document.getElementById('review-power').innerText = document.getElementById('power').value;
    }else{
        document.getElementById('review-power').innerText = "-";
    }
    
    document.getElementById('quote-container').style.display = 'none';
    document.getElementById('reviews-container').style.display = 'block';

    var drinkBoxes = document.getElementsByClassName('drink-review');
    for (var i = 0; i < drinkBoxes.length; i++) {
        drinkBoxes[i].style.display = 'none';
        if (drinkList.includes(drinkBoxes[i].getAttribute('data-title'))) {
            drinkBoxes[i].style.display = 'block';
        }
    }

    let reviewCategories = document.querySelectorAll(".review-category");

    // Loop through each review-category element
    for (let reviewCategory of reviewCategories) {
        // Get all the drink-box elements inside the review-category element
        let drinkBoxes = reviewCategory.querySelectorAll(".drink-box");
        // Initialize a flag to indicate if all the drink-box elements are hidden
        let allHidden = true;
        // Loop through each drink-box element
        for (let drinkBox of drinkBoxes) {
            // Check if the drink-box element has the style.display attribute set to none
            if (drinkBox.style.display !== "none") {
                // If not, set the flag to false and break the loop
                allHidden = false;
                break;
            }
        }
        // If the flag is true, set the style.display attribute of the review-category element to none
        if (allHidden) {
            reviewCategory.style.display = "none";
        } else {
            // Otherwise, set the style.display attribute of the review-category element to block or whatever value you prefer
            reviewCategory.style.display = "block";
        }
    }
    /* console.log(drinkList); */
}

function editForm() {
    document.getElementById('quote-container').style.display = 'block';
    document.getElementById('reviews-container').style.display = 'none';
}

function submitForm() {
    document.getElementById('quote-form').submit()
}

function powerAllowed() {
    var selected = document.getElementById('packagetype').value;

    if (selected == "Nickel" || selected == "Coin" || selected == "Sterling" || selected == "Fine") {
        document.getElementById('power').style.display = "block";
        document.getElementById('lb_power').style.display = "block";
        document.getElementById('power').required = true;
        
    } else {
        document.getElementById('power').style.display = "none";
        document.getElementById('lb_power').style.display = "none";
        document.getElementById('power').required = false;
        document.getElementById('power').selectedIndex = 0;
    }

    var selectedImgTags = document.querySelectorAll('.drink-box > img');

    if (selected == "Coin") {
        selectedImgTags.forEach(function (el) {
            el.classList.add('unselectable')
        })
    } else if(selected == "Sterling" || selected == "Fine" || selected == "Paper"){
        selectedImgTags.forEach(function (el) {
            el.classList.remove('unselectable');
        })
    }else if(selected == "Nickel"){
        selectedImgTags.forEach(function (el) {
            if (!nickelPackageList.includes(el.getAttribute('data-title')))
            el.classList.add('unselectable')
        })
    }

    var removeSelected = document.querySelectorAll(".overlay");

    removeSelected.forEach(x =>{
        x.classList.remove("show-overlay");
    })

    drinkList = [];
    categoryList = [];

    /* console.log(drinkList);
    console.log(categoryList); */
}

function otherAllowed() {
    var selected = document.getElementById('eventtype').value;

    if (selected == "Other") {
        document.getElementById('othereventtype').style.display = "block";
        document.getElementById('lb_othereventtype').style.display = "block";
        document.getElementById('othereventtype').required = true;
    } else {
        document.getElementById('othereventtype').style.display = "none";
        document.getElementById('lb_othereventtype').style.display = "none";
        document.getElementById('othereventtype').required = false;
    }
}