function judge() {
    var result=0;
    //var information=[];

    var call=document.getElementById('exampleInputName');
    if(call.value.length>=2){
        result='perfect';
        alert(result);
        return true;
    }
    else{
        result='error';
        alert(result);
        return false;
    }
}

function  getInfor() {
    var information={};

    information.name=document.getElementById('exampleInputName').value;
    var str=JSON.stringify(information);

    localStorage.setItem(information.name,str);

    return information;

}
function JudgeNumber() {

}
function ResearchInnf() {
    var search_site = document.getElementById("research").value;
    var str = localStorage.getItem(search_site);
    
    var site = JSON.parse(str);

}