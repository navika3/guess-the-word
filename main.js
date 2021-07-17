function adduser(){
    player1_name=document.getElementById("player1").value;
    player2_name=document.getElementById("player2").value;
    localStorage.setItem("key1",player1_name);
    localStorage.setItem("key2",player2_name);
    window.location="index2.html";
    
}