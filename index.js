var mainGrid = document.getElementById('main-grid');
var progressLoader = document.getElementById('progress-loader');

//To make request we use XMLHTTP request object
var xhhtp = new XMLHttpRequest();
console.log(xhhtp.readyState);

//confiqure  the request
xhhtp.open('GET', "https://5ee2488a8b27f30016094871.mockapi.io/playlist", true);

//handle response

xhhtp.onreadystatechange = function(){
    
        progressLoader.style.display = 'block';
    
    if(xhhtp.readyState === 4){
        progressLoader.style.display = 'none';
        var responseArr = JSON.parse(xhhtp.responseText);
        for(var i = 0; i<responseArr.length; i++){
            //video card holder division creation
            var videoCard = document.createElement('div');
            videoCard.classList.add('video-card');

            //anchor tag
            var linkTag = document.createElement('a');
            linkTag.href = "./player.html?vId=" + responseArr[i].id;
            
             
            //img which will be append to link tag
            var imag = document.createElement('img');
            imag.src =  responseArr[i].thumbnail;
             
            //below image title wrapper appends to anchor tag(linktag)
            var titleWrapper = document.createElement('div');
            titleWrapper.classList.add('title-wrapper');

            //heading will appends to title wrapper
            var cardTitle = document.createElement('h1');
            cardTitle.classList.add('card-title');
            cardTitle.innerHTML =  responseArr[i].title;


            //apending starts
            titleWrapper.appendChild(cardTitle);
            linkTag.appendChild(imag);
            linkTag.appendChild(titleWrapper);
            
            videoCard.appendChild(linkTag);
            mainGrid.appendChild(videoCard);
             
        }
    }
};

xhhtp.send();
