const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

let directionButtons = {
    "noord": document.getElementById('KnopNoord'),
    "oost": document.getElementById('KnopOost'),
    "zuid": document.getElementById('KnopZuid'),
    "west": document.getElementById('KnopWest')
}

let current_index = 0;

let locaties = [ // Array
    { // 0 = object
    "title":"plek 1",
    "image":"img/route1.png",
    "directions": {
        "oost" : 16,
        "west" : 32,
        "zuid" : 1
      }
    },
    { // 1 = Object
    "title":"plek 2",
    "image":"img/route2.png",
    "directions" : {
        "zuid" : 2,
        "noord" : 0
      }
    },
    {
    "title":"plek 3",
    "image":"img/route3.png",
    "directions" : {
        "noord": 1,
        "oost": 3,
        "west": 17

      }
    },
    {
    "title":"plek 4",
    "image":"img/route4.png",
    "directions" : {
        "oost" :4 ,
        "west": 2
      }
    },
    {
    "title":"plek 5",
    "image":"img/route5.png",
    "directions" : {
      "oost" :5 ,
      "west": 3
      }
    },
    {
    "title":"plek 6",
    "image":"img/route6.png",
    "directions" : {
      "oost" :6 ,
      "west": 4
      }
    },
    {
    "title":"plek 7",
    "image":"img/route7.png",
    "directions" : {
      "oost" :7 ,
      "west": 5
      }
    },
    {
    "title":"plek 8",
    "image":"img/route8.png",
    "directions" : {
      "oost" :8 ,
      "west": 6
      }
    },
    {
    "title":"plek 9",
    "image":"img/route9.png",
    "directions" : {
        "noord" : 9,
        "west": 7
      }
    },
    {
    "title":"plek 10",
    "image":"img/route10.png",
    "directions" : {
      "noord": 10,
      "zuid": 8 
      }
    },
    {
    "title":"plek 11",
    "image":"img/route11.png",
    "directions" : {
        "noord" : 11,
        "zuid" : 9,
      }
    },
    {
    "title":"plek 12",
    "image":"img/route12.png",
    "directions" : {
      "noord" : 12,
      "zuid" : 10,
      }
    },
    {
    "title":"plek 13",
    "image":"img/route13.png",
    "directions": {
      "noord" : 13,
      "zuid" : 11,
      }
    },
    {
    "title":"plek 14",
    "image":"img/route14.png",
    "directions" : {
      "noord" : 14,
      "zuid" : 12,
      }
    },
    {
    "title":"plek 15",
    "image":"img/route15.png",
    "directions" : {
        "zuid" : 13,
        "west": 15
      }
    },
    {
    "title":"plek 16",
    "image":"route16.png",
    "directions" : {
      "oost": 14,
      "west": 16
          }
    },
    {
    "title":"plek 17",
    "image":"img/route17.png",
    "directions" : {
      "oost": 15,
      "zuid":0,
      "west": 32
      }
    },
    {
    "title":"plek 18",
    "image":"img/route18.png",
    "directions" : {
        "west" : 18,
        "oost" : 2,
      }
    },
    {
      "title":"plek 19",
      "image":"img/route19.png",
      "directions": {
        "west" : 19,
        "oost" : 3,
      }
    },
    {
    "title":"plek 20",
    "image":"img/route20.png",
    "directions" : {
      "west" : 20,
      "oost" : 4,
      }
    },
    {
    "title":"plek 21",
    "image":"img/route21.png",
    "directions" : {
      "west" : 21,
      "oost" : 5,
      }
    },
    {
    "title":"plek 22",
    "image":"img/route22.png",
    "directions" : {
      "west" : 22,
      "oost" : 6,
      }
    },
    {
    "title":"plek 23",
    "image":"img/route23.png",
    "directions" : {
      "west" : 23,
      "oost" : 7,
      }
    },
    {
    "title":"Cplek 24",
    "image":"img/route24.png",
    "directions" : {
      "noord": 24,
      "oost": 22
      }
    },
    {
    "title":"plek 25",
    "image":"img/route25.png",
    "directions" : {
        "noord" : 25,
        "zuid": 23
      }
    },
    {
    "title":"plek 26",
    "image":"img/route26.png",
    "directions": {
      "noord" : 26,
      "zuid": 24
      }
    },
    { 
    "title":"plek 27",
    "image":"img/route27.png",
    "directions" : {
      "noord" : 27,
      "zuid": 25
      }
    },
    {
    "title":"plek 28",
    "image":"img/route28.png",
    "directions" : {
      "noord" : 28,
      "zuid": 26
      }
    },
    {
    "title":"plek 29",
    "image":"img/route29.png",
    "directions" : {
      "noord" : 29,
      "zuid": 27
      }
    },
    {
    "title":"plek 30",
    "image":"img/route30.png",
    "directions" : {
      "oost": 30,
      "zuid": 28
      }
    },
    {
    "title":"plek 31",
    "image":"img/route31.png",
    "directions" : {
        "west" : 29,
        "oost" : 31,
      }
    },
    {
    "title":"plek 32",
    "image":"img/route32.png",
    "directions" : {
      "west" : 30,
      "oost" : 32,
      }
    },
    {
    "title":"plek 33",
    "image":"img/route33.png",
    "directions" : {
      "oost": 16,
      "zuid": 0,
      "west": 31
      }
    },
    
]

//myTitle.innerHTML = "dit is door het script toegevoegd";
//myImage.src = "img/1.jpg";

function show(index){
    myTitle.innerHTML = locaties[index].title;
    myImage.src = locaties[index].image;
    current_index = index;

    //knoppen opnieuw berekenen
    updateDirections();
}

function updateDirections(){
    //haal de mogelijke directins op voor de current_index
    let possible = locaties[current_index].directions;

    //Zet de directionkeys in een aparte variabele
    let possible_keys = Object.keys(possible);

    //Zet de keys van de buttons in een aparte variabele
    let button_keys = Object.keys(directionButtons);
    //zet eerst alle knoppen uit
    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";   
    }

    //zet nu de mogelijke knoppen aan
    for(const key of possible_keys){
      directionButtons[key].style.visibility = 'visible';
    }
}

function getinput(){
    show(myInput.value);
    //console.log(myInput.value);
    myInput.value = "";
    myInput.focus();
}

function goDirection(richting){
    let punt_index = locaties[current_index].directions[richting]
    show(punt_index);
}

show(0);