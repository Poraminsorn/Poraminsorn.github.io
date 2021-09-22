var Song = function (title,artist) {
    this.title = title;
    this.artist = artist;
    this.play = function(){
        return console.log("Playing: " +title)
    }
};


var song1 = new Song('Lalisa', 'Lisa');
var song2 = new Song('ชีวิตยังคงสวยงาม','Bodyslam')
song1.play();
song2.play();