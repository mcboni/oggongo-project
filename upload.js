$(document).ready(function () {
    $("#submit").click(function (e) {
        var result = Validate();
        
   
            $.ajax({
                type: "POST",
                url: "comment_upload.php",
                data: {Names: $("#Names").val(),Comment:$("#Comment").val(), status:$("#status").val(), Post_id:$("#Post_id").val()},
                success: function (data) {
                   
                        $("#dat").html(data)
                        $("#Comment,#Names").val("")
                       
                },
                error: function (req, status, error) {
                    alert(req + " " + status + " " + error);
                }
            });
        
            return false;
    });

    

    function Validate() {
        var errorMessage = "";

       

        $("#message").html(errorMessage);
        if (errorMessage.length == 0)
            return true;
        else
            return false;
    }
});
