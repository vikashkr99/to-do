function loaded() {

    document.getElementById('add_command').addEventListener('click', function () {
        
        let userText = document.getElementById('userInput').value;

        if (userText.length == 0) {
            alert("Input Field Empty!");
        }

        else {
            let li = document.createElement("li");
            let textnode = document.createTextNode(userText);
            li.appendChild(textnode);
            document.getElementById('view_list').appendChild(li);
        }


    });





















}