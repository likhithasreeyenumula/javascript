<html>
    <head>
        <style>
            body{
                font-famil:Arial;
                background-color:pink;
                display:flex;
                justify-content:center;
                align-items:center;
                heigth:100px;
                margin:400px;
            }
            .container{
                background-color:aqua;
                padding:20px;
                border-radious:8px;
                border-right:0;
                width:400px;
            }
            label{
                display:block;
                margin-bottom:5px;
                font-weight:bold;
            }
            input{
                padding:8px;
                width:300px;
                margin-bottom:15px;
                border:1px solid #ccc;
                border-radious:4px;
            }
            .button-container{
                text-align:center;
            }
            button{
                padding:10px 20px;
                background-color:#007bff;
                color:#fff;
                border-radious:4px;
                cursor:pointer;
                margin:5px;
            }
            #result{
                margin-top:20px;
                font-size:1.2em;
                color:#333;
            }
        </style>
    </head>
    <body>
        <div>
            <label for="number">Number:</label>
            <input type="text" id="sno" placeholder="enter student number" requried>
            <label for="name">Name:</label>
            <input type="text" id="sname" placeholder="enter student name" requried>
            <label for="class">Class:</label>
            <input type="text" id="sclass" placeholder="enter student class" requried>
            <label for="section">Section:</label>
            <input type="text" id="section" placeholder="enter student section" requried>
            <label for="marks1">marks1:</label>
            <input type="text" id="smarks1" placeholder="enter student marks1" requried>
            <label for="marks2">marks2:</label>
            <input type="text" id="smarks2" placeholder="enter student marks2" requried>
            <label for="marks3">marks3:</label>
            <input type="text" id="smarks3" placeholder="enter student marks3" requried>
            <label for="marks4">marks4:</label>
            <input type="text" id="smarks4" placeholder="enter student marks4" requried>
            <label for="marks5">marks5:</label>
            <input type="text" id="smarks5" placeholder="enter student marks5" requried>
            <label for="marks6">marks6:</label>
            <input type="text" id="smarks6" placeholder="enter student marks6" requried>
         </div>
         <div class="button-container">
            <button onclick="calculateResults()">calculate</button>
            <button onclick="resetfields()">Reset</button>
         </div>
         <div id="result"></div>
         <script>
            function calculateResults(){
                const sno=document.getElementById("sno").value;
                const sname=document.getElementById("sname").value;
                const sclass=document.getElementById("class").value;
                const section=document.getElementById("section").value;
                const marks=[
                    parseFloat(document.getElementById('mark1')).value;
                    parseFloat(document.getElementById('mark2')).value;
                    parseFloat(document.getElementById('mark3')).value;
                    parseFloat(document.getElementById('mark4')).value;
                    parseFloat(document.getElementById('mark5')).value;
                    parseFloat(document.getElementById('mark6')).value;
                ];
                let total=0;
                let isfail=false;
                for(let i=0;i<marks.length;i++){
                    if(marks[i]<35){
                        isfail=true;
                    }
                    total t=marks[i];
                }
                const average=total/marks.length;
                let(isfail){
                    if(isfail){
                        grade="F";
                    }
                    elseif(average>=90){
                        grade="A";
                    }
                    elseif(average>=75){
                        grade="B";
                    }
                    elseif(average>=60){
                        grade="c";
                    }
                    elseif(average>=50){
                        grade="d";
                    }
                    else{
                        grade="E";
                    }
                    const pass or fail=isfail? "fail":"pass";
                    var resultText="<p>Student Name:"+sno+"</p>";
                    resultText="<p>Student Name:"+sname+"</p>";
                    resultText="<p>Student Class:"+sclass+"</p>";
                    resultText="<p>Student Section:"+section+"</p>";
                    resultText="<p>Student Marks:"+total+"</p>";
                    resultText="<p>Average marks:"+average.to string()+"</p>";
                    resultText="<p>Grade:"+grade+"</p>";
                    resultText="<p>Result:"+passorfail+"</p>";
                    document.getElementById('resutl').innerHtml=resultText;
                }
                function resultFields(){
                    document.getElementById('sno').value='';
                    document.getElementById('sname').value='';
                    document.getElementById('sclass').value='';
                    document.getElementById('section').value='';
                    document.getElementById('marks1').value='';
                    document.getElementById('marks2').value='';
                    document.getElementById('marks3').value='';
                    document.getElementById('marks4').value='';
                    document.getElementById('marks5').value='';
                    document.getElementById('marks6').value='';
                    document.getElementById('result').innerHtml='';
                    
                }
            
         </script>
    </body>
</html>