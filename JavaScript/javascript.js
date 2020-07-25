function selectManga() {
    var mangaChapter = "";
    var chapterNumber;
    var part = Math.floor(Math.random() * 8)+1;;

    switch(part){
        case 1:
            chapterNumber = Math.floor(Math.random() * 44)+1;
            mangaChapter = "https://manganelo.com/chapter/phantom_blood/chapter_" + chapterNumber + ".2";
        break;
        case 2:
            chapterNumber = Math.floor(Math.random() * 113)+1;
            mangaChapter = "https://manganelo.com/chapter/phantom_blood/chapter_" + chapterNumber;
        break;
        case 3:
            chapterNumber = Math.floor(Math.random() * 612)+1;
            mangaChapter = "https://manganelo.com/chapter/phantom_blood/chapter_" + chapterNumber;
        break;
        case 4:
            chapterNumber = Math.floor(Math.random() * 439)+1;
            mangaChapter = "https://manganelo.com/chapter/diamond_wa_kudakenai/chapter_" + chapterNumber;
        break;
        case 5:
            chapterNumber = Math.floor(Math.random() * 154)+440;
            mangaChapter = "https://manganelo.com/chapter/vento_aureo/chapter_" + chapterNumber;
        break;
        case 6:
            chapterNumber = Math.floor(Math.random() * 158)+1;
            mangaChapter = "https://manganelo.com/chapter/bi918289/chapter_" + chapterNumber;
        break;
        case 7:
            chapterNumber = Math.floor(Math.random() * 95)+1;
            mangaChapter = "https://manganelo.com/chapter/af918141/chapter_" + chapterNumber;
        break;
        case 8:
            chapterNumber = Math.floor(Math.random() * 99)+1;
            mangaChapter = "https://manganelo.com/chapter/yx917940/chapter_" + chapterNumber;
        break;
    }
    
    return window.open(mangaChapter, "_blank");
;
}
function selectAnime() {
    var statement;
     statement = episodes[Math.floor(Math.random() * 152)+1];
     answer = statement;
     console.log(statement);
     window.open(statement, "_blank");
}
function refreshPage(){
    window.location.reload();
}
function wiki(){
    window.open("https://jojo.fandom.com/wiki/Main_Page")
}
function newBackground(){
    var check;
    check = backgrounds[Math.floor(Math.random() * 39)+1];
    document.body.style.backgroundImage = 'url('+check+')';
}    