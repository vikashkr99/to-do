function loaded() {

    let key = window.localStorage.getItem('to-do');
    if (key === null) {
        alert('Welcome New User');
        window.localStorage.setItem('to-do', '[]');
    }

    else {
        var stored_data = JSON.parse(localStorage.getItem('to-do'));
        for (i in stored_data) {
            let li = document.createElement("li");
            let textnode = document.createTextNode(stored_data[i]);
            li.appendChild(textnode);
            document.getElementById('view_list').appendChild(li);
        }
    }

    document.getElementById('add_command').addEventListener('click', function () {
        
        let userText = document.getElementById('userInput').value;

        if (userText.length == 0) {
            alert("Input Field Empty!");
        }

        else {
            stored_data.push(userText);
            let li = document.createElement("li");
            let textnode = document.createTextNode(userText);
            li.appendChild(textnode);
            document.getElementById('view_list').appendChild(li);
            document.getElementById('userInput').value = "";
            window.localStorage.setItem('to-do', JSON.stringify(stored_data));
        }

    });


}