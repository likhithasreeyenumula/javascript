<html>
    <head>
        <title>90</title>
        <script src="file://d://softwares/jquery-3.7.1.js"></script>
        <script type="text/javascript" language="javascript">
        $(document).ready(function(){
            $("button").click(function(){
                $("p").dide(1000);
                alert("the para is hidden");
            });
        });
        </script>
    </head>
    <body>
    <button>Hide</button>
    <p>This is a para with content</p>
    </body>
</html>