function recomment(gid)
{
        //禁用的提交按钮
        document.getElementById("Submit22").value='正在提交...';
        document.getElementById("Submit22").disabled='disabled';
        
var c=document.getElementById("content").value;
var u=document.getElementById("uname").value;
if(c==""||c==null)
{
        window.alert("请输入评论内容！");         
        //恢复禁用的提交按钮
        document.getElementById("Submit22").value='提交';
        document.getElementById("Submit22").disabled='';
        return; 
}

if(u==""||u==null)
{u="网友"; }

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
        window.alert("提交成功！");
        today=new Date();
        year = today.getYear();
        month = today.getMonth()+1;
        date = today.getDate();
        hour = today.getHours();
        minute =today.getMinutes();
        second = today.getSeconds(); 
              
        var u=document.getElementById("uname").value==''?'网友':document.getElementById("uname").value;          
        var time=year+"/"+month+"/"+date+" "+hour+":"+minute+":"+second;
        var  cont=document.getElementById("content").value; 
        //document.getElementById("commentlist").innerHTML="<ul><li class=infor > <ul><li class=name >"+u+"</li><li class=date>"+time+"</li></ul></li><li class=leave>"+cont+"</li></ul>"+document.getElementById("commentlist").innerHTML ;
        document.getElementById("commentlist").innerHTML="<ul><h5><u>"+u+"</u> 在 "+time+" 说</h5><p>&nbsp;&nbsp;"+cont+"</p></ul>"+document.getElementById("commentlist").innerHTML ;
        
        document.getElementById("uname").value='';
        document.getElementById("content").value='';
        
        //恢复禁用的提交按钮
        document.getElementById("Submit22").value='提交';
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