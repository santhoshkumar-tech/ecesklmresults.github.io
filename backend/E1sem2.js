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
        var total_credit=24.5;
    }
    else if(selectsub=="Signals and Systems"){
        var selectsubcredit=4;
        var total_credit=26;
    }

    var idno = document.getElementById("idno").value    
    var begrade = document.getElementById("be").value
    var bevalue = grades[begrade.toUpperCase()];
    var mmgrade = document.getElementById("mm").value
    var mmvalue = grades[mmgrade.toUpperCase()];
    var ntgrade = document.getElementById("nt").value
    var ntvalue = grades[ntgrade.toUpperCase()];
    var oopgrade = document.getElementById("oop").value
    var oopvalue = grades[oopgrade.toUpperCase()];

    var selectsubgrade = document.getElementById("selectsubgrade").value
    var selectsubvalue = grades[selectsubgrade.toUpperCase()];

    var belabgrade = document.getElementById("belab").value
    var belabvalue = grades[belabgrade.toUpperCase()];
    var eng1labgrade = document.getElementById("eng1lab").value
    var eng1labvalue = grades[eng1labgrade.toUpperCase()];
    var clabgrade = document.getElementById("clab").value
    var clabvalue = grades[clabgrade.toUpperCase()];
    var ooplabgrade = document.getElementById("ooplab").value
    var ooplabvalue = grades[ooplabgrade.toUpperCase()];

    var credit_score=(4*bevalue)+(4*mmvalue)+(4*ntvalue)+(2*oopvalue)+(selectsubcredit*selectsubvalue)+(1.5*belabvalue)+(2.5*eng1labvalue)+(2.5*clabvalue)+(1.5*ooplabvalue);
    var cgpa = credit_score/total_credit;
    var percentage = cgpa*9.5;
    document.getElementById("cgpa").innerHTML=cgpa;
    document.getElementById("percent").innerHTML=percentage+" %";
    document.getElementById("output").style.display="block";
    

    document.getElementById("idnumber").innerHTML="IDNO: S"+idno;

    document.getElementById("begradeshow").innerHTML=begrade.toUpperCase();
    document.getElementById("bevalueshow").innerHTML=bevalue;
    document.getElementById("bepercentshow").innerHTML=(bevalue*9.5)+"%";

    document.getElementById("mmgradeshow").innerHTML=mmgrade.toUpperCase();
    document.getElementById("mmvalueshow").innerHTML=mmvalue;
    document.getElementById("mmpercentshow").innerHTML=(mmvalue*9.5)+"%";

    document.getElementById("ntgradeshow").innerHTML=ntgrade.toUpperCase();
    document.getElementById("ntvalueshow").innerHTML=ntvalue;
    document.getElementById("ntpercentshow").innerHTML=(ntvalue*9.5)+"%";

    document.getElementById("oopgradeshow").innerHTML=oopgrade.toUpperCase();
    document.getElementById("oopvalueshow").innerHTML=oopvalue;
    document.getElementById("ooppercentshow").innerHTML=(oopvalue*9.5)+"%";

    document.getElementById("selectsubshow").innerHTML=selectsub;
    document.getElementById("selectsubcreditshow").innerHTML=selectsubcredit;
    document.getElementById("selectsubgradeshow").innerHTML=selectsubgrade.toUpperCase();
    document.getElementById("selectsubvalueshow").innerHTML=selectsubvalue;
    document.getElementById("selectsubpercentshow").innerHTML=(selectsubvalue*9.5)+"%";

    document.getElementById("belabgradeshow").innerHTML=belabgrade.toUpperCase();
    document.getElementById("belabvalueshow").innerHTML=belabvalue;
    document.getElementById("belabpercentshow").innerHTML=(belabvalue*9.5)+"%";

    document.getElementById("eng1labgradeshow").innerHTML=eng1labgrade.toUpperCase();
    document.getElementById("eng1labvalueshow").innerHTML=eng1labvalue;
    document.getElementById("eng1labpercentshow").innerHTML=(eng1labvalue*9.5)+"%";

    document.getElementById("clabgradeshow").innerHTML=clabgrade.toUpperCase();
    document.getElementById("clabvalueshow").innerHTML=clabvalue;
    document.getElementById("clabpercentshow").innerHTML=(clabvalue*9.5)+"%";

    document.getElementById("ooplabgradeshow").innerHTML=ooplabgrade.toUpperCase();
    document.getElementById("ooplabvalueshow").innerHTML=ooplabvalue;
    document.getElementById("ooplabpercentshow").innerHTML=(ooplabvalue*9.5)+"%";

    document.getElementById("totalcgpa").innerHTML=cgpa;
    document.getElementById("totalpercentage").innerHTML=percentage+"%";
    

    if(bevalue==0||mmvalue==0||ntvalue==0||oopvalue==0||selectsubvalue==0||belabvalue==0||eng1labvalue==0||clabvalue==0||ooplabvalue==0){
        document.getElementById("result").innerHTML="Result: FAIL"
    }
    else{
        document.getElementById("result").innerHTML="Result: PASS"
    }
    document.getElementById("showresulttable").innerHTML="Show Result Table";
    document.getElementById("showtable").style.display="none";

    if(bevalue!=0) document.getElementById("bestatus").innerHTML="PASS";
    else document.getElementById("bestatus").innerHTML="REMEDIAL";
    if(mmvalue!=0) document.getElementById("mmstatus").innerHTML="PASS";
    else document.getElementById("mmstatus").innerHTML="REMEDIAL";
    if(ntvalue!=0) document.getElementById("ntstatus").innerHTML="PASS";
    else document.getElementById("ntstatus").innerHTML="REMEDIAL";
    if(oopvalue!=0) document.getElementById("oopstatus").innerHTML="PASS";
    else document.getElementById("oopstatus").innerHTML="REMEDIAL";
    if(selectsubvalue!=0) document.getElementById("selectsubstatus").innerHTML="PASS";
    else document.getElementById("selectsubstatus").innerHTML="REMEDIAL";
    if(belabvalue!=0) document.getElementById("belabstatus").innerHTML="PASS";
    else document.getElementById("belabstatus").innerHTML="REMEDIAL";
    if(eng1labvalue!=0) document.getElementById("eng1labstatus").innerHTML="PASS";
    else document.getElementById("eng1labstatus").innerHTML="REMEDIAL";
    if(clabvalue!=0) document.getElementById("clabstatus").innerHTML="PASS";
    else document.getElementById("clabstatus").innerHTML="REMEDIAL";
    if(ooplabvalue!=0) document.getElementById("ooplabstatus").innerHTML="PASS";
    else document.getElementById("ooplabstatus").innerHTML="REMEDIAL";

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
