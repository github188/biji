
function OnSearch()
    {
       val = document.getElementById("txt_keyword").value; 
       if(val.length==0)
       {
            alert("�������ݲ���Ϊ��!");
            document.getElementById("txt_keyword").focus();
            return false;
       }
//       window.location="/Search.aspx?keyword="+escape(val);
        window.open("/Search.aspx?keyword="+escape(val));
       return true;
    }