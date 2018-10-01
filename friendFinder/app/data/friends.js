// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
        "name":"Rick",
        "picture":"https://images-mm.s3.amazonaws.com/Rick_Morty_Rick_Face_Lapel_Pin_POP.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"Westbrook",
        "picture":"https://usatftw.files.wordpress.com/2018/03/russell-westbrook.jpg?w=1000&h=600&crop=1",
        "scores":[
            3,
            2,
            4,
            2,
            4,
            1,
            5,
            5,
            2,
            3
          ]
      },
      {
        "name":"Lebron James",
        "picture":"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwizoa741ODdAhWxJDQIHQvpDGsQjRx6BAgBEAU&url=http%3A%2F%2Fwww.espn.com%2Fnba%2Fplayer%2F_%2Fid%2F1966%2Flebron-james&psig=AOvVaw2_n0jgUhMSvvNvsRTJodGl&ust=1538325953780370",
        "scores":[
            5,
            1,
            3,
            3,
            5,
            2,
            2,
            4,
            4,
            2
          ]
      },
      {
        "name":"Jordan",
        "picture":"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiBxZuD1eDdAhUpFjQIHYMECMIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.fathead.com%2Fnba%2Fchicago-bulls%2Fmichael-jordan-wall-decal%2F&psig=AOvVaw3Xut8lNn1yAsqDrxUZTEnx&ust=1538325988332659",
        "scores":[
            5,
            1,
            5,
            5,
            1,
            5,
            1,
            1,
            2,
            4
          ]
      },
      {
        "name":"Shotaro Kaneda",
        "picture":"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi86Lms1eDdAhXRMn0KHUExB-UQjRx6BAgBEAU&url=http%3A%2F%2Fs402.photobucket.com%2Fuser%2FDarkEntityEphemeral%2Flibrary%2FAKIRA%2FCharacters%2FShotaro%2520Kaneda&psig=AOvVaw0dSOmPrqEUKLHf0tGn1xFu&ust=1538326040924667",
        "scores":[
            1,
            1,
            4,
            1,
            5,
            2,
            3,
            5,
            2,
            3
          ]
      },
      {
        "name":"Ganon",
        "picture":"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi6lYbA1eDdAhWtJjQIHQTWCGkQjRx6BAgBEAU&url=http%3A%2F%2Fkoei.wikia.com%2Fwiki%2FGanondorf&psig=AOvVaw35VrsEgBA0qPZoRQhUr0VE&ust=1538326098551563",
        "scores":[
            2,
            1,
            3,
            4,
            5,
            2,
            3,
            2,
            2,
            1
          ]
      },
      {
        "name":"Howl Wizard",
        "picture":"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiB1Knb1eDdAhUaHTQIHZ5qBOYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.deviantart.com%2Fenmismanima%2Fart%2FHowl-Jenkins-Pendragon-Royal-Wizard-of-Ingary-653933856&psig=AOvVaw0Sv384yt9O0xHlXjJs-jgv&ust=1538326170093840",
        "scores":[
            4,
            2,
            5,
            5,
            4,
            2,
            3,
            4,
            3,
            2
          ]
      },
      {
        "name":"Cardi B",
        "picture":"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj9m7L81eDdAhWUITQIHZ49BTsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.irishtimes.com%2Fculture%2Fcardi-b-our-new-vbf-1.3381165&psig=AOvVaw1AAOYL3y6D2Rt_YTUkF8YO&ust=1538326213710639",
        "scores":[
            4,
            1,
            3,
            4,
            1,
            1,
            3,
            5,
            4,
            3
          ]
      },
      {
        "name":"Eminem",
        "picture":"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjSx-Ka1uDdAhVHIDQIHdEGBi0QjRx6BAgBEAU&url=https%3A%2F%2Ftwitter.com%2Feminem&psig=AOvVaw2krW0CJc_1QFgmCzBq_qha&ust=1538326292921049",
        "scores":[
            1,
            5,
            2,
            2,
            1,
            5,
            4,
            1,
            2,
            5
          ]
      },
      {
        "name":"Han",
        "picture":"https://vignette.wikia.nocookie.net/starwars/images/8/83/HanSolo-Fathead.png/revision/latest?cb=20161003042429",
        "scores":[
            3,
            1,
            2,
            2,
            4,
            1,
            2,
            3,
            4,
            2
          ]
      },

  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;
  