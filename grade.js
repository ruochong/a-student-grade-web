var readlineSync = require('readline-sync');
function getReadMy1(count,readAll){
     readAll[count]=readlineSync.question(`请输入学生信息（格式：姓名, 学号, 民族, 
           班级, 学科: 成绩, ...），按回车提交：`);
            readAll[count]=[];
           readAll[count]=readAll[count].split(',');
          while(readAll[count].length!==8){             
             readAll[count]=readlineSync.question(`请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：`);
           readAll[count]=readAll[count].split(',');
        }
        console.log(` 学生${readAll[count][1]}的成绩被添加`);
        return readAll;
}
function getReadMy2(readAll){
  var readSome=readlineSync.question(`    请按正确的格式输入要打印的学生的学号（格式： 学号,
    学号,...），按回车提交：`);
    readSome=readSome.split(',');//得到的readSome 是一个学号数组；
  /*  for(;;){
    for(var i=0;i<readSome.length;i++){
        for(var j=0;j<readAll.length;j++){
        if(readAll[j][2]!==readSome[i]) {
            continue;
                    }
                    else{
            break;
        }
                }
            }
        if(i===readSome.length-1){
            break;
        }
        var readSome=readlineSync.question(`请输入要打印的学生的学号（格式： 学号, 学号,
    ...），按回车提交：`);
    readSome=readSome.split(',');
            
}*/

        return readSome;
}
//筛选学生信息，选出有录入信息的学生，并得到学生的成绩等基本信息；
function getGoard(readAll,readSome){
    //readSome=readSome.filter



    var allGoard=[];
    allGoard[0]=[];
    for(var i=0;i<readSome.length;i++){
        if(readSome.indexof(readAll[i][2])!==-1){
            allGoard.push(readAll[i]);
        }
    }
    for(var k=0;k<allGoard.length;k++){
    for(var j=4;j<allGoard.length;j++){
        var tab=[];
     tab=allGoard[k][j].split(':');
    allGoard[k][j]=tab[2];
        }   
    for(var i=4;i<8;i++){
        allGoard[k][8]+=allGoard[k][i];
            }
    allGoard[k][9]=allGoard[k][8];
    allGoard[k][8]=(allGoard[k][8])/4;
        
    }
return allGoard;
}
function sortNumber(a,b)
{
return a - b
}
function print(allGoard){
    var allAve=0;
    for(var i=0;i<allGoard.length;i++){
        allAve+=allGoard[i][8];
    }
    var numberAve=[];
    for(var j=0;j<allGoard.length;k++){
        numberAve[j]=allGoard[j][8];
    }
    //numberAve=allGoard[][8];
    numberAve=numberAve.sort(sortNumber);
    var numAve=0;
    if(numberAve.length%2===0){
        var p=numberAve.length/2;
        numAve=(numberAve[p]+numberAve[p-1])/2;
    }
    else{
        var q=(numberAve.length-1)/2;
        numAve=numberAve[q];
    }
    var str=`成绩单\n 姓名|数学|英语|编程|平均分|总分\n==============\n==============`;
    for(var i=0;i<allGoard.length;i++){
        str+=`${allGoard[i][0]} `;
        for(var j=4;j<10;j++){
            str+=`| ${allGoard[i][j]}`;
        }
        str+=`\n`;
    }
    str+=`全班总平均分数：${allAve}`;
    Str+=`全班总分中位数${numAve}`;
    return str;
}
function getInfa(){
    do{var readMy=readlineSync.question(`            1. 添加学生        2. 生成成绩单       3. 退出
        请输入你的选择（1～3）：`);
        var readAll=[];
        count=0;
        if(readMy===1){
            getReadMy1(count,readAll);
            
        }
         count++;
        var key1=getReadMy1(count,readAll);
        if(readMy===2){
                getReadMy2(key1);
                var key2=getReadMy2(key1);
                console.log(print(getGoard(key1,key2)));
        }
        
    }
    while(readMy!=='3');
    return 0;
}