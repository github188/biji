function recomment(gid)
{
        //���õ��ύ��ť
        document.getElementById("Submit22").value='�����ύ...';
        document.getElementById("Submit22").disabled='disabled';
        
var c=document.getElementById("content").value;
var u=document.getElementById("uname").value;
if(c==""||c==null)
{
        window.alert("�������������ݣ�");         
        //�ָ����õ��ύ��ť
        document.getElementById("Submit22").value='�ύ';
        document.getElementById("Submit22").disabled='';
        return; 
}

if(u==""||u==null)
{u="����"; }

var webUrl ="/Comment.aspx?u="+escape(u)+"&guid="+gid+"&content="+escape(c);               
                
try{ xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); }
catch(e){
     try  {xmlhttp=new ActiveXObject('Msxml2.XMLHTTP');}
     catch(e){  xmlhttp=new XMLHttpRequest();}                  
}
 
xmlhttp.onreadystatechange=stateDo;                 
xmlhttp.open("Get",webUrl,true);
xmlhttp.send(null);  
}

function  stateDo()
{                  
     if(xmlhttp.readyState==4 && xmlhttp.status==200)
     {
        window.alert("�ύ�ɹ���");
        today=new Date();
        year = today.getYear();
        month = today.getMonth()+1;
        date = today.getDate();
        hour = today.getHours();
        minute =today.getMinutes();
        second = today.getSeconds(); 
              
        var u=document.getElementById("uname").value==''?'����':document.getElementById("uname").value;          
        var time=year+"/"+month+"/"+date+" "+hour+":"+minute+":"+second;
        var  cont=document.getElementById("content").value; 
        //document.getElementById("commentlist").innerHTML="<ul><li class=infor > <ul><li class=name >"+u+"</li><li class=date>"+time+"</li></ul></li><li class=leave>"+cont+"</li></ul>"+document.getElementById("commentlist").innerHTML ;
        document.getElementById("commentlist").innerHTML="<ul><h5><u>"+u+"</u> �� "+time+" ˵</h5><p>&nbsp;&nbsp;"+cont+"</p></ul>"+document.getElementById("commentlist").innerHTML ;
        
        document.getElementById("uname").value='';
        document.getElementById("content").value='';
        
        //�ָ����õ��ύ��ť
        document.getElementById("Submit22").value='�ύ';
        document.getElementById("Submit22").disabled='';
     }                
}

function initNum()
{
    var num = document.getElementById("commentnum").innerHTML;
    if (num=='')
    {
        document.getElementById("commentnum").innerHTML='0';
        document.getElementById("commentnum1").innerHTML='0';
    }
}