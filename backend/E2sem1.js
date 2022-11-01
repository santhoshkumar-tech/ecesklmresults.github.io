var grades={
    'EX':10,
    'A':9,
    'B':8,
    'C':7,
    'D':6,
    'R':0,
}
function showoutput(){
    var total_credit=24;

    var idno = document.getElementById("idno").value    
    var prvgrade = document.getElementById("prv").value
    var prvvalue = grades[prvgrade.toUpperCase()];
    var aecgrade = document.getElementById("aec").value
    var aecvalue = grades[aecgrade.toUpperCase()];
    var dldgrade = document.getElementById("dld").value
    var dldvalue = grades[dldgrade.toUpperCase()];
    var dspgrade = document.getElementById("dsp").value
    var dspvalue = grades[dspgrade.toUpperCase()];
    var csgrade = document.getElementById("cs").value
    var csvalue = grades[csgrade.toUpperCase()];
    var aeclabgrade = document.getElementById("aeclab").value
    var aeclabvalue = grades[aeclabgrade.toUpperCase()];
    var dldlabgrade = document.getElementById("dldlab").value
    var dldlabvalue = grades[dldlabgrade.toUpperCase()];
    var dsplabgrade = document.getElementById("dsplab").value
    var dsplabvalue = grades[dsplabgrade.toUpperCase()];
    var iotlabgrade = document.getElementById("iotlab").value
    var iotlabvalue = grades[iotlabgrade.toUpperCase()];

    var credit_score=(3*prvvalue)+(4*aecvalue)+(4*dldvalue)+(4*dspvalue)+(3*csvalue)+(1.5*aeclabvalue)+(1.5*dldlabvalue)+(1.5*dsplabvalue)+(1.5*iotlabvalue);
    var cgpa = credit_score/total_credit;
    var percentage = cgpa*9.5;
    document.getElementById("cgpa").innerHTML=cgpa;
    document.getElementById("percent").innerHTML=percentage+" %";
    document.getElementById("output").style.display="block";
    

    document.getElementById("idnumber").innerHTML="IDNO: S"+idno;

    document.getElementById("prvgradeshow").innerHTML=prvgrade.toUpperCase();
    document.getElementById("prvvalueshow").innerHTML=prvvalue;
    document.getElementById("prvpercentshow").innerHTML=(prvvalue*9.5)+"%";

    document.getElementById("aecgradeshow").innerHTML=aecgrade.toUpperCase();
    document.getElementById("aecvalueshow").innerHTML=aecvalue;
    document.getElementById("aecpercentshow").innerHTML=(aecvalue*9.5)+"%";

    document.getElementById("dldgradeshow").innerHTML=dldgrade.toUpperCase();
    document.getElementById("dldvalueshow").innerHTML=dldvalue;
    document.getElementById("dldpercentshow").innerHTML=(dldvalue*9.5)+"%";

    document.getElementById("dspgradeshow").innerHTML=dspgrade.toUpperCase();
    document.getElementById("dspvalueshow").innerHTML=dspvalue;
    document.getElementById("dsppercentshow").innerHTML=(dspvalue*9.5)+"%";

    document.getElementById("csgradeshow").innerHTML=csgrade.toUpperCase();
    document.getElementById("csvalueshow").innerHTML=csvalue;
    document.getElementById("cspercentshow").innerHTML=(csvalue*9.5)+"%";

    document.getElementById("aeclabgradeshow").innerHTML=aeclabgrade.toUpperCase();
    document.getElementById("aeclabvalueshow").innerHTML=aeclabvalue;
    document.getElementById("aeclabpercentshow").innerHTML=(aeclabvalue*9.5)+"%";

    document.getElementById("dldlabgradeshow").innerHTML=dldlabgrade.toUpperCase();
    document.getElementById("dldlabvalueshow").innerHTML=dldlabvalue;
    document.getElementById("dldlabpercentshow").innerHTML=(dldlabvalue*9.5)+"%";

    document.getElementById("dsplabgradeshow").innerHTML=dsplabgrade.toUpperCase();
    document.getElementById("dsplabvalueshow").innerHTML=dsplabvalue;
    document.getElementById("dsplabpercentshow").innerHTML=(dsplabvalue*9.5)+"%";

    document.getElementById("iotlabgradeshow").innerHTML=iotlabgrade.toUpperCase();
    document.getElementById("iotlabvalueshow").innerHTML=iotlabvalue;
    document.getElementById("iotlabpercentshow").innerHTML=(iotlabvalue*9.5)+"%";

    document.getElementById("totalcgpa").innerHTML=cgpa;
    document.getElementById("totalpercentage").innerHTML=percentage+"%";
    

    if(prvvalue==0||aecvalue==0||dldvalue==0||dspvalue==0||csvalue==0||aeclabvalue==0||dldlabvalue==0||dsplabvalue==0||iotlabvalue==0){
        document.getElementById("result").innerHTML="Result: FAIL"
    }
    else{
        document.getElementById("result").innerHTML="Result: PASS"
    }
    document.getElementById("showresulttable").innerHTML="Show Result Table";
    document.getElementById("showtable").style.display="none";

    if(prvvalue!=0) document.getElementById("prvstatus").innerHTML="PASS";
    else document.getElementById("prvstatus").innerHTML="REMEDIAL";
    if(aecvalue!=0) document.getElementById("aecstatus").innerHTML="PASS";
    else document.getElementById("aecstatus").innerHTML="REMEDIAL";
    if(dldvalue!=0) document.getElementById("dldstatus").innerHTML="PASS";
    else document.getElementById("dldstatus").innerHTML="REMEDIAL";
    if(dspvalue!=0) document.getElementById("dspstatus").innerHTML="PASS";
    else document.getElementById("dspstatus").innerHTML="REMEDIAL";
    if(csvalue!=0) document.getElementById("csstatus").innerHTML="PASS";
    else document.getElementById("csstatus").innerHTML="REMEDIAL";
    if(aeclabvalue!=0) document.getElementById("aeclabstatus").innerHTML="PASS";
    else document.getElementById("aeclabstatus").innerHTML="REMEDIAL";
    if(dldlabvalue!=0) document.getElementById("dldlabstatus").innerHTML="PASS";
    else document.getElementById("dldlabstatus").innerHTML="REMEDIAL";
    if(dsplabvalue!=0) document.getElementById("dsplabstatus").innerHTML="PASS";
    else document.getElementById("dsplabstatus").innerHTML="REMEDIAL";
    if(iotlabvalue!=0) document.getElementById("iotlabstatus").innerHTML="PASS";
    else document.getElementById("iotlabstatus").innerHTML="REMEDIAL";

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
