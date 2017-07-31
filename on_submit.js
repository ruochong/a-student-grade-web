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
    information.total=parseFloat(information.chinese)+parseFloat(information.maths)+parseFloat(information.english)+parseFloat(information.program);
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
function researchInf() {
    var searchSite = document.getElementById("research").value;
    searchSite = searchSite.split(",");
    var site = [];

    for (var j = 0; j < searchSite.length; j++) {
        if (localStorage.getItem(searchSite[j]) !== null) {

            var keySite = localStorage.getItem(searchSite[j]);
            site.push(JSON.parse(keySite));
            continue;
        }
        else {
            alert("请输入正确的学号信息");
            return false;
        }

    }
    $("#exampleSee").empty();
    var result1 = `<tr>
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
    for (let i = 0; i < site.length; i++) {
        result1 += `<td>
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
            <td><button type="button" class="change" onclick="changeInf(${site[i].number})" id="${site[i].number}">修改</button></td>
            <td><button type="button" class="delete" onclick="deleteInf(${site[i].number})" id="${site[i].number}">删除</button></td>
            </tr>`;


    }
    $("#exampleSee").append(result1);
}
function  changeInf(number) {

        var keySite = localStorage.getItem(number);
        var  site=JSON.parse(keySite);
        
        let str = `<table class='table table-bordered'> `;
        //str += `<tbody>`

        str += `<tr><th>姓名</th><th><input type="text" id="change1"  value='${site.name}'></th></tr>`;
        str += `<tr><th>民族</th><th><input type="text" class="change2 form-control"  value='${site.nation}'></th></tr>`;
        str += `<tr><th>学号 </th><th>${site.number}</th></tr>`;
        str += `<tr><th>班级</th><th><input type="text" class="change6 form-control"  value='${site.class}'></th></tr>`;
        str += `<tr><th>语文</th><th><input type="text" class="change3 form-control"  value='${site.chinese}'></th></tr>`;
        str += `<tr><th>英语</th><th><input type="text" class="change4 form-control"  value='${site.english}'></th></tr>`;
        str += `<tr><th>班级</th><th><input type="text" class="change5 form-control"  value='${site.program}'></th></tr>`;

        str += `</table>`
        bootbox.confirm({
            title: '修改学生成绩',
            message: str,
            buttons: {
                cancel: {
                    label: '<i class="fa fa-times"></i> 取消'
                },
                confirm: {
                    label: '<i class="fa fa-check"></i> 确认修改'
                }
            },
            callback: function (result) {
                if (result === false) {

                } else {
                    var information={};
                    information.name = $(".change1").val();
                    information.number=number;
                    information.class=$(".change6").val();
                    information.chinese = parseFloat($(".change2").val());
                    information.maths= parseFloat($(".change3").val());
                    information.program= parseFloat($(".change4").val());
                    information.total= ch + ma + pr;
                    information.average = (all / 3).toFixed(2);
                    bootbox.alert("修改成功");
                    var str2=JSON.stringify(information);
                    localStorage.setItem(information.number,str);
                }

            }
        });

}
function deleteInf(number) {
    //var number;
    localStorage.removeItem(number);

    alert(`已删除学号为${number}的学生`);
    researchInf();
}
   /* var str = localStorage.getItem(search_site);

    var site = JSON.parse(str);

    var result="<table>";
    result += " <tr>" + "<td >"+str.name+"</td></tr>";
    result+="</table>";
    document.write(result);
    document.getElementById("table1").innerHTML = result;*/

