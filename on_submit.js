/*function judge() {
    var result=0;
    //var information=[];

    //var call=document.getElementById('exampleInputNumber').value;
    //if(call>=0&&call<=100){
      //  result='perfect';
        //alert(result);
        return true;
    //}
    //else{
      //  result='error';
        //alert(result);
        //return false;
    //}
}*/

function  getInfor() {
    var information={};


    information.name=document.getElementById('exampleInputName').value;
    information.number=document.getElementById('exampleInputNumber').value;
    information.nation=document.getElementById('exampleInputNation').value;
    information.class=document.getElementById('exampleInputClass').value;
    information.chinese=document.getElementById('exampleInputChinese').value;
    information.maths=document.getElementById('exampleInputMaths').value;
    information.english=document.getElementById('exampleInputEnglish').value;
    information.program=document.getElementById('exampleInputProgram').value;
    information.total=paseInt(information.chinese)+paseInt(information.maths)+paseInt(information.english)+parseInt(information.program);
    information.average=information.total/4;
    var str=JSON.stringify(information);
    if((information.name||information.name||information.class)==""){
        alert("请输入正确的信息");
        return false;
    }

    localStorage.setItem(information.number,str);
    return str;


}
function seeIt() {
    var site=[];
    for(var j=0;j<localStorage.length;j++){
        var keySite=localStorage.getItem(localStorage.key(j));
        site[j]=JSON.parse(keySite);
    }


        $("#exampleSee").empty();
        let result=`<tr>
            <th rowspan="2">姓名</th>
            <th rowspan="2">学号</th>
            <th rowspan="2">民族</th>
            <th rowspan="2">班级</th>
            <th colspan="6">成绩</th>
            </tr>
            
            <tr>
            <th>语文</th>
            <th>数学</th>
            <th>英语</th>
            <th>编程</th>
            <th>平均分</th>
            <th>总分</th>
        </tr>`;
    for(let i=0;i<site.length;i++){
            result+=`<tr>
            <td>${site[i].name}</td>
            <td>${site[i].number}</td>
            <td>${site[i].nation}</td>
            <td>${site[i].class}</td>
            <td>${site[i].chinese}</td>
            <td>${site[i].maths}</td>
            <td>${site[i].english}</td>
            <td>${site[i].program}</td>
            <td>${site[i].average}</td>
            <td>${site[i].total}</td>
        </tr>`;
        }


       $("#exampleSee").append(result);
    //document.getElementById(exampleSee).write(result);

}
function ResearchInf() {
    var search_site = document.getElementById("research").value;
    search_site=search_site.split(",");
    var site=[];
    for(var j=0;j<localStorage.length;j++){
        var keySite=localStorage.getItem(localStorage.key(j));
        site[j]=JSON.parse(keySite);
    }
    for(var i=0;i<search_site.length;i++){
        for(var k=0;k<site.length;k++){
            if(site){}
        }
    }
   /* var str = localStorage.getItem(search_site);

    var site = JSON.parse(str);

    var result="<table>";
    result += " <tr>" + "<td >"+str.name+"</td></tr>";
    result+="</table>";
    document.write(result);
    document.getElementById("table1").innerHTML = result;*/

}