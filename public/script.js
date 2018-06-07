

$(document).ready(function () {
    var classement ="";
    var classe = "";
    $.ajax({
        url: "http://localhost:3007/liste",
        methode: 'GET',
        success: function (data) {
            for (var id in data) {
                classe = setclass(data[id].niveau);
                classement = data[id].niveau;
                console.log(classe);
                console.log(data[id].Competence)
                $("#liste-competences").append('<li class="list-group-item ' + classe + '">' + data[id].Competence + ' ' + etoile(classement) + '</li>');
                
            }

        }
    });


});


var etoile = function (nbr) {
    var lesEtoiles = '<i class="fas fa-star"></i>';
    resultat = lesEtoiles.repeat(nbr)

    return resultat;
};
var tab = [];

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