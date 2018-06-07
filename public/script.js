

$(document).ready(function () {
    var classement ="";
    var classe = "";
    var array = [];



    $.ajax({
        url: "http://localhost:3007/liste",
        methode: 'GET',
        success: function (data) {

            // met l'objet dans l'ordre croissant
            array = data ;
            array.sort(function (a, b) {
                return a.niveau - b.niveau;
              });
              console.log(array);


            var array2 = array.splice(0,5)
            // array.splice(0,4)

            for (var id in array2) {
                classe = setclass(array2[id].niveau);
                classement = array2[id].niveau;
                // console.log(classe);
                // console.log(classement)
                // console.log(data[id].Competence)
                $("#liste-competences-2").append('<li class="list-group-item ' + classe + '">' + array2[id].Competence + ' ' + etoile(classement) + '</li>');                
            }

            for (var id in array) {
                classe = setclass(array[id].niveau);
                classement = array[id].niveau;
                // console.log(classe);
                // console.log(classement)
                // console.log(data[id].Competence)
                $("#liste-competences").append('<li class="list-group-item ' + classe + '">' + array[id].Competence + ' ' + etoile(classement) + '</li>');                
            }
        }
    });


});

var etoile = function (nbr) {
    var lesEtoiles = '<i class="fas fa-star"></i>';
    resultat = lesEtoiles.repeat(nbr);
    return resultat;
};


var setclass = function (niveau) {
    var classe = "";
    switch (niveau) {
        case 1:
        case 2:
            classe = 'rouge';

            break;
        case 3:
        case 4:
            classe = 'vert';

            break;
        case 5:
        case 6:
            classe = 'vert-foncé';

            break;

        default:
            break;
    }


    return classe;
}

