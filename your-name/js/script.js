/**Gestion des animations */

ScrollReveal({ reset: false });/** Ici je fais en sorte que mes animations ne se répètent pas à chaque fois que l'élément arrive dans la vue */

const sr = ScrollReveal(); /**J'enregistre dans une variable sr la fonction permettant l'appel de la bibliothèque scrollreveal */

/**sr.reveal ('element que l'on veut animer',option de l'animation) sert à choisir un élément et lui appliquer une animation à l'arrivée sur la page */
sr.reveal('.navbar',{
    duration: 2000,/**ici on choisit la durée de l'animation sachant que 1000=1s */
    origin:'top',/**on choisit d'ou apparait l'élément */
    distance:'50px',/**et de combien de pixel il doit se décaler pour revenir avec l'animation a sa possition initiale */
    
    
})

sr.reveal('#text',{
    duration: 2000,
    distance: '50px',
    origin: 'top',
    delay: '500',/**permet d'ajouter un décalage au déclencgement de l'anilation sachant que 1000=1s de decalage */
})

sr.reveal('#text2',{
    duration: 2000,
    distance: '50px',
    origin: 'top',
    delay: '700',
})

sr.reveal('#info',{
    duration: 2000,
    distance: '100px',
    origin: 'bottom',
})

sr.reveal('.parallax',{
    duration: 2000,
    distance: '50px',
    origin: 'top',
})

sr.reveal('.pochettefilm',{
    duration:2000,
    distance: '50px',
    origin: 'right',
})

sr.reveal('.text_box',{
    duration:2000,
    distance: '50px',
    origin: 'left',
})


sr.reveal('.bquiz',{
    duration:2000,
    distance: '50px',
    origin: 'bottom',
})

sr.reveal('.binfo',{
    duration:2000,
    distance: '50px',
    origin: 'bottom',
    delay: '300'
})

sr.reveal('.text_box_quiz',{
    duration:2000,
    distance: '100px',
    origin: 'bottom',
})

sr.reveal('.fondpagequiz',{
    duration: 2000,
    distance: '50px',
    origin: 'top',
})
/**Gestion du quiz */

     

const radioButtonsQuestion1 = document.querySelectorAll('input[name="realisateur"]');
const radioButtonsQuestion2 = document.querySelectorAll('input[name="personnages"]');
const numberButtonsQuestion3 = document.querySelector('input[name="date"]');
const radioButtonsQuestion4 = document.querySelectorAll('input[name="tokyo"]');
const radioButtonsQuestion5 = document.querySelectorAll('input[name="vivre"]');
const textButtonsQuestion6 = document.querySelector('input[name="rep_titre"');
const radioButtonsQuestion7 = document.querySelectorAll('input[name="cause"');
const radioButtonsQuestion8 = document.querySelectorAll('input[name="duree"');
const radioButtonsQuestion9 = document.querySelectorAll('input[name="maniere"');
const selectButtonsQuestion10 = document.querySelector('select[name="q10rep"')





