var currentcaracter;
var lowerstrike;
var upperstrike;

function transform() {
    let text = document.getElementById("myText").value;
    let finalsentence = "";
    for (let i = 0; i < text.length ; i++){
        if (text.charAt(i) == " "){
            finalsentence = finalsentence + " ";
        }
        else{
        if (Math.round(Math.random()) == 0 && lowerstrike < 2 || upperstrike++ == 2){
                finalsentence = finalsentence + text.charAt(i).toLowerCase();
                lowerstrike++;
                upperstrike = 0;}
        else{
                finalsentence = finalsentence + text.charAt(i).toUpperCase();
                upperstrike++;
                lowerstrike = 0;}
            }
        }
    document.getElementById("result").value = finalsentence;
    console.log(finalsentence);
}

    function copy() {
        var copyText = document.getElementById("result");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
    }
