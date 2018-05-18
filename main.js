function clicked(clickedId){
    var buttons = Array.from( document.getElementsByClassName('navButton') );
    buttons.forEach ( button => button.classList.remove('selectedButton') );
    document.getElementById(clickedId).classList.add('selectedButton');
    var activePage = clickedId.toString().replace("Button","");
    var pages = Array.from( document.getElementsByClassName('page') );
    pages.forEach( page => page.classList.add('hidden') );
    document.getElementById(activePage).classList.remove('hidden');
}