/**on créer une fonction qui va compter le nombre de bonnes et mauvaises réponses et afficher un bilan du quiz*/
function check(){

    var rep_true=0;/**on créer une variable qui va contenir le nombre de bonne réponses */
    var rep_false=0;/**idem pour le nombre de mauvaises réponses */
    var selected_answer;/**on crée une variable qui va contenir la valeur de la réponse donné par l'utilisateur */
    var rep_question_1;/**on crée une variable pour chaque question dans laquelle on va stocker si la réponse est bonne ou non, par la suite on les réutiliseras pour afficher le bilan*/
    var rep_question_2;
    var rep_question_3;
    var rep_question_4;
    var rep_question_5;
    var rep_question_6;
    var rep_question_7;
    var rep_question_8;
    var rep_question_9;
    var rep_question_10;
    /**Check Question 1 */
    for (const radioButton of radioButtonsQuestion1){/**on créer une boucle qui pour chaque bouton radio bouton de la question 1 vérifie si il a été coché */
        if(radioButton.checked){
            selected_answer=radioButton.value;/**si le bouton est coché on récupère sa valeur dans la variable selected_answer */
            if(selected_answer=="Shinkai"){/**on vérifie si la valeur récupéré est identique à celle correcte */
                rep_true=rep_true+1/**si oui on ajoute 1 a la variable des réponses correctes */
                rep_question_1="correcte";
            }
            else{
                rep_false=rep_false+1/**si non on ajoute 1 a la varriable des réponses incorrectes */
                rep_question_1="incorrecte"
            }
            
        }
    }

    /**Check Question 2 */
    for (const radioButton of radioButtonsQuestion2){/**on créer une boucle qui pour chaque bouton radio bouton de la question 1 vérifie si il a été coché */
        if(radioButton.checked){
            selected_answer=radioButton.value;/**si le bouton est coché on récupère sa valeur dans la variable selected_answer */
            if(selected_answer=="Mitsuha"){/**on vérifie si la valeur récupéré est identique à celle correcte */
                rep_true=rep_true+1
                rep_question_2="correcte"
            }
            else{
                rep_false=rep_false+1
                rep_question_2="incorrecte"
            }
            
        }
    }

    /**Check Question 3 (input number) */
    if(numberButtonsQuestion3.value=="2016"){
        rep_true=rep_true+1
        rep_question_3="correcte"
    }
    else{
        rep_false=rep_false+1
        rep_question_3="incorrecte"
    }

    /**check question 4 */
    for (const radioButton of radioButtonsQuestion4){
    if(radioButton.checked){
        selected_answer=radioButton.value;
        if(selected_answer=="Taki"){
            rep_true=rep_true+1
            rep_question_4="correcte";
        }
        else{
            rep_false=rep_false+1
            rep_question_4="incorrecte"
        }
        
    }
    }

    /**check question 5 */
    for (const radioButton of radioButtonsQuestion5){
        if(radioButton.checked){
            selected_answer=radioButton.value;
            if(selected_answer=="grandmere"){
                rep_true=rep_true+1
                rep_question_5="correcte";
            }
            else{
                rep_false=rep_false+1
                rep_question_5="incorrecte"
            }
            
        }
    }
    
    /**Check Question 6 (input text) */
    if(textButtonsQuestion6.value=="Kimi no na wa" || textButtonsQuestion6.value=="Kimi No Na Wa" || textButtonsQuestion6.value=="Kimi no Na wa" || textButtonsQuestion6.value=="kimi no na wa"){ /**|| est l'équivalent du or en python, il me permet de mettre plusieurs conditions à mon if (ici plusieurs orthographe à la réponse) */
        rep_true=rep_true+1
        rep_question_6="correcte"
    }
    else{
        rep_false=rep_false+1
        rep_question_6="incorrecte"
    }

     /**check question 7*/
     for (const radioButton of radioButtonsQuestion7){
        if(radioButton.checked){
            selected_answer=radioButton.value;
            if(selected_answer=="meteorite"){
                rep_true=rep_true+1
                rep_question_7="correcte";
            }
            else{
                rep_false=rep_false+1
                rep_question_7="incorrecte"
            }
            
        }
    }

    /**check question 8 */

    for (const radioButton of radioButtonsQuestion8){
        if(radioButton.checked){
            selected_answer=radioButton.value;
            if(selected_answer=="3-"){
                rep_true=rep_true+1
                rep_question_8="correcte";
            }
            else{
                rep_false=rep_false+1
                rep_question_8="incorrecte"
            }
            
        }
    }

    /**check question 9 */

    for (const radioButton of radioButtonsQuestion9){
        if(radioButton.checked){
            selected_answer=radioButton.value;
            if(selected_answer=="dodo"){
                rep_true=rep_true+1
                rep_question_9="correcte";
            }
            else{
                rep_false=rep_false+1
                rep_question_9="incorrecte"
            }
            
        }
    }

    /**Check Question 10 (select) */
    if(selectButtonsQuestion10.value=="magneto"){
        rep_true=rep_true+1
        rep_question_10="correcte"
    }
    else{
        rep_false=rep_false+1
        rep_question_10="incorrecte"
    }

    /**check bilan */
    /**ces lignes permettent d'envoyer du texte dans les différents span vide créés dans le fichier html et identifiés par leur id, on affiche le taux de bonnes réponses et le bilan*/
    document.getElementById('input_inforesultats').innerHTML ="Scroll pour découvrirs tes résultats !";    
    document.getElementById('input_resultats').innerHTML ="Ton score final est de " + rep_true + " bonne(s) réponse(s) sur 10 questions.";   
    document.getElementById('bilanquestion10').innerHTML ="Question n°10 : Ta réponse était "+ rep_question_10; 
   
    /**question 1 */
    if (rep_question_1=="correcte"){
        document.getElementById('bilanquestion1').innerHTML ="Ta réponse est "+ rep_question_1 + " : Il fallait effectivement répondre \'Makoto Shinkai\'"; 
    }

    else {
        document.getElementById('bilanquestion1').innerHTML ="Ta réponse est "+ rep_question_1 + " : Il fallait répondre \'Makoto Shinkai\'";
    }

    /**question 2 */
    if (rep_question_2=="correcte"){
        document.getElementById('bilanquestion2').innerHTML ="Ta réponse est "+ rep_question_2 + " : Il fallait effectivement répondre \'Mitsuha et Taki\'"; 
    }

    else {
        document.getElementById('bilanquestion2').innerHTML ="Ta réponse est "+ rep_question_2 + " : Il fallait répondre \'Mitsuha et Taki\'";
    }

    /**question 3 */
    if (rep_question_3=="correcte"){
        document.getElementById('bilanquestion3').innerHTML ="Ta réponse est "+ rep_question_3 + " : Il fallait effectivement répondre \'2016\'"; 
    }

    else {
        document.getElementById('bilanquestion3').innerHTML ="Ta réponse est "+ rep_question_3 + " : Il fallait répondre \'2016\'";
    }

    /**question 4 */
    if (rep_question_4=="correcte"){
        document.getElementById('bilanquestion4').innerHTML ="Ta réponse est "+ rep_question_4 + " : Il fallait effectivement répondre \'Taki\'"; 
    }

    else {
        document.getElementById('bilanquestion4').innerHTML ="Ta réponse est "+ rep_question_4 + " : Il fallait répondre \'Taki\'";
    }

    /**question 5 */
    if (rep_question_5=="correcte"){
        document.getElementById('bilanquestion5').innerHTML ="Ta réponse est "+ rep_question_5 + " : Il fallait effectivement répondre \'Sa grand-mère et sa petite soeur\'"; 
    }

    else {
        document.getElementById('bilanquestion5').innerHTML ="Ta réponse est "+ rep_question_5 + " : Il fallait répondre \'Sa grand-mère et sa petite soeur\'";
    }

    /**question 6 */
    if (rep_question_6=="correcte"){
        document.getElementById('bilanquestion6').innerHTML ="Ta réponse est "+ rep_question_6 + " : Il fallait effectivement répondre \'Kimi no na wa\'"; 
    }

    else {
        document.getElementById('bilanquestion6').innerHTML ="Ta réponse est "+ rep_question_6 + " : Il fallait répondre \'Kimi no na wa\'";
    }

    /**question 7 */
    if (rep_question_7=="correcte"){
        document.getElementById('bilanquestion7').innerHTML ="Ta réponse est "+ rep_question_7 + " : Il fallait effectivement répondre \'La chute d'une météorite\'"; 
    }

    else {
        document.getElementById('bilanquestion7').innerHTML ="Ta réponse est "+ rep_question_7 + " : Il fallait répondre \'La chute d'une météorite\'";
    }
    
    /**question 8 */
    if (rep_question_8=="correcte"){
        document.getElementById('bilanquestion8').innerHTML ="Ta réponse est "+ rep_question_8 + " : Il fallait effectivement répondre \'Trois ans avant les événements vécus par Taki\'"; 
    }

    else {
        document.getElementById('bilanquestion8').innerHTML ="Ta réponse est "+ rep_question_8 + " : Il fallait répondre \'Trois ans avant les événements vécus par Taki\'";
    }

     /**question 9 */
     if (rep_question_9=="correcte"){
        document.getElementById('bilanquestion9').innerHTML ="Ta réponse est "+ rep_question_9 + " : Il fallait effectivement répondre \'Quand ils dorment\'"; 
    }

    else {
        document.getElementById('bilanquestion9').innerHTML ="Ta réponse est "+ rep_question_9 + " : Il fallait répondre \'Quand ils dorment\'";
    }

     /**question 10 */
     if (rep_question_10=="correcte"){
        document.getElementById('bilanquestion10').innerHTML ="Ta réponse est "+ rep_question_10 + " : Il fallait effectivement répondre \'Ils se laissent des messages sur magnétophone\'"; 
    }

    else {
        document.getElementById('bilanquestion10').innerHTML ="Ta réponse est "+ rep_question_10 + " : Il fallait répondre \'Ils se laissent des messages sur magnétophone\'";
    }




 
 
 
 

   
 
   
  
}


