
var grades={
    'EX':10,
    'A':9,
    'B':8,
    'C':7,
    'D':6,
    'R':0,
}
function showoutput(){
    var total_credit=10;

    var idno = document.getElementById("idno").value;
    var elective1sub = document.getElementById("elective1sub").value;
    var elective2sub = document.getElementById("elective2sub").value;
    var elective1grade = document.getElementById("elective1").value
    var elective1value = grades[elective1grade.toUpperCase()];
    var elective2grade = document.getElementById("elective2").value
    var elective2value = grades[elective2grade.toUpperCase()];
    var pdigrade = document.getElementById("pdi").value
    var pdivalue = grades[pdigrade.toUpperCase()];
    var cdgrade = document.getElementById("cd").value
    var cdvalue = grades[cdgrade.toUpperCase()];
    var eng3grade = document.getElementById("eng3").value
    var eng3value = grades[eng3grade.toUpperCase()];
    var mp2grade = document.getElementById("mp2").value
    var mp2value = grades[mp2grade.toUpperCase()];

    var credit_score = (3*elective1value)+(3*elective2value)+(1*pdivalue)+(0*cdvalue)+(1.5*eng3value)+(1.5*mp2value);
    var cgpa = (credit_score/total_credit);
    var percentage = cgpa*9.5;

    document.getElementById("cgpa").innerHTML=cgpa;
    document.getElementById("percent").innerHTML=percentage+" %";
    document.getElementById("output").style.display="block";
    document.getElementById("showresulttable").innerHTML="Show Result Table";
    document.getElementById("showtable").style.display="none";


    document.getElementById("idnumber").innerHTML="IDNO: S"+idno;
    document.getElementById("elective1show").innerHTML=elective1sub;
    document.getElementById("elective1gradeshow").innerHTML=elective1grade.toUpperCase();
    document.getElementById("elective1valueshow").innerHTML=elective1value;
    document.getElementById("elective1percentshow").innerHTML=(elective1value*9.5)+"%";

    document.getElementById("elective2show").innerHTML=elective2sub;
    document.getElementById("elective2gradeshow").innerHTML=elective2grade.toUpperCase();
    document.getElementById("elective2valueshow").innerHTML=elective2value;
    document.getElementById("elective2percentshow").innerHTML=(elective2value*9.5)+"%";

    document.getElementById("pdigradeshow").innerHTML=pdigrade.toUpperCase();
    document.getElementById("pdivalueshow").innerHTML=pdivalue;
    document.getElementById("pdipercentshow").innerHTML=(pdivalue*9.5)+"%";

    document.getElementById("cdgradeshow").innerHTML=cdgrade.toUpperCase();
    document.getElementById("cdvalueshow").innerHTML=cdvalue;
    document.getElementById("cdpercentshow").innerHTML=(cdvalue*9.5)+"%";

    document.getElementById("eng3gradeshow").innerHTML=eng3grade.toUpperCase();
    document.getElementById("eng3valueshow").innerHTML=eng3value;
    document.getElementById("eng3percentshow").innerHTML=(eng3value*9.5)+"%";

    document.getElementById("mp2gradeshow").innerHTML=mp2grade.toUpperCase();
    document.getElementById("mp2valueshow").innerHTML=mp2value;
    document.getElementById("mp2percentshow").innerHTML=(mp2value*9.5)+"%";

    document.getElementById("totalcgpa").innerHTML=cgpa;
    document.getElementById("totalpercentage").innerHTML=percentage+"%";
    

    if(elective1value==0||elective2value==0||pdivalue==0||cdvalue==0||eng3value==0||mp2value==0){
        document.getElementById("result").innerHTML="Result: FAIL"
    }
    else{
        document.getElementById("result").innerHTML="Result: PASS"
    }

    if(elective1value!=0) document.getElementById("elective1status").innerHTML="PASS";
    else document.getElementById("elective1status").innerHTML="REMEDIAL";
    if(elective2value!=0) document.getElementById("elective2status").innerHTML="PASS";
    else document.getElementById("elective2status").innerHTML="REMEDIAL";
    if(pdivalue!=0) document.getElementById("pdistatus").innerHTML="PASS";
    else document.getElementById("pdistatus").innerHTML="REMEDIAL";
    if(cdvalue!=0) document.getElementById("cdstatus").innerHTML="PASS";
    else document.getElementById("cdstatus").innerHTML="REMEDIAL";
    if(eng3value!=0) document.getElementById("eng3status").innerHTML="PASS";
    else document.getElementById("eng3status").innerHTML="REMEDIAL";
    if(mp2value!=0) document.getElementById("mp2status").innerHTML="PASS";
    else document.getElementById("mp2status").innerHTML="REMEDIAL";


}




function closeall(){
    document.getElementById("output").style.display="none";
    document.getElementById("showtable").style.display="none";
}



function showtable(){
    if (document.getElementById("showtable").style.display == "none"){
        document.getElementById("showtable").style.display="block";
        document.getElementById("showresulttable").innerHTML="Close Table";
    }
     else{
        document.getElementById("showtable").style.display="none";
        document.getElementById("showresulttable").innerHTML="Show Result Table";
        }
}