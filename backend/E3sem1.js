var grades={
    'EX':10,
    'A':9,
    'B':8,
    'C':7,
    'D':6,
    'R':0,
}
function showoutput(){
    var total_credit=19;

    var idno = document.getElementById("idno").value    
    var cs2grade = document.getElementById("cs2").value
    var cs2value = grades[cs2grade.toUpperCase()];
    var cngrade = document.getElementById("cn").value
    var cnvalue = grades[cngrade.toUpperCase()];
    var coagrade = document.getElementById("coa").value
    var coavalue = grades[coagrade.toUpperCase()];
    var cs2labgrade = document.getElementById("cs2lab").value
    var cs2labvalue = grades[cs2labgrade.toUpperCase()];
    var mpmcgrade = document.getElementById("mpmc").value
    var mpmcvalue = grades[mpmcgrade.toUpperCase()];
    var rfgrade = document.getElementById("rf").value
    var rfvalue = grades[rfgrade.toUpperCase()];
    var eng2grade = document.getElementById("eng2").value
    var eng2value = grades[eng2grade.toUpperCase()];
    var coigrade = document.getElementById("coi").value
    var coivalue = grades[coigrade.toUpperCase()];
    var mp1grade = document.getElementById("mp1").value
    var mp1value = grades[mp1grade.toUpperCase()];

    var credit_score=(4*cs2value)+(3*cnvalue)+(4*coavalue)+(1.5*cs2labvalue)+(1.5*mpmcvalue)+(2.5*rfvalue)+(1.5*eng2value)+(0*coivalue)+(1*mp1value);
    var cgpa = credit_score/total_credit;
    var percentage = cgpa*9.5;
    document.getElementById("cgpa").innerHTML=cgpa;
    document.getElementById("percent").innerHTML=percentage+" %";
    document.getElementById("output").style.display="block";
    

    document.getElementById("idnumber").innerHTML="IDNO: S"+idno;

    document.getElementById("cs2gradeshow").innerHTML=cs2grade.toUpperCase();
    document.getElementById("cs2valueshow").innerHTML=cs2value;
    document.getElementById("cs2percentshow").innerHTML=(cs2value*9.5)+"%";

    document.getElementById("cngradeshow").innerHTML=cngrade.toUpperCase();
    document.getElementById("cnvalueshow").innerHTML=cnvalue;
    document.getElementById("cnpercentshow").innerHTML=(cnvalue*9.5)+"%";

    document.getElementById("coagradeshow").innerHTML=coagrade.toUpperCase();
    document.getElementById("coavalueshow").innerHTML=coavalue;
    document.getElementById("coapercentshow").innerHTML=(coavalue*9.5)+"%";

    document.getElementById("cs2labgradeshow").innerHTML=cs2labgrade.toUpperCase();
    document.getElementById("cs2labvalueshow").innerHTML=cs2labvalue;
    document.getElementById("cs2labpercentshow").innerHTML=(cs2labvalue*9.5)+"%";

    document.getElementById("mpmcgradeshow").innerHTML=mpmcgrade.toUpperCase();
    document.getElementById("mpmcvalueshow").innerHTML=mpmcvalue;
    document.getElementById("mpmcpercentshow").innerHTML=(mpmcvalue*9.5)+"%";

    document.getElementById("rfgradeshow").innerHTML=rfgrade.toUpperCase();
    document.getElementById("rfvalueshow").innerHTML=rfvalue;
    document.getElementById("rfpercentshow").innerHTML=(rfvalue*9.5)+"%";

    document.getElementById("eng2gradeshow").innerHTML=eng2grade.toUpperCase();
    document.getElementById("eng2valueshow").innerHTML=eng2value;
    document.getElementById("eng2percentshow").innerHTML=(eng2value*9.5)+"%";

    document.getElementById("coigradeshow").innerHTML=coigrade.toUpperCase();
    document.getElementById("coivalueshow").innerHTML=coivalue;
    document.getElementById("coipercentshow").innerHTML=(coivalue*9.5)+"%";

    document.getElementById("mp1gradeshow").innerHTML=mp1grade.toUpperCase();
    document.getElementById("mp1valueshow").innerHTML=mp1value;
    document.getElementById("mp1percentshow").innerHTML=(mp1value*9.5)+"%";

    document.getElementById("totalcgpa").innerHTML=cgpa;
    document.getElementById("totalpercentage").innerHTML=percentage+"%";
    

    if(cs2value==0||cnvalue==0||coavalue==0||cs2labvalue==0||mpmcvalue==0||rfvalue==0||eng2value==0||coivalue==0||mp1value==0){
        document.getElementById("result").innerHTML="Result: FAIL"
    }
    else{
        document.getElementById("result").innerHTML="Result: PASS"
    }
    document.getElementById("showresulttable").innerHTML="Show Result Table";
    document.getElementById("showtable").style.display="none";

    if(cs2value!=0) document.getElementById("cs2status").innerHTML="PASS";
    else document.getElementById("cs2status").innerHTML="REMEDIAL";
    if(cnvalue!=0) document.getElementById("cnstatus").innerHTML="PASS";
    else document.getElementById("cnstatus").innerHTML="REMEDIAL";
    if(coavalue!=0) document.getElementById("coastatus").innerHTML="PASS";
    else document.getElementById("coastatus").innerHTML="REMEDIAL";
    if(cs2labvalue!=0) document.getElementById("cs2labstatus").innerHTML="PASS";
    else document.getElementById("cs2labstatus").innerHTML="REMEDIAL";
    if(mpmcvalue!=0) document.getElementById("mpmcstatus").innerHTML="PASS";
    else document.getElementById("mpmcstatus").innerHTML="REMEDIAL";
    if(rfvalue!=0) document.getElementById("rfstatus").innerHTML="PASS";
    else document.getElementById("rfstatus").innerHTML="REMEDIAL";
    if(eng2value!=0) document.getElementById("eng2status").innerHTML="PASS";
    else document.getElementById("eng2status").innerHTML="REMEDIAL";
    if(coivalue!=0) document.getElementById("coistatus").innerHTML="PASS";
    else document.getElementById("coistatus").innerHTML="REMEDIAL";
    if(mp1value!=0) document.getElementById("mp1status").innerHTML="PASS";
    else document.getElementById("mp1status").innerHTML="REMEDIAL";

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
