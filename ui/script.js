/*----------------------------DOM Hook Access-----------------------------*/
let homeFeeds = document.getElementById("home-feeds");
let myPost = document.getElementById("my-post");
let inputQuestion = document.getElementById("input-question");
let postButton = document.getElementById("post-button");
let postTopQuestion = document.getElementById("post-top-question");
let postTopButton = document.getElementById("post-top-button");
let deleteButton = document.getElementById("delete-button");

/*--------------------------------------------------------------------------------------*/

/*----Function that can post questions from the home page---*/
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
    type.value = "submit";
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

    let title = document.createAttribute("title");
    title.value = "delete a post";
    input.setAttributeNode(title);

    // //------------------------------

    let input2 = document.createElement("input");
    let type2 = document.createAttribute("type");
    type2.value = "submit";
    input2.setAttributeNode(type2);

    let val2 = document.createAttribute("value");
    val2.value = "EDIT";
    input2.setAttributeNode(val2);

    let _class = document.createAttribute("class");
    _class.value = "edit";
    input2.setAttributeNode(_class);

    let id2 = document.createAttribute("id");
    id2.value = "edit-button";
    input2.setAttributeNode(id2);

    let title2 = document.createAttribute("title");
    title2.value = "update a post";
    input2.setAttributeNode(title2);

    // //------------------------------

    let input3 = document.createElement("input");
    let type3 = document.createAttribute("type");
    type3.value = "submit";
    input3.setAttributeNode(type3);

    let val3 = document.createAttribute("value");
    val3.value = "COMMENT";
    input3.setAttributeNode(val3);

    let _class1 = document.createAttribute("class");
    _class1.value = "comment";
    input3.setAttributeNode(_class1);

    let id3 = document.createAttribute("id");
    id3.value = "comment-button";
    input3.setAttributeNode(id3);

    let title1 = document.createAttribute("title");
    title1.value = "reply a post";
    input3.setAttributeNode(title1);

/*--------------------------------------------------------------------------------------*/
    let inputPost = `${inputQuestion.value}` || `${postTopQuestion.value}`;
    let text = document.createTextNode(inputPost);
    paragraph.appendChild(text);

    paragraph.style.marginBottom = "1.5em";
/*--------------------------------------------------------------------------------------*/
    label.appendChild(anchor); //Label appends the anchor
/*--------------------------------------------------------------------------------------*/
//Appends all child elements of article... 
    article.appendChild(img);
    article.appendChild(label);
    article.appendChild(paragraph);
    article.appendChild(input);
    article.appendChild(input2);
    article.appendChild(input3);
    
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

/*---Function that can post questions from anywhere on the page throught the nav menu----*/
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

    let title = document.createAttribute("title");
    title.value = "delete a post";
    input.setAttributeNode(title);

    //----------------------------------------------

    let input2 = document.createElement("input");
    let type2 = document.createAttribute("type");
    type2.value = "submit";
    input2.setAttributeNode(type2);

    let val2 = document.createAttribute("value");
    val2.value = "EDIT";
    input2.setAttributeNode(val2);

    let _class = document.createAttribute("class");
    _class.value = "edit";
    input2.setAttributeNode(_class);

    let id2 = document.createAttribute("id");
    id2.value = "edit-button";
    input2.setAttributeNode(id2);

    // //------------------------------

    let input3 = document.createElement("input");
    let type3 = document.createAttribute("type");
    type3.value = "submit";
    input3.setAttributeNode(type3);

    let val3 = document.createAttribute("value");
    val3.value = "COMMENT";
    input3.setAttributeNode(val3);

    let _class1 = document.createAttribute("class");
    _class1.value = "comment";
    input3.setAttributeNode(_class1); //title="reply a post"

    let id3 = document.createAttribute("id");
    id3.value = "comment-button";
    input3.setAttributeNode(id3);

    let title1 = document.createAttribute("title");
    title1.value = "reply a post";
    input3.setAttributeNode(title1);

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
    article.appendChild(input2);
    article.appendChild(input3);

    /*----------------------------------------------FORMAT OF ARRANGMENT------------------------------------------------- 
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
    -------------------------------------------------------------------------------------------------------------------*/

    homeFeeds.insertBefore(article, homeFeeds.firstChild); //Insert the post/article inside the div but before the div's first child
    postTopQuestion.value = "";
}

postTopButton.addEventListener("click", postUsersQuestion2);
postButton.addEventListener("click", postUsersQuestion1);




const comment = () => {
    let div = document.createElement("div");
    let _class = document.createAttribute("class");
    _class.value = "comment-main-container";
    div.setAttributeNode(_class);

    let img = document.createElement("img");
    let src = document.createAttribute("src");
    src.value = "images/avatar.png";
    img.setAttributeNode(src);

    let _class1 = document.createAttribute("class");
    _class1.value = "reply-avatar";
    img.setAttributeNode(_class1);

    let label = document.createElement("label");

    let anchor = document.createElement("a");
    let link = document.createAttribute("href");
    link.value = "#";
    anchor.setAttributeNode(link);

    let _class2 = document.createAttribute("class");
    _class2.value = "reply-name";
    anchor.setAttributeNode(_class2);

    let text = document.createTextNode("V.T");
    anchor.appendChild(text);   //appended V.T to anchor
    label.appendChild(anchor); //appended anchor to label

    let textArea = document.createElement("textarea");
    let placeHolder = document.createAttribute("placeholder");
    placeHolder.value = "Write a comment...";

    let _class3 = document.createAttribute("class");
    _class3.value = "reply-text";
    textArea.setAttributeNode(_class3);

    div.appendChild(img);
    div.appendChild(label);
    div.appendChild(textArea);

    let backdoor = document.getElementById("bdoor");
    backdoor.innerHTML = div;

    

    /*----------------------------------------------------FORMAT OF ARRANGMENT----------------------------------------------------------------
    <div class="comment-main-container">
                        <img src="images/avatar.png" alt="profile-avatar" title="other-users-avatar" class="reply-avatar" />
                        <label>
                            <a href="#" class="reply-name">
                               V.T
                            </a>
                        </label>
                        <textarea placeholder="Write a comment..." class="reply-text"></textarea>
                    </div>
    --------------------------------------------------------------------------------------------------------------------------------------*/
}

