(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wimr";
    //-------------------------------------------------------------------------------------
    m[p+"sleep-study-2021-average"]={url:H+"/business/sleep-study-2021-average/page.html",prefix:p,router:1};
    //m[p+"clinic-email-automation"]={url:H+"/business/clinic-email-automation/page.html",prefix:p,router:1};
})();
