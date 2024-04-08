var greatRunes = {
    godrick : false,
    rennala : false,
    rykard : false,
    radahn : false,
    morgott : false,
    malenia : false,
    mohg : false,
    rold : false
}
function toggleImage (rune, image1, image2, object) {
    
    if (greatRunes[rune])
        object.src = image2;
    else
        object.src = image1;
    
    greatRunes[rune] = !greatRunes[rune];
}