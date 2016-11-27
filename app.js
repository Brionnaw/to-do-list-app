
	// Remove and complete icons in SVG format
	var removeSVG = '<i class="fa fa-trash-o" aria-hidden="true" style="font-size:30px;"></i>';
	var completeSVG = '<i class="fa fa-check-circle-o" aria-hidden="true" style="font-size:30px;"></i>'

	// User clicked on the add button
	// If there is any text inside the item field, add that text to the todo list
	document.getElementById('add').addEventListener('click', function() {
		var value = document.getElementById('item').value;
		if (value) {
			addItemTodo(value);
			document.getElementById('item').value = '';
		}
	});
  //  remove item
	function removeItem() {
		var item = this.parentNode.parentNode;
		var parent = item.parentNode;

		parent.removeChild(item);
	}
  // check item
	function completeItem() {
		var item = this.parentNode.parentNode;
		var parent = item.parentNode;
		var id = parent.id;

		// Check if the item should be added to the completed list or to re-added to the todo list
		var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

		parent.removeChild(item);
		target.insertBefore(item, target.childNodes[0]);
	}

	// Adds a new item to the todo list
	function addItemTodo(text) {
		var list = document.getElementById('todo');

		var item = document.createElement('li');
		item.innerText = text;

		var buttons = document.createElement('div');
		buttons.classList.add('buttons');

		var remove = document.createElement('button');
		remove.classList.add('remove');
		remove.innerHTML = removeSVG;

		// Add click event for removing the item
		remove.addEventListener('click', removeItem);

		var complete = document.createElement('button');
		complete.classList.add('complete');
		complete.innerHTML = completeSVG;

		// Add click event for completing the item
		complete.addEventListener('click', completeItem);

		buttons.appendChild(remove);
		buttons.appendChild(complete);
		item.appendChild(buttons);

		list.insertBefore(item, list.childNodes[0]);
	}
