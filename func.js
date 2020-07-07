




var videoId = window.location.search.split("=")[1];
var videoPlayer = document.getElementById('video-player');
var views = document.getElementById('views-count');
var title = document.getElementById('video-title');
0;
var description = document.getElementById('video-description');
var  sideWrapper = document.getElementById('playlist-wrapper');

function createVideoCard(data){

        
                var videoCard = document.createElement('div');
                videoCard.classList.add('video-card');
    
                //anchor tag
                var linkTag = document.createElement('a');
                linkTag.href = "./player.html?vId=" + data.id;
                
                 
                //img which will be append to link tag
                var imag = document.createElement('img');
                imag.src =  data.thumbnail;
                 
                //below image title wrapper appends to anchor tag(linktag)
                var titleWrapper = document.createElement('div');
                titleWrapper.classList.add('title-wrapper');
    
                //heading will appends to title wrapper
                var cardTitle = document.createElement('h1');
                cardTitle.classList.add('card-title');
                cardTitle.innerHTML =  data.title;
    
    
                //apending starts
                titleWrapper.appendChild(cardTitle);
                linkTag.appendChild(imag);
                linkTag.appendChild(titleWrapper);
                
                videoCard.appendChild(linkTag);
                

                return videoCard;
                 
            }
        
    


function getPlaylistData(){
    var httpPlaylist = new XMLHttpRequest();
    httpPlaylist.open('GET', "https://5ee2488a8b27f30016094871.mockapi.io/playlist", true);
    
     httpPlaylist.send();

     httpPlaylist.onreadystatechange = function () {
         if(httpPlaylist.readyState === 4) {
             var response = JSON.parse(httpPlaylist.responseText);
             for(var i = 0; i<response.length; i++){
                  var videoCard = createVideoCard(response[i]);
                  sideWrapper.appendChild(videoCard);
                  
                //   playlistWrapper.appendChild(videoCard);
             }
         }
     }
}




var xhttp = new XMLHttpRequest();
xhttp.open('GET', "https://5ee2488a8b27f30016094871.mockapi.io/video/" + videoId, true);

xhttp.send();

xhttp.onreadystatechange = function(){
    if(xhttp.readyState === 4 ) {

        var response = JSON.parse(xhttp.responseText);
        console.log(response);
        videoPlayer.src = "https://player.vimeo.com/video/" + response.vimeoId;
        views.innerHTML = response.views;
        title.innerHTML = response.title;
        description.innerHTML = response.description;
          
               getPlaylistData();
    }
};








