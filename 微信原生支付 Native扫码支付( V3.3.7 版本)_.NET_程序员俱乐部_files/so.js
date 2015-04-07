
function OnSearch()
    {
       val = document.getElementById("txt_keyword").value; 
       if(val.length==0)
       {
            alert("搜索内容不能为空!");
            document.getElementById("txt_keyword").focus();
            return false;
       }
//       window.location="/Search.aspx?keyword="+escape(val);
        window.open("/Search.aspx?keyword="+escape(val));
       return true;
    }