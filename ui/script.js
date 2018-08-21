/*----------------------------DOM Hook Access-----------------------------*/
let homeFeeds = document.getElementById("home-feeds");
let myPost = document.getElementById("my-post");
let inputQuestion = document.getElementById("input-question");
let postButton = document.getElementById("post-button");
let postTopQuestion = document.getElementById("post-top-question");
let postTopButton = document.getElementById("post-top-button");
let deleteButton = document.getElementById("delete-button");
/*--------------------------------------------------------------------------------------*/

//-------------LOGSOUT USER--------------------
let logout = document.getElementById("logout");

logout.onclick = () => {
    let check = confirm("ARE YOU SURE?");
    if (check) {
        window.location.assign("./index.html");
    }
}

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
    let classy = document.createAttribute("class");
    classy.value = "bold";
    paragraph.setAttributeNode(classy);
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
/*-----------------------------------------COMMENT--------------------------------------*/

    let divc = document.createElement("div");
    let _classc = document.createAttribute("class");
    _classc.value = "comment-main-container";
    divc.setAttributeNode(_classc);

    let imgc = document.createElement("img");
    let srcc = document.createAttribute("src");
    srcc.value = "images/avatar.png";
    imgc.setAttributeNode(srcc);

    let _class1c = document.createAttribute("class");
    _class1c.value = "reply-avatar";
    imgc.setAttributeNode(_class1c);

    let labelc = document.createElement("label");

    let anchorc = document.createElement("a");
    let linkc = document.createAttribute("href");
    linkc.value = "#";
    anchorc.setAttributeNode(linkc);

    let _class2c = document.createAttribute("class");
    _class2c.value = "reply-name";
    anchorc.setAttributeNode(_class2c);

    let textc = document.createTextNode("C.V");
    anchorc.appendChild(textc);   //appended V.T to anchor
    labelc.appendChild(anchorc); //appended anchor to label

    let textAreac = document.createElement("textarea");
    let placeHolderc = document.createAttribute("placeholder");
    placeHolderc.value = "Write a comment...";
    textAreac.setAttributeNode(placeHolderc);

    let _class3c = document.createAttribute("class");
    _class3c.value = "reply-text";
    textAreac.setAttributeNode(_class3c);

    divc.appendChild(imgc);
    divc.appendChild(labelc);
    divc.appendChild(textAreac);

/*--------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------*/

//Appends all child elements of article... 
    article.appendChild(img);
    article.appendChild(label);
    article.appendChild(paragraph);
    article.appendChild(input);
    article.appendChild(input2);
    article.appendChild(input3);
    article.appendChild(document.createElement("hr"));
    article.appendChild(divc);

    homeFeeds.insertBefore(article, homeFeeds.firstChild); //Insert the post/article inside the div but before the div's first child
    inputQuestion.value = ""; //clears the post field after posting
    
/*--------------------------------------FORMAT OF ARRANGMENT------------------------------------- 
    `<article class="my-post">
        <img src="images/avatar.png" alt="profile-avatar" title="other-users-avatar" class="other-users-avatar" />
        <label>
            <a href="#"> Victoria Chidinmma</a>
        </label>
        <p>
            ${inputQuestion.value}
        </p>
        <input type="button" value="Delete" class="delete-question" id="delete-button"/>

        <div class="comment-main-container">
            <img src="images/avatar.png" alt="profile-avatar" title="other-users-avatar" class="reply-avatar" />
                <label>
                    <a href="#" class="reply-name">
                        V.T
                    </a>
                </label>
            <textarea placeholder="Write a comment..." class="reply-text"></textarea>
        </div>
    </article>`
-------------------------------------------------------------------------------------------------*/
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
    /*-----------------------------------------COMMENT--------------------------------------*/

    let divc = document.createElement("div");
    let _classc = document.createAttribute("class");
    _classc.value = "comment-main-container";
    divc.setAttributeNode(_classc);

    let imgc = document.createElement("img");
    let srcc = document.createAttribute("src");
    srcc.value = "images/avatar.png";
    imgc.setAttributeNode(srcc);

    let _class1c = document.createAttribute("class");
    _class1c.value = "reply-avatar";
    imgc.setAttributeNode(_class1c);

    let labelc = document.createElement("label");

    let anchorc = document.createElement("a");
    let linkc = document.createAttribute("href");
    linkc.value = "#";
    anchorc.setAttributeNode(linkc);

    let _class2c = document.createAttribute("class");
    _class2c.value = "reply-name";
    anchorc.setAttributeNode(_class2c);

    let textc = document.createTextNode("C.V");
    anchorc.appendChild(textc);   //appended V.T to anchor
    labelc.appendChild(anchorc); //appended anchor to label

    let textAreac = document.createElement("textarea");
    let placeHolderc = document.createAttribute("placeholder");
    placeHolderc.value = "Write a comment...";
    textAreac.setAttributeNode(placeHolderc);

    let _class3c = document.createAttribute("class");
    _class3c.value = "reply-text";
    textAreac.setAttributeNode(_class3c);

    divc.appendChild(imgc);
    divc.appendChild(labelc);
    divc.appendChild(textAreac);

    /*--------------------------------------------------------------------------------------*/
    /*--------------------------------------------------------------------------------------*/

    //Appends all child elements of article... 
    article.appendChild(img);
    article.appendChild(label);
    article.appendChild(paragraph);
    article.appendChild(input);
    article.appendChild(input2);
    article.appendChild(input3);
    article.appendChild(document.createElement("hr"));
    article.appendChild(divc);

    homeFeeds.insertBefore(article, homeFeeds.firstChild); //Insert the post/article inside the div but before the div's first child
    postTopQuestion.value = ""; //clears the post field after posting

/*--------------------------------------FORMAT OF ARRANGMENT------------------------------------- 
    `<article class="my-post">
        <img src="images/avatar.png" alt="profile-avatar" title="other-users-avatar" class="other-users-avatar" />
        <label>
            <a href="#"> Victoria Chidinmma</a>
        </label>
        <p>
            ${inputQuestion.value}
        </p>
        <input type="button" value="Delete" class="delete-question" id="delete-button"/>

        <div class="comment-main-container">
            <img src="images/avatar.png" alt="profile-avatar" title="other-users-avatar" class="reply-avatar" />
                <label>
                    <a href="#" class="reply-name">
                        V.T
                    </a>
                </label>
            <textarea placeholder="Write a comment..." class="reply-text"></textarea>
        </div>
    </article>`
-------------------------------------------------------------------------------------------------*/
}

postTopButton.addEventListener("click", postUsersQuestion2); //event listeners for top post button
postButton.addEventListener("click", postUsersQuestion1);   //event listeners for buttom post button
