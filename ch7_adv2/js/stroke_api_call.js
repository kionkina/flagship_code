//List target characters
var characters = ["開", "務", "餘", "廣", "雖", "醫", "術", "殺"];

var stroke_data = "";
   const Http = new XMLHttpRequest();
   const url ="https://raw.githubusercontent.com/skishore/makemeahanzi/master/graphics.txt";


Http.open("GET", url);
   Http.send();
   Http.onreadystatechange=(e)=>{
 
       var response = Http.responseText;
       response = response.split("}") ;
       //console.log(response[0] + "}");
       stroke_data = JSON.parse(response[0] + "}");
       console.log(stroke_data.strokes[0]);
       
       //console.log(response);
    
   }


var dicts = [];
var strokes = {};

   function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    dicts = xmlHttp.responseText.split("}");
    for (var i=0; i < dicts.length; i++){
        try {
        dicts[i] = JSON.parse(dicts[i] + "}");
        }
        catch(err){
            i+= 1;
        }
       // console.log(dicts[i]);
    }
    
    handle_data();
}

//store data in dictionary
function handle_data(){
    //parse through file to file target characters
    for (var i=0; i< dicts.length; i++){
        if (dicts[i].character == "開"){
            strokes["開"] = dicts[i].strokes;
            console.log("開");
            console.log("FOUND IT!");
            console.log(i);
        }
        if (dicts[i].character == "務"){
            strokes["務"] = dicts[i].strokes;
            console.log("務");
            console.log("FOUND IT!");
            console.log(i);
        }
        if (dicts[i].character == "餘"){
            strokes["餘"] = dicts[i].strokes;
            console.log("餘");
            console.log("FOUND IT!");
            console.log(i);
        }
          if (dicts[i].character == "廣"){
            strokes["廣"] = dicts[i].strokes;
            console.log("廣");
            console.log("FOUND IT!");
            console.log(i);
        }
            if (dicts[i].character == "雖"){
            strokes["雖"] = dicts[i].strokes;
            console.log("雖");
            console.log("FOUND IT!");
            console.log(i);
        }
            if (dicts[i].character == "醫"){
            strokes["醫"] = dicts[i].strokes;
            console.log("醫");
            console.log("FOUND IT!");
            console.log(i);
        }
           if (dicts[i].character == "術"){
            strokes["術"] = dicts[i].strokes;   
            console.log("術");
            console.log("FOUND IT!");
            console.log(i);
        }
           if (dicts[i].character == "殺"){
            strokes["殺"] = dicts[i].strokes;
            console.log("殺");
            console.log("FOUND IT!");
            console.log(i);
        }

    }
}
