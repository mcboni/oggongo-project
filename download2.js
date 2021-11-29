$(document).ready(function () {
 
     
        
   
            $.ajax({
                type: "POST",
                url: "coment_download2.php",
                success: function (data) {
                        $("#dat").html(data)
                },
                error: function (req, status, error) {
                    alert(req + " " + status + " " + error);
                }
            });
        
            return false;
   

    

});
