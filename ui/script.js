/*----------------------------DOM Hook Access-----------------------------*/
let homeFeeds = document.getElementById("home-feeds");
let myPost = document.getElementById("my-post");
let inputQuestion = document.getElementById("input-question");
let postButton = document.getElementById("post-button");
let postTopQuestion = document.getElementById("post-top-question");
let postTopButton = document.getElementById("post-top-button");
let deleteButton = document.getElementById("delete-button");

/*--------------------------------------------------------------------------------------*/
const postUsersQuestion1 = () => {

    if(inputQuestion.value == "") {
        return alert ("Please you cannot post an empty message...");
    };

    
    let article = document.createElement("article");
    let klass1 = document.createAttribute("class");
    klass1.value = "my-post";
    article.setAttributeNode(klass1)
/*--------------------------------------------------------------------------------------*/
    let img = document.createElement("img");
    let klass2 = document.createAttribute("class");
    klass2.value = "other-users-avatar";
    img.setAttributeNode(klass2);

    let alt = document.createAttribute("alt");
    alt.value = "profile-avatar";
    img.setAttributeNode(alt);

    let source = document.createAttribute("src");
    source.value = "images/avatar.png";
    img.setAttributeNode(source);
/*--------------------------------------------------------------------------------------*/
    let label = document.createElement("label"); //No attribute
/*--------------------------------------------------------------------------------------*/
    let anchor = document.createElement("a");
    let link = document.createAttribute("href");
    link.value = "#";
    anchor.setAttributeNode(link);

    let text2 = document.createTextNode("Victoria Chidinmma"); //User
    anchor.appendChild(text2);
/*--------------------------------------------------------------------------------------*/
    let paragraph = document.createElement("p"); //No attribute
/*--------------------------------------------------------------------------------------*/
    let input = document.createElement("input");
    let type = document.createAttribute("type");
    type.value = "button";
    input.setAttributeNode(type);

    let val = document.createAttribute("value");
    val.value = "DELETE";
    input.setAttributeNode(val);

    let klass3 = document.createAttribute("class");
    klass3.value = "delete-question";
    input.setAttributeNode(klass3);

    let id = document.createAttribute("id");
    id.value = "delete-button";
    input.setAttributeNode(id);
/*--------------------------------------------------------------------------------------*/
    let inputPost = `${inputQuestion.value}` || `${postTopQuestion.value}`;
    let text = document.createTextNode(inputPost);
    paragraph.appendChild(text);
/*--------------------------------------------------------------------------------------*/
    label.appendChild(anchor); //Label appends the anchor
/*--------------------------------------------------------------------------------------*/
//Appends all child elements of article... 
    article.appendChild(img);
    article.appendChild(label);
    article.appendChild(paragraph);
    article.appendChild(input);
    
    
/*------------------------------FORMAT OF ARRANGMENT------------------------------------- 
    `<article class="my-post">
        <img src="images/avatar.png" alt="profile-avatar" title="other-users-avatar" class="other-users-avatar" />
        <label>
            <a href="#"> Victoria Chidinmma</a>
        </label>
        <p>
            ${inputQuestion.value}
        </p>
        <input type="button" value="Delete" class="delete-question" id="delete-button"/>
    </article>`
-----------------------------------------------------------------------------------------*/
    
    homeFeeds.insertBefore(article, homeFeeds.firstChild);
    inputQuestion.value = "";
}

const postUsersQuestion2 = () => {

    if (postTopQuestion.value == "") {
        return alert("Please you cannot post an empty message...");
    };


    let article = document.createElement("article");
    let klass1 = document.createAttribute("class");
    klass1.value = "my-post";
    article.setAttributeNode(klass1)
    /*--------------------------------------------------------------------------------------*/
    let img = document.createElement("img");
    let klass2 = document.createAttribute("class");
    klass2.value = "other-users-avatar";
    img.setAttributeNode(klass2);

    let alt = document.createAttribute("alt");
    alt.value = "profile-avatar";
    img.setAttributeNode(alt);

    let source = document.createAttribute("src");
    source.value = "images/avatar.png";
    img.setAttributeNode(source);
    /*--------------------------------------------------------------------------------------*/
    let label = document.createElement("label"); //No attribute
    /*--------------------------------------------------------------------------------------*/
    let anchor = document.createElement("a");
    let link = document.createAttribute("href");
    link.value = "#";
    anchor.setAttributeNode(link);

    let text2 = document.createTextNode("Victoria Chidinmma"); //User
    anchor.appendChild(text2);
    /*--------------------------------------------------------------------------------------*/
    let paragraph = document.createElement("p"); //No attribute
    /*--------------------------------------------------------------------------------------*/
    let input = document.createElement("input");
    let type = document.createAttribute("type");
    type.value = "button";
    input.setAttributeNode(type);

    let val = document.createAttribute("value");
    val.value = "DELETE";
    input.setAttributeNode(val);

    let klass3 = document.createAttribute("class");
    klass3.value = "delete-question";
    input.setAttributeNode(klass3);

    let id = document.createAttribute("id");
    id.value = "delete-button";
    input.setAttributeNode(id);
    /*--------------------------------------------------------------------------------------*/
    let inputPost = `${inputQuestion.value}` || `${postTopQuestion.value}`;
    let text = document.createTextNode(inputPost);
    paragraph.appendChild(text);
    /*--------------------------------------------------------------------------------------*/
    label.appendChild(anchor); //Label appends the anchor
    /*--------------------------------------------------------------------------------------*/
    //Appends all child elements of article... 
    article.appendChild(img);
    article.appendChild(label);
    article.appendChild(paragraph);
    article.appendChild(input);


    /*------------------------------FORMAT OF ARRANGMENT------------------------------------- 
        `<article class="my-post">
            <img src="images/avatar.png" alt="profile-avatar" title="other-users-avatar" class="other-users-avatar" />
            <label>
                <a href="#"> Victoria Chidinmma</a>
            </label>
            <p>
                ${inputQuestion.value}
            </p>
            <input type="button" value="Delete" class="delete-question" id="delete-button"/>
        </article>`
    -----------------------------------------------------------------------------------------*/

    homeFeeds.insertBefore(article, homeFeeds.firstChild);
    postTopQuestion.value = "";
}

postTopButton.addEventListener("click", postUsersQuestion2);
postButton.addEventListener("click", postUsersQuestion1);

