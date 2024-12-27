<html>
    <head>
        <title>66</title>
    </head>
    <body on load="greet()">
        This is page contains html and javascript
    </body>
    <script type="text/javascript">
    function greet(){
        name=prompt("enter name:","")
        age=prompt("enter your age:","")
        if(age<18){
            window.location="http://www.google.com"
            alter("not eligible to visit")
        }
        else{
            alert("welcom to site"+name);
        }
    }
    </script>
</html>