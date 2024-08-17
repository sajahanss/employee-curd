module.exports=()=>{
    return`

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- <link rel="stylesheet" href="./employee-data/styel.css"> -->
        <title>Document</title>
      <style>
        td{
        text-align: left;
    }
    #addform{
        width: 40vw;  
        
    
    }
    body{
        width: 100%;
    }
       .table>table{
            margin-bottom :10px;
             background-color: black;
             color: white;

        }
    .table{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
        border-radius: 5px;
        margin-top: 25px;
        width: 90vw;
        margin-left: 5vw;
    }
    .table>tr>td,th{
        width: 200px;
        text-align: left;
    }
    #enterance{
        height: 10vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        background-color: #dfdfdf;
        border-bottom: 2px solid black;
    }
    label{
       
        margin-bottom: 10px;
    
    }
    input{
        border-radius: 3px;
        height: 30px;
        margin-bottom: 10px;
        width: 250px;
    }
    
    button{
        border-radius: 4px;
        background-color: black;
        color: white;
        height: 35px;
    }
    
    
      </style>
    
    </head>
    <body>
    
    <div id="enterance">
        <button type="button" onclick="sendval(1)">Create Employee</button>
        <button type="button" onclick="sendval(2)">Remove Employee</button>
        <button type="button" onclick="sendval(3)">Edit Employeedata</button>
        <button type="button" onclick="viewrecord()">View Employeedata</button>
    </div>
    
    
        <form  action="/" method="POST">
            
            <div id="addform">
            <input type="text" id="hidden" name="hidden"  placeholder=".">
            <table class="formtab">
                <tr>
           <td> <label>Employee Id :</label> </td><td><input type="text" name="id" id="id" placeholder="Id"></td> <td><input type="text" name="idu" id="idu" placeholder="Id"><br></td>
                </tr>
                <tr>
                    <td> <label>Employee Name:</label></td><td><input type="text" name="name" id="name" placeholder="Name"></td><td><input type="text" name="nameu" id="nameu" placeholder="Name"><br></td>
               </tr>
               <tr>
                <td> <label>Employee Age:</label></td><td><input type="number" name="age" id="age" placeholder="Age"></td><td><input type="number" name="ageu" id="ageu" placeholder="Age"><br></td>
        </tr>
        <tr>
            <td>   <label>Employee Designation:</label></td><td><input type="text" name="desg" id="desg" placeholder="Designation"></td><td><input type="text" name="desgu" id="desgu" placeholder="Designation"><br></td>
        </tr>
        <tr>
            <td>   <label>Employee MObile No:</label></td><td><input type="number" name="mobile" id="mobile" placeholder="Mobile no."></td><td><input type="number" name="mobileu" id="mobileu" placeholder="Mobile no."><br></td>
        </tr>
        <tr>
           <td> <button type="submit" id="add" onclick="backto()">ADD Employee</button></td>
        </tr>
    
        </table>
        </div>
            <div id="deleteform">
            
                <label>Employee Id :</label><input type="text" name="did" placeholder="Delete Using Employee Id"><br>
                
                <button type="submit" onclick="backto()">Delete Employee</button>
                
            </div>
            
        </form>
    
       
            <div id="updateform">
                <label>Employee Id :</label>
                <input type="text" name="uid" id="uid" placeholder="update Using Employee Id"><br>
                <button type="submit" onclick="getdata()">Get emp datails</button>
            </div>
        
    
       <button type="button" id="btnback" onclick="starter()">Back</button>
    
    <br>
    <div class="table" id="ttt">
        <h1>Employee Records</h1>
        <table cellpadding="3" cellspacing="2" border="1" >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Designation</th>
                    <th>Mobile</th>
                </tr>
            </thead>
                <tbody id="tableData"></tbody>
            </table>
            
    </div>
        <script>
             document.getElementById('hidden').style.display='none';
            document.getElementById('addform').style.display='none';
            document.getElementById('deleteform').style.display='none';
            document.getElementById('updateform').style.display='none';
            document.getElementById('idu').style.display='none';
            document.getElementById('nameu').style.display='none';
            document.getElementById('ageu').style.display='none';
            document.getElementById('desgu').style.display='none';
            document.getElementById('mobileu').style.display='none';
            document.getElementById('ttt').style.display='none';
            document.getElementById('btnback').style.display='none';
            var objfile=[];
    
     function viewrecord(){
        document.getElementById('ttt').style.display='flex';
        document.getElementById('btnback').style.display='inline-block';
            fetch('/data').then(response => response.json()).then(user => {
               const datas=user;
               objectLength = Object.keys(datas).length;
               
    
               var k = '<tbody>'
                for(i = 0;i < objectLength; i++){
                    objfile[i]=datas[i];
                    k+= '<tr id="tabr">';
                    k+= '<td>' + datas[i].id + '</td>';
                    k+= '<td>' + datas[i].name + '</td>';
                    k+= '<td>' + datas[i].age + '</td>';
                    k+= '<td>' + datas[i].designation + '</td>';
                    k+= '<td>' + datas[i].mobile + '</td>';
                    k+= '</tr>';
                }
                k+='</tbody>';
                document.getElementById('tableData').innerHTML = k;
               
            });
    
        }
    
    
           
    
    function starter(){
        document.getElementById('enterance').style.display="flex";
        document.getElementById('hidden').style.display='none';
            document.getElementById('addform').style.display='none';
            document.getElementById('deleteform').style.display='none';
            document.getElementById('updateform').style.display='none';
            document.getElementById('idu').style.display='none';
            document.getElementById('nameu').style.display='none';
            document.getElementById('ageu').style.display='none';
            document.getElementById('desgu').style.display='none';
            document.getElementById('mobileu').style.display='none';
            document.getElementById('ttt').style.display='none';
            document.getElementById('btnback').style.display='none';
    }
    
        function getdata(){
            document.getElementById('addform').style.display='block';
            document.getElementById('idu').style.display='inline-block';
            document.getElementById('nameu').style.display='inline-block';
            document.getElementById('ageu').style.display='inline-block';
            document.getElementById('desgu').style.display='inline-block';
            document.getElementById('mobileu').style.display='inline-block';
            document.getElementById('enterance').style.display='none';
            document.getElementById('btnback').style.display='inline-block';
            //document.getElementById('ttt').style.display='none';
            document.getElementById('updateform').style.display='none';
            console.log(objectLength);
            var stval=document.getElementById('uid').value;
            console.log(stval);
            for(i = 0;i < objectLength; i++){
                if(stval === objfile[i].id){
                    document.getElementById('idu').value=objfile[i].id;
                    document.getElementById('nameu').value=objfile[i].name;
                    document.getElementById('ageu').value=objfile[i].age;
                    document.getElementById('desgu').value=objfile[i].designation;
                    document.getElementById('mobileu').value=objfile[i].mobile;
    
                    document.getElementById('id').value=objfile[i].id;
                    document.getElementById('name').value=objfile[i].name;
                    document.getElementById('age').value=objfile[i].age;
                    document.getElementById('desg').value=objfile[i].designation;
                    document.getElementById('mobile').value=objfile[i].mobile;
    
                    //disable the values
                    document.getElementById("id").disabled = true;
                    document.getElementById("idu").disabled = true;
                    document.getElementById("name").disabled = true;
                    document.getElementById("age").disabled = true;
                    document.getElementById("desg").disabled = true;
                    document.getElementById("mobile").disabled = true;
                    
                     document.getElementById('hidden').value=3;
                     document.getElementById('add').innerHTML="Update";
               console.log(document.getElementById('hidden').value);
                }
            }
        
        }
            
    
    
            function sendval(n){
    
                
    
                 if(n!=1){
                    viewrecord();
                 }else{
                    document.getElementById('ttt').style.display='none';
                 }
                document.getElementById('hidden').value=n;
                if(n==1){
                    document.getElementById('addform').style.display='block';
                    document.getElementById('enterance').style.display='none';
                    document.getElementById('btnback').style.display='inline-block';
                }else if(n==2){
                    document.getElementById('deleteform').style.display='block';
                    document.getElementById('enterance').style.display='none';
                    document.getElementById('btnback').style.display='inline-block';
                }else if(n==3){
                    document.getElementById('updateform').style.display='block';
                    document.getElementById('enterance').style.display='none';
                    document.getElementById('btnback').style.display='inline-block';
                }
                console.log(document.getElementById('hidden').value);
            }
    
            function backto(){
    //enamble the text box
                document.getElementById("id").disabled = false;
                ocument.getElementById("idu").disabled = false;
                    document.getElementById("name").disabled = false;
                    document.getElementById("age").disabled = false;
                    document.getElementById("desg").disabled = false;
                    document.getElementById("mobile").disabled = false;
    
                document.getElementById('addform').style.display='none';
                document.getElementById('deleteform').style.display='none';
                    document.getElementById('enterance').style.display='flex';
                    document.getElementById('btnback').style.display='none';
            }
        </script>
    </body>
    </html>`
}