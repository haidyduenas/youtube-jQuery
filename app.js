"use strict";

const API_KEY = "AIzaSyB6RQPxv-X6aojxx9IKh0Nc4twyqlMnitI";

class Youtube {
   constructor() {
   this.result = {
      videos: [],
      selectedVideo: null,
      searchTerm: "iPhone X"
      };
      /*arrow function necesario*/
      $('#data-search').click(()=>{
         let videoAct = $('#video-search').val();
         console.log(videoAct);
         this.youtubeSearch(videoAct);
      });
   }
   //<iframe className="embed-responsive-item" src={url}> </iframe>
   getVideoList(videos) {
      return videos.map((video, index) => {
         const imageUrl = video.snippet.thumbnails.default.url;
         const url = `https://www.youtube.com/embed/${video.id.videoId}`;
         return `<li>\
                     <div class="col-xs-13 col-md-3 col-lg-3">\
                     <img class="media-object miniaturas" src=${imageUrl} />\
                     </div>
                     <p>\
                        <iframe class="col-xs-8 col-lg-8 col-md-8 embed-responsive-item" src=${url}> </iframe>\
                     </p>\
                     </div>\
               </li> \ `;
      });
   }
   youtubeSearch(searchTerm) {
      console.log(searchTerm);

      YTSearch({ key: API_KEY, term: searchTerm }, data => {
         console.log("result", data);
         this.result = {
            videos: data,
            selectedVideo: data[0],
            searchTerm: searchTerm
         };
         let list = this.getVideoList(this.result.videos);
         console.log("lis: ", list);
         $("#root").append(list);
      });
   }

   videoSearch(searchTerm) {
      jQuery.getJSON("list.json", data => {
         console.log("result", data.items);
         this.result = {
            videos: data.items,
            selectedVideo: data.items[0],
            searchTerm: searchTerm
         };
         var list = app.getVideoList(app.result.videos);
         console.log("lis: ", list);
         $("#root").append(list);
      });
   }
}

let video = new Youtube();