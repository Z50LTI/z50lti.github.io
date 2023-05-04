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

        console.log(list);
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
}