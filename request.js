// Using XMLHttpRequest                
function loadUsersJson() {               
    var xhttp = new XMLHttpRequest();               
    xhttp.onreadystatechange = function() {                
        if (this.readyState == 4 && this.status == 200) {                
            var myObj = JSON.parse(this.responseText);               
            //Sort by email ID               
            myObj.sort(function(a, b) {                
                    return a.email.toLowerCase() > b.email.toLowerCase()                
            });               
            // Print email IDS               
            var jsonArray = [];              
            for (x in myObj) {               
                jsonArray.push(myObj[x].email);               
            }               
            document.getElementById("XMLHttpRequestDemo").innerHTML = jsonArray;              
            }              
        };              
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);               
        xhttp.send();               
    }              
    // Using Fetch                     
    function loadUserJSONUseFetch(){               
        fetch('https://jsonplaceholder.typicode.com/users')              
        .then(               
            function(response) {                
                console.log(response);              
                if (response.status !== 200) {              
                return;              
                }             
                response.json().then(function(data) {              
                    //Sort by user name length             
                        data.sort(function(a, b) {              
                            return a.username.length > b.username.length;              
                        });             
                        // Print email IDS              
                        var jsonArray = [];             
                        for (x in data) {             
                            jsonArray.push(data[x].username);             
                        }              
                        document.getElementById("fetchRequestDemo").innerHTML = jsonArray;             
                });             
            }              
        )              
        .catch(function(err) {             
            console.log('Fetch Error :-S', err);             
        });              
    }              