function createCard(title,cname,views,months,thumbnail,duration){
let processed_views 
if (views < 1000000){
processed_views = views/1000 + "K"
}
else if(views > 1000000){
    processed_views = views/1000000 + "M"
}
else{
    processed_views = "invalid"
}
let html = `  <div class="card">
            <div class="thumbnail">
                <img src="${thumbnail}" alt="">
                <div class="duration">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cname} . ${processed_views} views . ${months} months old</p>
            </div>

        </div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html   
}

createCard("Introduction example","devverma","4000000","8","https://i.ytimg.com/vi/9JaDBYPmiJ0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBNYvyHcUtTMSVjK4m4XzXuUmegug","25:45")

// createCard("abcdefgh","lalitverma","50000","3","https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg","15:30")