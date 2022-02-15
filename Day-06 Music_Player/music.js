var songs=[

    {
        id:1,
        imageSrc:"image/arakiyea.jpeg",
        audioSrc:"audio/Arakkiyae-MassTamilan.fm.mp3",
        title:"Arakiyea - Hip Hop"
    },

    {
        id:2,
        imageSrc:"image/adi penne.jpeg",
        audioSrc:"audio/Adi-Penne-MassTamilan.fm.mp3",
        title:"Adi-Penne"
    },

    {
        id:3,
        imageSrc:"image/enna nadanthalum.jpeg",
        audioSrc:"audio/Enna Nadanthalum - Masstamilan.In-.mp3",
        title:"Enna Nadanthalum"
    },

    {
        id:4,
        imageSrc:"image/sivakumar.jpeg",
        audioSrc:"audio/Sivakumar-Pondati-MassTamilan.fm.mp3",
        title:"SivaKumar Pontatie"
    },

    {
        id:5,
        imageSrc:"image/O samy.jpg",
        audioSrc:"audio/Saami-Saami-MassTamilan.fm.mp3",
        title:"O samy"
    },

    {
        id:6,
        imageSrc:"image/Oo solriya.jpeg",
        audioSrc:"audio/Oo-Solriya-Oo-Oo-Solriya-MassTamilan.fm.mp3",
        title:"Oo solriyaa"
    },

]

function generateAudioCards()
{

    let htmlString="";

    songs.forEach(function(song,index){

        

        htmlString+=songHTML;

    })

    document.getElementById("audios").innerHTML=htmlString;

}

generateAudioCards();


function playAudio(songid)
{
    var song=songs.find(function(song,index){
        return song.id===songid
    });

    document.getElementById("image").src=song.imageSrc;
    document.getElementById("audio_player").src=song.audioSrc;
    document.getElementById("audio_player_title").innerText = song.title;
    document.getElementById("audio_player").play();
}