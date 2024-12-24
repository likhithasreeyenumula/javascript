<html>
    <head>
        <style type="text/css">
        body{
            background-color:bisque;
        }
        table,tr,td{
            border-collapse:collapse;
            border-style:none;
        }
        .d1{
            background-color:dark magenta;
            width:200px;
            height:100px;
            margin-top:250;
            color:yellow;
            box-shadow:4px 4px 4px #000000;
            padding:20px 20px 20px 20px;
        }
        .bts1{
            border-radius:5px;
            background-color:aqua;
        }
        .tbs1{
            border-radius:5px;
            background-color:green;
            color:yellow;
        }
        </style>
    </head>
    <body>
        <form name="fm1">
            <div class="d1">
                <table>
                    <tr>
                        <td>
                            <label for="aval">A</label>
                            <input type="text" id="v1" name="aval" placeholder="a value" required focus class="tbs1"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="bval">B</label>
                            <input type="text" id="v2" name="bval" placeholder="b value" required class="tbs1"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="cval">C</label>
                            <input type="text" id="v3" name="cval" placeholder="c value" required class="tbs1"></input>
                        </td>
                    </tr>
                    <tr>
                        <td style="position:relative; left:20px;">
                            <input type="button" value="+" class="bts1" onclick="mysum()"></input>
                        </td>
                    </tr>
                    <tr>
                        <td style="position:relative; left:20px;">
                            <input type="button" value="-" class="bts1" onclick="mysub()"></input>
                        </td>
                    </tr>
                    <tr>
                        <td style="position:relative; left:20px;">
                            <input type="button" value="*" class="bts1" onclick="mymul()"></input>
                        </td>
                    </tr>
                    <tr>
                        <td style="position:relative; left:20px;">
                            <input type="button" value="/" class="bts1" onclick="mydiv()"></input>
                        </td>
                    </tr>
                    <tr>
                        <td style="position:relative; left:20px;">
                            <input type="button" value="%" class="bts1" onclick="mymod()"></input>
                        </td>
                    </tr>
                    <tr>
                        <td style="position:relative; left:20px;">
                            <input type="button" value="<-" class="bts1" onclick="reset()"></input>
                        </td>
                    </tr>
                </table>
            </div>
        </form>
    </body>
    <script type="text/javascript">
    function mysum(){
        a=parseInt(document.getElementById("v1").value);
        b=parseInt(document.getElementById("v2").value);
        c=a+b;
        document.getElementById("v3").value=c;
    }
    function mysub(){
        a=parseInt(document.getElementById("v1").value);
        b=parseInt(document.getElementById("v2").value);
        c=a-b;
        document.getElementById("v3").value=c;
    }
    function mydiv(){
        a=parseInt(document.getElementById("v1").value);
        b=parseInt(document.getElementById("v2").value);
        c=a/b;
        document.getElementById("v3").value=c;
    }
    function mymul(){
        a=parseInt(document.getElementById("v1").value);
        b=parseInt(document.getElementById("v2").value);
        c=a*b;
        document.getElementById("v3").value=c;
    }
    function mymod(){
        a=parseInt(document.getElementById("v1").value);
        b=parseInt(document.getElementById("v2").value);
        c=a%b;
        document.getElementById("v3").value=c;
    }
    </script>
</html>