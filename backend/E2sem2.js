var grades={
    'EX':10,
    'A':9,
    'B':8,
    'C':7,
    'D':6,
    'R':0,
}
function showoutput(){
    var total_credit=23;

    var idno = document.getElementById("idno").value
    var cs1grade = document.getElementById("cs1").value
    var cs1value = grades[cs1grade.toUpperCase()];
    var dsdgrade = document.getElementById("dsd").value
    var dsdvalue = grades[dsdgrade.toUpperCase()];
    var licgrade = document.getElementById("lic").value
    var licvalue = grades[licgrade.toUpperCase()];
    var ewgmgrade = document.getElementById("ewgm").value
    var ewgmvalue = grades[ewgmgrade.toUpperCase()];
    var cs1labgrade = document.getElementById("cs1lab").value
    var cs1labvalue = grades[cs1labgrade.toUpperCase()];
    var dsdlabgrade = document.getElementById("dsdlab").value
    var dsdlabvalue = grades[dsdlabgrade.toUpperCase()];
    var liclabgrade = document.getElementById("liclab").value
    var liclabvalue = grades[liclabgrade.toUpperCase()];
    var rlabgrade = document.getElementById("rlab").value
    var rlabvalue = grades[rlabgrade.toUpperCase()];

    var credit_score=(4*cs1value)+(4*dsdvalue)+(4*licvalue)+(4*ewgmvalue)+(1.5*cs1labvalue)+(1.5*dsdlabvalue)+(1.5*liclabvalue)+(2.5*rlabvalue);
    var cgpa = credit_score/total_credit;
    var percentage = cgpa*9.5;
    document.getElementById("cgpa").innerHTML=cgpa;
    document.getElementById("percent").innerHTML=percentage+" %";
    document.getElementById("output").style.display="block";

    document.getElementById("idnumber").innerHTML="IDNO: S"+idno;

    document.getElementById("cs1gradeshow").innerHTML=cs1grade.toUpperCase();
    document.getElementById("cs1valueshow").innerHTML=cs1value;
    document.getElementById("cs1percentshow").innerHTML=(cs1value*9.5)+"%";

    document.getElementById("dsdgradeshow").innerHTML=dsdgrade.toUpperCase();
    document.getElementById("dsdvalueshow").innerHTML=dsdvalue;
    document.getElementById("dsdpercentshow").innerHTML=(dsdvalue*9.5)+"%";

    document.getElementById("licgradeshow").innerHTML=licgrade.toUpperCase();
    document.getElementById("licvalueshow").innerHTML=licvalue;
    document.getElementById("licpercentshow").innerHTML=(licvalue*9.5)+"%";

    document.getElementById("ewgmgradeshow").innerHTML=ewgmgrade.toUpperCase();
    document.getElementById("ewgmvalueshow").innerHTML=ewgmvalue;
    document.getElementById("ewgmpercentshow").innerHTML=(ewgmvalue*9.5)+"%";

    document.getElementById("cs1labgradeshow").innerHTML=cs1labgrade.toUpperCase();
    document.getElementById("cs1labvalueshow").innerHTML=cs1labvalue;
    document.getElementById("cs1labpercentshow").innerHTML=(cs1labvalue*9.5)+"%";

    document.getElementById("dsdlabgradeshow").innerHTML=dsdlabgrade.toUpperCase();
    document.getElementById("dsdlabvalueshow").innerHTML=dsdlabvalue;
    document.getElementById("dsdlabpercentshow").innerHTML=(dsdlabvalue*9.5)+"%";

    document.getElementById("liclabgradeshow").innerHTML=liclabgrade.toUpperCase();
    document.getElementById("liclabvalueshow").innerHTML=liclabvalue;
    document.getElementById("liclabpercentshow").innerHTML=(liclabvalue*9.5)+"%";

    document.getElementById("rlabgradeshow").innerHTML=rlabgrade.toUpperCase();
    document.getElementById("rlabvalueshow").innerHTML=rlabvalue;
    document.getElementById("rlabpercentshow").innerHTML=(rlabvalue*9.5)+"%";

    document.getElementById("totalcgpa").innerHTML=cgpa;
    document.getElementById("totalpercentage").innerHTML=percentage+"%";

    if(cs1value==0||dsdvalue==0||licvalue==0||ewgmvalue==0||cs1labvalue==0||dsdlabvalue==0||liclabvalue==0||rlabvalue==0){
        document.getElementById("result").innerHTML="Result: FAIL"
    }
    else{
        document.getElementById("result").innerHTML="Result: PASS"
    }
    document.getElementById("showresulttable").innerHTML="Show Result Table";
    document.getElementById("showtable").style.display="none";

    if(cs1value!=0) document.getElementById("cs1status").innerHTML="PASS";
    else document.getElementById("cs1status").innerHTML="REMEDIAL";
    if(dsdvalue!=0) document.getElementById("dsdstatus").innerHTML="PASS";
    else document.getElementById("dsdstatus").innerHTML="REMEDIAL";
    if(licvalue!=0) document.getElementById("licstatus").innerHTML="PASS";
    else document.getElementById("licstatus").innerHTML="REMEDIAL";
    if(ewgmvalue!=0) document.getElementById("ewgmstatus").innerHTML="PASS";
    else document.getElementById("ewgmstatus").innerHTML="REMEDIAL";
    if(cs1labvalue!=0) document.getElementById("cs1labstatus").innerHTML="PASS";
    else document.getElementById("cs1labstatus").innerHTML="REMEDIAL";
    if(dsdlabvalue!=0) document.getElementById("dsdlabstatus").innerHTML="PASS";
    else document.getElementById("dsdlabstatus").innerHTML="REMEDIAL";
    if(liclabvalue!=0) document.getElementById("liclabstatus").innerHTML="PASS";
    else document.getElementById("liclabstatus").innerHTML="REMEDIAL";
    if(rlabvalue!=0) document.getElementById("rlabstatus").innerHTML="PASS";
    else document.getElementById("rlabstatus").innerHTML="REMEDIAL";
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