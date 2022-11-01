var grades={
    'EX':10,
    'A':9,
    'B':8,
    'C':7,
    'D':6,
    'R':0,
}

function showoutput(){

    var selectsub=document.getElementById("selectsub").value
    if(selectsub=="Engineering Graphics and Computer Drafting"){
        var selectsubcredit=2.5;
        var total_credit=23;
    }
    else if(selectsub=="Signals and Systems"){
        var selectsubcredit=4;
        var total_credit=24.5;
    }
    

    var idno = document.getElementById("idno").value
    var demcgrade = document.getElementById("demc").value
    var demcvalue = grades[demcgrade.toUpperCase()];
    var etgrade = document.getElementById("et").value
    var etvalue = grades[etgrade.toUpperCase()];

    var selectsubgrade = document.getElementById("selectsubgrade").value
    var selectsubvalue = grades[selectsubgrade.toUpperCase()];

    var etlabgrade = document.getElementById("etlab").value
    var etlabvalue = grades[etlabgrade.toUpperCase()];
    var epgrade = document.getElementById("ep").value
    var epvalue = grades[epgrade.toUpperCase()];
    var eplabgrade = document.getElementById("eplab").value
    var eplabvalue = grades[eplabgrade.toUpperCase()];
    var iltagrade = document.getElementById("ilta").value
    var iltavalue = grades[iltagrade.toUpperCase()];
    var pdsgrade = document.getElementById("pds").value
    var pdsvalue = grades[pdsgrade.toUpperCase()];
    var pdslabgrade = document.getElementById("pdslab").value
    var pdslabvalue = grades[pdslabgrade.toUpperCase()];

    var credit_score=(4*demcvalue)+(4*etvalue)+(1.5*etlabvalue)+(selectsubcredit*selectsubvalue)+(4*epvalue)+(1.5*eplabvalue)+(1*iltavalue)+(3*pdsvalue)+(1.5*pdslabvalue);
    var cgpa = credit_score/total_credit;
    var percentage = cgpa*9.5;
    document.getElementById("cgpa").innerHTML=cgpa;
    document.getElementById("percent").innerHTML=percentage+" %";
    document.getElementById("output").style.display="block";

    document.getElementById("idnumber").innerHTML="IDNO: S"+idno;

    document.getElementById("demcgradeshow").innerHTML=demcgrade.toUpperCase();
    document.getElementById("demcvalueshow").innerHTML=demcvalue;
    document.getElementById("demcpercentshow").innerHTML=(demcvalue*9.5)+"%";
    document.getElementById("etgradeshow").innerHTML=etgrade.toUpperCase();
    document.getElementById("etvalueshow").innerHTML=etvalue;
    document.getElementById("etpercentshow").innerHTML=(etvalue*9.5)+"%";
    document.getElementById("etlabgradeshow").innerHTML=etlabgrade.toUpperCase();
    document.getElementById("etlabvalueshow").innerHTML=etlabvalue;
    document.getElementById("etlabpercentshow").innerHTML=(etlabvalue*9.5)+"%";

    document.getElementById("selectsubshow").innerHTML=selectsub;
    document.getElementById("selectsubcreditshow").innerHTML=selectsubcredit;
    document.getElementById("selectsubgradeshow").innerHTML=selectsubgrade.toUpperCase();
    document.getElementById("selectsubvalueshow").innerHTML=selectsubvalue;
    document.getElementById("selectsubpercentshow").innerHTML=(selectsubvalue*9.5)+"%";

    document.getElementById("epgradeshow").innerHTML=epgrade.toUpperCase();
    document.getElementById("epvalueshow").innerHTML=epvalue;
    document.getElementById("eppercentshow").innerHTML=(epvalue*9.5)+"%";
    document.getElementById("eplabgradeshow").innerHTML=eplabgrade.toUpperCase();
    document.getElementById("eplabvalueshow").innerHTML=eplabvalue;
    document.getElementById("eplabpercentshow").innerHTML=(eplabvalue*9.5)+"%";
    document.getElementById("iltagradeshow").innerHTML=iltagrade.toUpperCase();
    document.getElementById("iltavalueshow").innerHTML=iltavalue;
    document.getElementById("iltapercentshow").innerHTML=(iltavalue*9.5)+"%";
    document.getElementById("pdsgradeshow").innerHTML=pdsgrade.toUpperCase();
    document.getElementById("pdsvalueshow").innerHTML=pdsvalue;
    document.getElementById("pdspercentshow").innerHTML=(pdsvalue*9.5)+"%";
    document.getElementById("pdslabgradeshow").innerHTML=pdslabgrade.toUpperCase();
    document.getElementById("pdslabvalueshow").innerHTML=pdslabvalue;
    document.getElementById("pdslabpercentshow").innerHTML=(pdslabvalue*9.5)+"%";

    document.getElementById("totalcgpa").innerHTML=cgpa;
    document.getElementById("totalpercentage").innerHTML=percentage+"%";

    if(demcvalue==0||etvalue==0||etlabvalue==0||selectsubvalue==0||epvalue==0||eplabvalue==0||iltavalue==0||pdsvalue==0||pdslabvalue==0){
        document.getElementById("result").innerHTML="Result: FAIL"
    }
    else{
        document.getElementById("result").innerHTML="Result: PASS"
    }

    document.getElementById("showresulttable").innerHTML="Show Result Table";
    document.getElementById("showtable").style.display="none";

    if(demcvalue!=0) document.getElementById("demcstatus").innerHTML="PASS";
    else document.getElementById("demcstatus").innerHTML="REMEDIAL";
    if(etvalue!=0) document.getElementById("etstatus").innerHTML="PASS";
    else document.getElementById("etstatus").innerHTML="REMEDIAL";
    if(etlabvalue!=0) document.getElementById("etlabstatus").innerHTML="PASS";
    else document.getElementById("etlabstatus").innerHTML="REMEDIAL";
    if(selectsubvalue!=0) document.getElementById("selectsubstatus").innerHTML="PASS";
    else document.getElementById("selectsubstatus").innerHTML="REMEDIAL";
    if(epvalue!=0) document.getElementById("epstatus").innerHTML="PASS";
    else document.getElementById("epstatus").innerHTML="REMEDIAL";
    if(eplabvalue!=0) document.getElementById("eplabstatus").innerHTML="PASS";
    else document.getElementById("eplabstatus").innerHTML="REMEDIAL";
    if(iltavalue!=0) document.getElementById("iltastatus").innerHTML="PASS";
    else document.getElementById("iltastatus").innerHTML="REMEDIAL";
    if(pdsvalue!=0) document.getElementById("pdsstatus").innerHTML="PASS";
    else document.getElementById("pdsstatus").innerHTML="REMEDIAL";
    if(pdslabvalue!=0) document.getElementById("pdslabstatus").innerHTML="PASS";
    else document.getElementById("pdslabstatus").innerHTML="REMEDIAL";
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
