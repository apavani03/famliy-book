
    var name = ["Mom","Dad","Sasha"];
    var images = ["https://clipartart.com/images/wait-mom-clipart-3.png","https://4.bp.blogspot.com/-PdQPE5JFR2g/WS9Pi_4q8lI/AAAAAAABIHY/iJnTUDpTB34iITr-hBJZccBfxlC1jcywwCKgB/s1600/Dot_CharaImg_Dad.png","https://th.bing.com/th/id/Ra48ecf46b57df81c82a2e021f3ef7c85?rik=hMkRqeFKjJG86A&riu=http%3a%2f%2fstatic.vectorcharacters.net%2fuploads%2f2013%2f02%2fYoung_Girl_Vector_Character_Preview.jpg&ehk=BK3ExkQjipX45RsE6Hnp31S4SlWNvV%2fR9sbvguorOz4%3d&risl=&pid=ImgRaw"];
    var i=0; 
    function next() {
        if(i=3){
            i=0;
        }
         document.getElementById("names").innerHTML = name[i];
          document.getElementById("image_album").src = images[i];
           i++; 
         document.getElementById("audio").play();
         }
    
    
    
    