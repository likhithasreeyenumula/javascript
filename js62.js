<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>62</title>
    <style type="text/css">
    .d1{
        margin-left:600px;
        margin-top:225px;
        background-color:#6E69BF;
        width:260px;
        padding:10px 10px 10px 10px;
        box-shadow:2px 2px 2px #000000;
        color:yellow;
    }
    body{
        background-color:#F6FFCE;
    }
    .t1{
        border-radious:5px;
    }
    .img1{
        margin-left:600px;
    }
    .bts1{
        margin-left:40px;
    }
    </style>
    <body>
        <img class="img1" src="file://e:/Likhitha/IT/images/gitlogo.png">
        <form name="fm1">
            <div class="d1">
                <table>
                    <tr>
                        <td>
                            <label for="lb1">A</label>
                        </td>
                        <td>
                            <input type="text" id="v1" placeholder="a value" required auto focus class="t1">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="lb2">B</label>
                        </td>
                        <td>
                            <input type="text" id="v2" placeholder="b value" required auto focus class="t1">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="lb1">C</label>
                        </td>
                        <td>
                            <input type="text" id="v3" placeholder="c value" required auto focus class="t1">
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="button" value="checkBig" onclick="Cbig()"></td>
                        <td><input type="reset" value="clear" onclick="reset()" style="margin-left:80px;"></td>
                    </tr>
                </table>
            </div>
        </form>
    </body>
    <script type="text/javascript">
    function cbig(){
        a=parseInt(document.get ElementById("v1").value)
        b=parseInt(document.get ElementById("v2").value)
        c=parseInt(document.get ElementById("v3").value)
        if(a>b && a>c){
            alert("a is big")                
            }
        else if(b>c){
            alert("b is big")
            }
        else{
            alert("c is big")
        }
        
    }
    </script>
</html>