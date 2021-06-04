const API_URL =
    "https://jsonplaceholder.typicode.com/posts";
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
var mainflag = false;
const form = document.getElementById("form");
const search = document.getElementById("search");
const maon = document.getElementById("main");
const next = document.getElementById("next")
const prev = document.getElementById("prev")
var searchTerm = '';
//const { postid, page, searchTerm } = getUrlVars();
start()

async function start() {
    getUrlVars();
    await getPosts(API_URL);

    if (mainFlag) {
        //console.log(fetchData)
        await pagination(fetchData);
    } else if (searchTerm != '') {

    }
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

function getUrlVars() {
    var vars = [],
        hash
    var line = window.location.href;
    console.log(line);
    if (line.includes("?")) {
        mainFlag = true;
        line = line.slice(window.location.href.indexOf('?') + 1)
        console.log(line);
        var hashes = line.split('&');
        if (hashes[1] = '') { console.log('tyt') }
        console.log(hashes[1].length);
        console.log(hashes[0]);
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
    } else {
        mainFlag = true;
    }
    console.log(vars)
    return vars;
}




async function getPosts(url) {
    //postShark();
    const res = await fetch(url);
    const data = await res.json();
    console.log("result is ok=", res.ok);
    console.log(data[0]);
    if (!res.ok) {
        postShark();
        // var text = document.createElement("p");
        // text.innerText = res.text;
    } else {
        postShark();
        postsData = data;
        fetchData = data;

    }

}



function pagination(posts) {
    if (posts.length === 0) {
        postShark();
    } else if (posts.length <= 10) {
        console.log(posts)
        prev.style.display = "none"
        next.style.display = "none"
        showPosts(posts)
    } else if (posts.length - page * 10 <= 10) {
        pagePosts = [];
        var j = 0;
        i = page * 10;
        while (i < posts.length) {
            pagePosts[j] = posts[i];
            j++;
            i++;
        }
        prev.style.display = "flex";
        next.style.display = "none"
        showPosts(pagePosts)
    } else {

        pagePosts = [];
        var j = 0;
        i = page * 10 - 10;
        while (i < page * 10) {
            pagePosts[j] = posts[i];
            j++;
            i++;
        }

        if (page == 1) {
            prev.style.display = "none"
        } else {
            prev.style.display = "flex"
        }

        next.style.display = "flex"
        console.log(pagePosts)
        showPosts(pagePosts)
    }


}



function showPosts(posts) {
    main.innerHTML = "";
    console.log(posts.length)
    if (posts.length === 0) {
        postShark();
    } else {
        posts.forEach((data) => {
            const { userId, id, title, body } = data;
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
`;
            main.appendChild(postEl);
        });
    }
    commentsLink();
}



function sp(searchTerm) {
    if (searchTerm && searchTerm !== "") {
        postsData = []
        console.log('serch')
        let i = 0;
        console.log(JSON.stringify(fetchData[1].title))
        fetchData.forEach(post => {
            if (JSON.stringify(post.title).includes(searchTerm)) {
                console.log(post.title)
                postsData[i] = post;
                i = i + 1
            }
        });

        // search.placeholder = search.value;
        if (postsData != []) {
            pagination(postsData)
        } else {
            const postEl = document.createElement("div");

            postEl.classList.add("post");

            postEl.innerHTML = ` 
            <div class="post-body"> 
            gura sorry, u shud better ask amelia.
         </div>
`;
        }

    } else {
        // перегрузить страницу
        window.location.reload();
    }
    return '';
};


next.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('next')
    page = page + 1;
    pagination(postsData);
});

prev.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('next')
    page = page - 1;
    pagination(postsData);
});



form.addEventListener("submit", (e) => {
    e.preventDefault();
    //prev.style.display = "none"
    next.style.display = "none"
    search.placeholder = search.value;
    searchTerm = search.value;
    console.log(searchTerm);
    sp(searchTerm);
    search.value = "";

});



function commentsLink() {
    const postsTitle = document.querySelectorAll(".post-title");
    postsTitle.forEach((title) => {
        title.addEventListener("click", function() {
            console.log(this.id);

            location.href = "/comments.html?postid=" + this.id + "&page=" + page + "&searchTerm=" + searchTerm;
            //getComments(this.id);
        })
    })
}

// async function getComments(id) {
//     const res = await fetch(URLcomments + id);
//     const dataC = await res.json();
//     console.log("coment is ok=", res.ok);
//     console.log(dataC);
//     if (!res.ok) {
//         postShark();
//         // var text = document.createElement("p");
//         // text.innerText = res.text;
//     } else {
//         showComments(id, dataC)
//     }

// }

// function showComments(pid, comments) {
//     main.innerHTML = "";
//     const { userId, id, title, body } = fetchData[pid];
//     //console.log(title);
//     const postEl = document.createElement("div");

//     postEl.classList.add("post");

//     postEl.innerHTML = ` 
//             <div class='userId'> 
//                 <h3>User - ${userId}</h3> 
//             </div>

//             <div class="post-title" id="${id}">                  
//                 <h3 >${title}</h3>
//             </div>
//             <div class="post-body"> 
//                 ${body}
//             </div>       
//             `
//     main.appendChild(postEl);

//     if (comments.length === 0) {


//     } else {
//         comments.forEach((data) => {
//             const { name, email, body } = data;
//             //console.log(title);
//             const postEl = document.createElement("div");

//             postEl.classList.add("comment");

//             postEl.innerHTML = ` 
//             <div class="comment-email" id="${id}">                  
//                 <h3 >${email}</h3>
//             <div class='comment-name'> 
//                 <h3>${name}</h3> 
//             </div>
//             </div>
//             <div class="comment-body"> 
//                 ${body}
//             </div>                
//             `
//             main.appendChild(postEl);
//         });

//     }
// }