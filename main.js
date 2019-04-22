
function couleur_input(input)
{
    return input;
}

$('.create').on('click', function(){  /* doc créé event que quand page ok script utilisable */

    let div = $('<div></div>')
    let couleur = $('input').val();

/* couleur jaune quand il n'y a rien */
    if (couleur=="") {
$(div).addClass(couleur_input("jaune"))
    }else{
$(div).addClass(couleur_input(couleur))
    }

$('#cadre').append(div)

$(div).addClass(couleur_input(couleur))
 /* append fait enfant à balise sélectionnée avec event fonction */

$(div).css ({
    width: '50px',
    height:'50px',
    border: '0.5px solid black',
    margin: '5px'
})

/* fonction qui permet de supprimer les div avec remove */
$('.remove').on('click', function() {
    let supprimer = $('input').val();
    $ ('#cadre div').remove(`.${supprimer}`)

})

/* fonction qui remove toutes les div */
$('.destroy').on('click', function() {
    $('#cadre').empty()
})

/* fonction qui permet d'ajouter du texte */
$('.write').on('click', function(){
    let ecrire = $('input').val();
    $('#cadre div').html(`<p>${ecrire}</p>`)
})

/* fonction qui permet de vider la totalité de cadre */
$('.clear').on('click', function(){
let clear = $('input').val('');
$('#cadre ').empty()
})

/* permet de créer un effet sur les div */
$('.shake').on('click', function(){
    $('#cadre div').effect("shake",{distance:5}, 2000);
})

/* event explosion des cubes */
$('#cadre').on('click', ".rouge", function(){
    $(this).hide("explode",{pieces: 10}, 2000)
})

/* permet de changer la couleur verte en bleu au passage  de la souris */
$('#cadre').on('mouseover', '.vert', function(){
    $(this).css('background', 'blue' );
})

/* change le jaune en rouge au bout de 2secondes */
$('#cadre').on('click', '.jaune', function(){
    $(this).css('transition-delay', '2s').css('background', 'red');
})

/* double-click affiche nbr de DIV mm couleur modale */
$('#cadre').on('dblclick','div', function(){
var crea = $(this).attr('class')
var other = $("." + crea).length
$('.modal').dialog ({
modal : true,
title : `vous avez ${other} carré de ${crea}`
})
})


})
