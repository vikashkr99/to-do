function loaded() {

    let key = window.localStorage.getItem('to-do');

    var count = 0;

    function createLi(count, i, stored_data) {
        let li = document.createElement("li");
        let textnode = document.createTextNode(i);
        li.appendChild(textnode);
        let icons = document.createElement("div");
        icons.className = "icons";
        li.appendChild(icons);
        if (stored_data[i] === true) {
            icons.appendChild(createTick());
            icons.appendChild(createTrash());
        }
        else if (stored_data[i] === false){
            icons.appendChild(createNotDone(count));
            icons.appendChild(createTrash());
        }
        return li;
    }

    function createTrash() {
        let trash = document.createElement("i");
        trash.className = "fas fa-trash";
        trash.onclick = removeItem;
        return trash;
    }

    function createTick() {
        let tick = document.createElement("i");
        tick.className = "fas fa-check fa-lg";
        return tick;
    }

    function createNotDone( id ) {
        let notDoneBox = document.createElement("div");
        notDoneBox.className = "not-done";
        notDoneBox.id = id;
        notDoneBox.onclick = doneFunction;
        return notDoneBox;
    }

    function setItems(stored_data) {
        window.localStorage.setItem('to-do', JSON.stringify(stored_data));
    }


    if (key === null) {
        alert('Welcome New User');
        window.localStorage.setItem('to-do', '{}');
    }

    else {
        var stored_data = JSON.parse(localStorage.getItem('to-do'));
        for (i in stored_data) {
            count++;
            document.getElementById('view_list').appendChild(createLi(count, i, stored_data));
        }
    }


    document.getElementById('add_command').addEventListener('click', function () {
        
        let userText = document.getElementById('userInput').value;

        if (userText.length == 0) {
            alert("Input Field Empty!");
        }

        else {
            stored_data[userText] = false;
            document.getElementById('view_list').appendChild(createLi(null, userText, stored_data));
            document.getElementById('userInput').value = "";
            setItems(stored_data);
        }

    });

    function doneFunction(event) {
        let doneItem = event.target.parentElement;
        stored_data[doneItem.parentElement.textContent] = true;
        setItems(stored_data);
        doneItem.appendChild(createTick());
        doneItem.appendChild(createTrash());
        doneItem.firstChild.remove();
        doneItem.firstChild.remove();
    }

    function removeItem(event) {
        let deleteItem = event.target.parentElement.parentElement;
        delete stored_data[deleteItem.textContent];
        setItems(stored_data);
        deleteItem.remove();
    }

}