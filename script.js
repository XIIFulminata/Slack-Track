function showMovies() {
    
    $( "#movieClick" ).click(function() {
        $( ".music" ).hide( "slow", function() {
            });
        $( ".television" ).hide( "slow", function() {
            });
        $( ".book" ).hide( "slow", function() {
            });
        $( ".movie" ).show( "slow", function() {
            });
    });
    
}

function showMusic() {
    
    $( "#musicClick" ).click(function() {
        $( ".television" ).hide( "slow", function() {
            });
        $( ".movie" ).hide( "slow", function() {
            });
        $( ".book" ).hide( "slow", function() {
            });
        $( ".music" ).show( "slow", function() {
            });
    });
    
}

function showTelevision() {
    
    $( "#televisionClick" ).click(function() {
        $( ".music" ).hide( "slow", function() {
            });
        $( ".movie" ).hide( "slow", function() {
            });
        $( ".book" ).hide( "slow", function() {
            });
        $( ".television" ).show( "slow", function() {
            });
    });
    
}

function showBooks() {
    
    $( "#bookClick" ).click(function() {
        $( ".music" ).hide( "slow", function() {
            });
        $( ".movie" ).hide( "slow", function() {
            });
        $( ".television" ).hide( "slow", function() {
            });
        $( ".book" ).show( "slow", function() {
            });
        /*\
        test append

        var input = "<p>fuckouttaahere</p>";
        $("#content").append(input);
        */

    });
    
}

function submitAddContent() {
        var addedContent={};
        addedContent['name']=document.getElementById('nameMod').value;
        addedContent['mediaType']=document.getElementById('mediaTypeMod').value;
        addedContent['date']=document.getElementById('dateMod').value;
        addedContent['recurring']=document.getElementById('recurringMod').value;
        addedContent['favorite']=document.getElementById('favoriteMod').checked;
        console.log(addedContent);

        var input='<img src="Assets/Images/'+ addedContent["name"] +'.png" class="' + addedContent["mediaType"] + '">';
        $("#content").append(input);

        console.log(addedContent[name]);
        console.log(input);
        /*
        going to append a tag like  the teenwolf tag  to the content div,
        example is john wick 2 should look like below
        unify filetype
         <img src="Assets/Images/John Wick Chapter Two.png" class="movie">
         <img src="Assets/Images/\name\.png" class="\mediaType\">
        <img data-toggle="modal" data-target="#myModal" src="AddContent.png">
        <img src="Assets/Images/TeenWolf.jpg" class="television">
         */

        /*
        eval("var " + document.getElementById("nameMod").value.replace(" ","") + "= {}");

        eval(document.getElementById("nameMod").value.replace(" ","")+"['mediaType']='"+ document.getElementById("mediaTypeMod").value+"'");
        eval(document.getElementById("nameMod").value.replace(" ","")+"['dateMod']='"+ document.getElementById("dateMod").value+"'");
        eval(document.getElementById("nameMod").value.replace(" ","")+"['recurringMod']='"+ document.getElementById("recurringMod").value+"'");
        eval(document.getElementById("nameMod").value.replace(" ","")+"['favoriteMod']='"+ document.getElementById("favoriteMod").checked+"'");
        console.log(eval(document.getElementById("nameMod").value.replace(" ","")));
         */

        /*set all values to 0/null at end*/
        /*

         televison[name] = {};
         televison[name] = {mediaType: document.getElementById('mediaTypeMod').value};

         */
}

/*
 eval("var " + document.getElementById("nameMod").value.replace(" ","") + "= {}")
 undefined
 TeenWolf["mediaType"]=document.getElementById("mediaTypeMod").value
 "movie"
 TeenWolf["dateMod"]=document.getElementById("dateMod").value
 "2016-12-15"
 TeenWolf["recurringMod"]=document.getElementById("recurringMod").value
 "weekly"
 TeenWolf["favoriteMod"]=document.getElementById("favoriteMod").checked
 */