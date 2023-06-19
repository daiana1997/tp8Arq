  /*****************/
 /* APP VARIABLES */
/*****************/

var Tick = undefined;
ID = 1;
var Machines = {
    1 : new Array(),
    2 : new Array(),
    3 : new Array(),
    4 : new Array(),
}


  /****************/
 /* UI FUNCTIONS */
/****************/

$(function() {
    Clear();

    $('#elemento1').click(function(){
        ID = 1;
        document.getElementById("etiqueta").innerText = "Cifrar";
    });
    $('#elemento2').click(function(){
        ID = 2;
        document.getElementById("etiqueta").innerText = "Descifrar";
    });
    $('#elemento3').click(function(){
        ID = 3;        
        document.getElementById("etiqueta").innerText = "Cifrar Vigenère";
    });
    $('#elemento4').click(function(){
        ID = 4;        
        document.getElementById("etiqueta").innerText = "Descifrar Vigenère";
    });
    $('#info').click(function(){
        $('#instrucciones' + ID).modal('show');
    });
});

function ScrollToID(id, time, table){

    container = $('#tabla' + table);
    item = $('#' + id);
    $('body').animate({ scrollTop: item.offset().top - container.offset().top + container.scrollTop() }, time >= 0 ? time:600, 'swing');
}

function ScrollLeftToID(id, time, table){

    container = $('#tabla' + table);
    item = $('#' + id);
    $('#tabla' + table).animate({ scrollLeft: item.offset().left - 5 * container.offset().left + container.scrollLeft() }, time >= 0 ? time:600, 'swing');
}





function ChangeActiveRow(table, time) { // This method requieres that 'the caller' sets row's id as 'new-row' before call this. 

    /* Remove old active row*/
    oldRow = $('#active-row');
    oldRow.attr('id', '');
    oldRow.attr('class', '');

    /* Set new active row*/
    newRow = $('#new-row');
    newRow.attr('id', 'active-row');    
    ScrollLeftToID('active-row', time, table);
    newRow.attr('class', 'bg-info text-light');
}

function Clear(){
    // Popups
    $('[data-toggle="popover1"]').popover();
    $('#myModal').modal('hide');
    $('#instrucciones').modal('hide');    

    // SET COUNT
    $('#desplazamiento').text(Machines[ID].Count);

}

function Update(){
       // SET COUNT
       $('#desplazamiento').text(Machines[ID].Count);
   
}