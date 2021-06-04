const API_URL =
    "https://jsonplaceholder.typicode.com/posts/";
const URLcomments = "https://jsonplaceholder.typicode.com/comments?postId="
const headers = {
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
};
var data = [];
var postsData = []
var page = 1;
let pagePosts = [];
var searchPosts = [];
var fetchData = [];
var datac = []
const { postid, page, searchTerm } = getUrlVars();
const form = document.getElementById("form");
const search = document.getElementById("search");
const maon = document.getElementById("main");
const next = document.getElementById("next")
const prev = document.getElementById("prev")

display()


function display() {
    prev.style.display = "flex";
    const { postid } = getUrlVars();
    console.log(postid);
    getPost(API_URL + postid);
    getComments(postid);

}



async function getComments(id) {
    const res = await fetch(URLcomments + id);

    const dataC = await res.json();
    console.log("coment is ok=", res.ok);
    console.log(dataC);
    if (!res.ok) {
        postShark();
        // var text = document.createElement("p");
        // text.innerText = res.text;
    } else {
        showComments(id, dataC)
    }

}


async function getPost(url) {
    postShark();

    const res = await fetch(url);
    const data = await res.json();
    console.log("result is ok=", res.ok);

    if (!res.ok) {
        postShark();
        // var text = document.createElement("p");
        // text.innerText = res.text;
    } else {
        postShark();
        postsData = data;
        fetchData = data;

        // pagination(postsData)
    }

}

function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


function postShark() {
    main.innerHTML = "";
    if (guraContainier) {
        guraContainier.remove();
    } else {
        var guraContainier = document.createElement("div");
        guraContainier.id = "guraContainier";
        guraContainier.innerText = "A";

        main.appendChild(guraContainier);
    }
}

function unpostShark() {
    var shark = document.getElementById("guraContainier");
    shark.remove();
}



function showComments(pid, comments) {
    main.innerHTML = "";
    const { userId, id, title, body } = fetchData;

    //console.log(title);
    const postEl = document.createElement("div");

    postEl.classList.add("post");

    postEl.innerHTML = ` 
            <div class='userId'> 
                <h3>User - ${userId}</h3> 
            </div>
            
            <div class="post-title" id="${id}">                  
                <h3 >${title}</h3>
            </div>
            <div class="post-body"> 
                ${body}
            </div>       
            `
    main.appendChild(postEl);

    if (comments.length === 0) {


    } else {
        comments.forEach((data) => {
            const { name, email, body } = data;
            //console.log(title);
            const postEl = document.createElement("div");

            postEl.classList.add("comment");

            postEl.innerHTML = ` 
            <div class="comment-email" id="${id}">                  
                <h3 >${email}</h3>
            <div class='comment-name'> 
                <h3>${name}</h3> 
            </div>
            </div>
            <div class="comment-body"> 
                ${body}
            </div>                
            `
            main.appendChild(postEl);
        });
    }
}


prev.addEventListener("click", (e) => {
    e.preventDefault();

    location.href = "index.html"

});