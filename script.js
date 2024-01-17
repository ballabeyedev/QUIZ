$(document).ready(function() {
    var bonneReponse = "MESSI";

    $(".joueur").click(function() {
        $(".joueur").removeClass("selected");

        $(this).addClass("selected");
        
        $(this).css({
            "background-color": "white",
            "color": "black"
        });
    });

    $("#valider").click(function() {
        var joueurSelectionne = $(".joueur.selected");
        if (joueurSelectionne.length > 0) {
            var nomJoueurSelectionne = joueurSelectionne.data("nom");

            $(".joueur").removeClass("selected");

            $(".joueur").removeClass("correct wrong");

            if (nomJoueurSelectionne === bonneReponse) {
                joueurSelectionne.addClass("correct");
            } else {
                joueurSelectionne.addClass("wrong");

                $(".joueur[data-nom='" + bonneReponse + "']").addClass("correct");
            }
            
            $(".correct").css({
                "background-color": "green",
                "color": "white"
            });

            $(".wrong").css({
                "background-color": "red",
                "color": "white"
            });
        } 
    });
});
