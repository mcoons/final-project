function clicked(clickedId){
    console.log("ID=" + clickedId);
    document.getElementById('aboutMeButton').classList.remove('selectedButton');
    document.getElementById('learnToLearnButton').classList.remove('selectedButton');
    document.getElementById('goalSettingButton').classList.remove('selectedButton');
    document.getElementById('meetupsButton').classList.remove('selectedButton');

    document.getElementById(clickedId).classList.add('selectedButton');

    var newElement = clickedId.toString().replace("Button","");

    console.log("new ID:" + newElement);

    document.getElementById('aboutMe').classList.add('hidden');
    document.getElementById('learnToLearn').classList.add('hidden');
    document.getElementById('goalSetting').classList.add('hidden');
    document.getElementById('meetups').classList.add('hidden');

    document.getElementById(newElement).classList.remove('hidden');

    // this.classList.add('selectedButton');
    // console.log(x);
}