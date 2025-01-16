<html>
    <head>
        <title>131</title>
        <script src=" "> </script>
    </head>
    <body>
        <form>
            principal<input type="text" id="v1"/>
            Time<input type="text" id="v2"/>
            Rate of Interest<input type="text" id="v3"/>
            Payable<input type="text" id="v4"/>
            <input type="button" value="Simple Interest" id="calculater SI"/>
            <input type="button" value="Compound Interest" id="calculater CI"/>
        </form>
        <script>
            $(document).ready(function(){
                $("#calculater SI").click(function(){
                    var p=parentInt($("#v1").val());
                    var t=parentInt($("#v2").val());
                    var r=parentInt($("#v3").val());
                    var si=p*t*r/100;
                    $("#v4").val(si);
                });
                $("#calculate CI").click(function(){
                    var p=parentInt($("#v1").val());
                    var t=parentInt($("#v2").val());
                    var r=parentInt($("#v3").val());
                    var ci=p*math.pow(1+r/100,t);
                    $("#v4").val(ci);
                });
            });
        </script>
    </body>
</html>