(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wimr";
    //-------------------------------------------------------------------------------------
    m[p+"sleep-study-2022-average"]     ={url:H+"/business/sleep-study-2022-average/page.html",prefix:p,router:1};
    m[p+"sleep-study-2021-average"]     ={url:H+"/business/sleep-study-2021-average/page.html",prefix:p,router:1};
    m[p+"sleep-study-done-but-not-sent"]={url:H+"/business/sleep-study-done-but-not-sent/page.html",prefix:p,router:1};
    m[p+"number-of-sleep-study-by-year-and-month"]={url:H+"/business/number-of-sleep-study-by-year-and-month/page.html",prefix:p,router:1};
    m[p+"number-of-sleep-study-by-year"]={url:H+"/business/number-of-sleep-study-by-year/page.html",prefix:p,router:1};
})();
