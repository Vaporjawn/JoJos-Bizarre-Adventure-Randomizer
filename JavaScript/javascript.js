var sessionRedirect;
var part;
var key = sessionStorage.getItem("42");
function selectManga(part) {
    var mangaChapter = "";
    var chapterNumber;
    var chapterSelect;
    if(part == undefined){
        part = Math.floor(Math.random() * 10)+1;
    }
    var partSelect = parseInt(part);
    sessionRedirect = partSelect;
    var bioLink = checkBio(partSelect);
    sessionStorage.setItem(partSelect, bioLink);
    sessionStorage.setItem("42", bioLink);
    //key = partSelect;
    switch(partSelect){
        case 1:
            chapterNumber = Math.floor(Math.random() * 44)+1;
            mangaChapter = "https://manganelo.com/chapter/phantom_blood/chapter_" + chapterNumber + ".2";
        break;
        case 2:
            chapterSelect = Math.floor(Math.random() * 2)+1;
            if (chapterSelect == 1){
                chapterNumber = Math.random() * (1005754 - 1005751) + 1005751 
                mangaChapter = "https://mangaplus.shueisha.co.jp/viewer/" + chapterNumber;
            }
            if(chapterSelect == 2){
                chapterNumber = Math.random() * (1005791 - 1005785) + 1005785 
                mangaChapter = "https://mangaplus.shueisha.co.jp/viewer/" + chapterNumber;
            }
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
            chapterNumber = Math.floor(Math.random() * 100)+1; //gotta remember to update monthly. the next time it'll need to be update to 101 is october 19th. maybe look into a counter that updates according to the date
            mangaChapter = "https://manganelo.com/chapter/yx917940/chapter_" + chapterNumber;
        break;
        case 9:
            chapterNumber = Math.floor(Math.random() * 5)+1;
            mangaChapter = "https://manganelo.com/chapter/oo922205/chapter_" + chapterNumber;
        break;
        case 10:
            chapterNumber = Math.floor(Math.random() * 3)+1;
            mangaChapter = "https://manganelo.com/chapter/jojo_dead_mans_questions/chapter_" + chapterNumber;
    }
    
    //redirectCheck(partSelect);
    window.open(mangaChapter, "_blank");
    return document.location.reload(true) //refreshPage();
     
;
}
function selectAnime(part) {
    var statement;
    if(part == undefined){
        part = Math.floor(Math.random() * 5)+1;
    }
    var partSelect = parseInt(part);
    sessionRedirect = partSelect;
    var bioLink = checkBio(partSelect);
    sessionStorage.setItem(partSelect, bioLink);
    sessionStorage.setItem("42", bioLink);

    switch(partSelect){
        case 1:
            statement = episodes[Math.floor(Math.random() * 9)+1];
        break;
        case 2:
            statement = episodes[Math.floor(Math.random() * (26 - 11) + 11)];
        break;
        case 3:
            statement = episodes[Math.floor(Math.random() * (98 - 27) + 27)];
        break;
        case 4:
            statement = episodes[Math.floor(Math.random() * (138 - 99) + 99)];
        break;
        case 5:
            statement = episodes[Math.floor(Math.random() * (152 - 138) + 138)];
        break;

        default:
            partSelect = 1; //Using this for the redirectCheck() since it requires a Key to run properly
            statement = episodes[Math.floor(Math.random() * 152)+1];

    }
     answer = statement;
     console.log(statement);
     window.open(statement, "_blank");
     return document.location.reload(true) //refreshPage();

}
function refreshPage(){
    window.location.reload();
}
function wiki(){
    window.open("https://jojo.fandom.com/wiki/Main_Page")
}
function randomWiki(){
    window.open("https://jojo.fandom.com/wiki/Special:Random")
}
function newBackground(){
    var check;
    check = backgrounds[Math.floor(Math.random() * 38)+1];
    document.body.style.backgroundImage = 'url('+check+')';
}
function initBackground(check){
    if(check == undefined){
        check = initBackgrounds[Math.floor(Math.random() * 8)];
    }
    else{
        check = initBackgrounds[check];
    }
    var link = "https://raw.githubusercontent.com/Vaporjawn/JoJos-Bizarre-Adventure-Randomizer/master/images/";
    link = link + check;
    document.body.style.backgroundImage = 'url('+link+')';
    console.log(link);
}
function customize(){
    var part = document.getElementById("part").value;
    var medium = document.getElementById("medium").value;
    var partSelect = parseInt(part); //this is just in case something needs to have it parsed, otherwise it's done when it's passed into the next function

    if(medium == "anime" && part < 6){
        selectAnime(part);
    }
    if(medium == "manga" || part > 5){
        selectManga(part);
    }
    if(medium == "bio"){
        bio(part);
    }
    else{
        var bruh = Math.floor(Math.random() * 2) + 1;
        
        if (bruh == 1){
            selectAnime(part);
        }
        if (bruh == 2){
            selectManga(part);
        }
    }
}

function bio(part) {
    if(part == undefined){
        part = Math.floor(Math.random() * 8)+1;
    }
    var partSelect = parseInt(part);
    switch(partSelect){
        case 1:
            location.href = "./bios/jonathan.html";
        break;
        case 2:
            location.href = "./bios/joseph.html";
        break;
        case 3:
            location.href = "./bios/jotaro.html";
        break;
        case 4:
            location.href = "./bios/josuke.html";
        break;
        case 5:
            location.href = "./bios/giorno.html";
        break;
        case 6:
            location.href = "./bios/jolyne.html";
        break;
        case 7:
            location.href = "./bios/johnny.html";
        break;
        case 8:
            location.href = "./bios/gappy.html";
        break;
        default:
            console.log("Maybe there should be a bio here");
    }
}

function checkBio(part){
    var link;
    if(part == undefined){
        part = Math.floor(Math.random() * 8)+1;
    }
    var partSelect = parseInt(part);
    switch(partSelect){
        case 1:
            link = "./bios/jonathan.html";
        break;
        case 2:
            link = "./bios/joseph.html";
        break;
        case 3:
            link = "./bios/jotaro.html";
        break;
        case 4:
            link = "./bios/josuke.html";
        break;
        case 5:
            link = "./bios/giorno.html";
        break;
        case 6:
            link = "./bios/jolyne.html";
        break;
        case 7:
            link = "./bios/johnny.html";
        break;
        case 8:
            link = "./bios/gappy.html";
        break;
        default:
            console.log("Maybe there should be a bio here");
            link = "./bios/jonathan.html";
    }
    return link;
}
function redirectCheck(key){
    if(key == undefined || key == "undefined"){
        sessionStorage.setItem("42", "index.html");
        sessionRedirect = "./index.html";
        return location.href = sessionRedirect;
    }else{
        sessionRedirect = key;
        return location.href = sessionRedirect;

    }

}
function realDirect(sessionRedirect){
    location.href = sessionRedirect;
}

function sessionReset(){
    sessionStorage.setItem("42", undefined);
}