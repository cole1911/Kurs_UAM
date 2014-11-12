window.onload = function() {
	var buttonAdd = document.querySelector("button.add_btn");
	
	var list = document.querySelector("ul");
	var input = document.querySelector("input");
	
	buttonAdd.addEventListener('click', function () {
			var content = input.value;
			if(content) {
				var liElement = document.createElement("li");
				liElement.textContent = content;
				liElement.appendChild(createButton());
				list.appendChild(liElement);
				input.value = "";
			}
	});



	var createButton = function() {
		var button = document.createElement("button");
		button.id = "remove";
		button.textContent = "Remove";
		button.addEventListener('click', removeClick, event); 
		return button;
	}

	var removeClick = function(event) {
		var elToRemove = getRemovedLiElement(event.target);
		elToRemove.style.opacity = 0;
		setTimeout(function() {list.removeChild(elToRemove);},500);
		console.log("");
	}

	var getRemovedLiElement = function(targetElement) {
		var tempEl = targetElement
		while(tempEl.tagName != "LI") {
			tempEl = tempEl.parentNode;
		}
		return tempEl;
	}
	

};

