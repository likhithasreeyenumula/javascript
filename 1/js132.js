<html>
    <head>
        <title>132</title>
        <style>
            body{
                background-color:blue;
            }
            table,tr,td{
                border-collapse:collapse;
                border-style:none;
            }
            .d1{
                background-color:pink;
                width:200px;
                heigth:100px;
                margin-left:600px;
                margin-top:250px;
                color:yellow;
                box-shadow:4px 4px 4px #000000;
                padding:20px 20px 20px 20px;
            }
            .bst1{
                border-radius:5px;
                background-color:aqua;
            }
            .tbs1{
                border-radius:5px;
                background-color:green;
                color:yellow;
            }
        </style>
        <script src=""> </script>
    </head>
    <body>
        <form name="fm1">
            <div class="d1">
                <table>
                    <tr>
                        <td>
                            <lable for="aval">A</lable>
                            <input type="text" id="v1" name="aval" placeholder="a value" required focus class="tbs1"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <lable for="aval">B</lable>
                            <input type="text" id="v2" name="bval" placeholder="b value" required focus class="tbs1"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <lable for="aval">C</lable>
                            <input type="text" id="v3" name="cval" placeholder="c value" required focus class="tbs1"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="position:relative; left:20px;">
                            <input type="button" value="+" class="bst1" id="add"/>
                            <input type="button" value="-" class="bst1" id="sub"/>
                            <input type="button" value="*" class="bst1" id="mul"/>
                            <input type="button" value="/" class="bst1" id="div"/>
                            <input type="button" value="%" class="bst1" id="mod"/>
                            <input type="button" value="<-" class="bst1" id="reset"/>
                        </td>
                    </tr>
                </table>
            </div>
        </form>
        <script type="text/javascript">
        $(document).ready(function(){
            $("#add").click(function(){
                var a=parseInt($("#v1").val());
                var b=parseInt($("#v2").val());
                var c=a+b;
                $("#v3").val(c);
            });
            $("#sub").click(function(){
                var a=parseInt($("#v1").val());
                var b=parseInt($("#v2").val());
                var c=a-b;
                $("#v3").val(c);
            });
            $("#mul").click(function(){
                var a=parseInt($("#v1").val());
                var b=parseInt($("#v2").val());
                var c=a*b;
                $("#v3").val(c);
            });
            $("#div").click(function(){
                var a=parseInt($("#v1").val());
                var b=parseInt($("#v2").val());
                var c=a/b;
                $("#v3").val(c);
            });
            $("#mod").click(function(){
                var a=parseInt($("#v1").val());
                var b=parseInt($("#v2").val());
                var c=a%b;
                $("#v3").val(c);
            });
            $("#reset").click(function(){
                $("#v1").val(" ");
                $("#v2").val(" ");
                $("#v3").val(" ");
            });
        });
        </script>
    </body>
</html>