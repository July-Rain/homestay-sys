var vm = new Vue({
    el: '#rrapp',
    data: {
        showList: true,
        title: null,
        sysBook: {},
        typeOptions: [],
        userOptions: [],
        user:{},
        login:{}
    },
    methods: {
        query: function () {
            vm.reload();
        },
        add: function () {
            vm.showList = false;
            vm.title = "新增";
            vm.sysBook = {};
        },
        update: function (event) {
            var id = getSelectedRow();
            if (id == null) {
                return;
            }
            vm.showList = false;
            vm.title = "修改";

            vm.getInfo(id)
        },
        saveOrUpdate: function (event) {
            debugger
            var url = vm.sysBook.id == null ? "mgt/sysbook/save" : "mgt/sysbook/update";
            $.ajax({
                type: "POST",
                url: baseURL + url,
                contentType: "application/json",
                data: JSON.stringify(vm.sysBook),
                success: function (result) {
                    if (result.code === 0) {
                        alert('操作成功', function (index) {
                            //vm.reload();
                        });
                    } else {
                        alert(result.msg);
                    }
                }
            });
        },
        saveOrUpdateUser: function (event) {
            var url = vm.user.userId == null ? "sys/user/save" : "sys/user/update";
            $.ajax({
                type: "POST",
                url: baseURL + url,
                contentType: "application/json",
                data: JSON.stringify(vm.user),
                success: function(r){
                    if(r.code === 0){
                        alert('操作成功', function(){
                            vm.reload();
                        });
                    }else{
                        alert(r.msg);
                    }
                }
            });
        },
        loginFrom: function (event) {
            var data = "username="+vm.login.username+"&password="+vm.login.password;
            $.ajax({
                type: "POST",
                url: "sys/login",
                data: data,
                dataType: "json",
                success: function(result){
                    if(result.code == 0){//登录成功
                        layer.alert("登陆成功", {
                            icon: 0,
                            skin: 'layer-ext-moon',
                            title: "提示"
                        });
                    }else{
//						vm.error = true;
//						vm.errorMsg = result.msg;
                        layer.alert(result.msg, {
                            icon: 0,
                            skin: 'layer-ext-moon',
                            title: "提示"
                        });
                        //vm.refreshCode();
                    }
                }
            });
        },

        bookList: function (event) {
            $.ajax({
                type: "POST",
                url: "mgt/sysbook/sysbook",
                data: "",
                dataType: "json",
                success: function(result){
                    if(result.code == 0){//登录成功
                        parent.location.href ='modules/sys/sysbook.html';
                    }else{
        //						vm.error = true;
        //						vm.errorMsg = result.msg;
                        layer.alert(result.msg, {
                            icon: 0,
                            skin: 'layer-ext-moon',
                            title: "提示"
                        });
                        //vm.refreshCode();
                    }
                }
            });
        },
        del: function (event) {
            var ids = getSelectedRows();
            if (ids == null) {
                return;
            }

            confirm('确定要删除选中的记录？', function () {
                $.ajax({
                    type: "POST",
                    url: baseURL + "mgt/sysbook/delete",
                    contentType: "application/json",
                    data: JSON.stringify(ids),
                    success: function (result) {
                        if (result.code == 0) {
                            alert('操作成功', function (index) {
                                $("#jqGrid").trigger("reloadGrid");
                            });
                        } else {
                            alert(result.msg);
                        }
                    }
                });
            });
        },
        getInfo: function (id) {
            $.get(baseURL + "mgt/sysbook/info/" + id, function (result) {
                vm.sysBook = result.sysBook;
            });
        },
        reload: function (event) {
            vm.showList = true;
            var page = $("#jqGrid").jqGrid('getGridParam', 'page');
            $("#jqGrid").jqGrid('setGridParam', {
                page: page
            }).trigger("reloadGrid");
        },
        resetLogin:function () {
            vm.login={
                password:"",
                username:""
            }
        },
        resetUser:function () {
            vm.user={
                username:"",
                nickName:"",
                cardId:"",
                password:"",
                email:"",
                mobile:""
            }

        },
        resetSysBook:function () {
            vm.sysBook={
                userName:"",
                userPhone:"",
                bookType:"",
                bookStartTime:"",
                bookEndTime:"",
                remark:""
            }
        }

    },
    created: function () {

        var url = 'sys/sysdict/getdicinfo';
        $.ajax({
            type: "POST",
            url: baseURL + url + "/kinds",
            contentType: "application/json",
            success: function (result) {
                vm.typeOptions = result.data;
            }
        });
        $.ajax({
            type: "POST",
            url: baseURL + "/sys/user/listNotAdmin",
            contentType: "application/json",
            success: function (result) {
                vm.userOptions = result.data;
            }
        });
    },
});