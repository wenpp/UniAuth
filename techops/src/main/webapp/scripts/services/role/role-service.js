define(['../../utils/constant'], function (constant) {
    var Service = function ($resource) {
        var svc = $resource(constant.apiBase + '/role/:method/:method2', null, {
            getRoles: {
                method: 'POST',
                params: {
                    method: 'query'
                },
                isArray: false,
                timeout: constant.reqTimeout
            },
            getAllRoleCodes: {
                method: 'GET',
                params: {
                    method: 'codes'
                },
                isArray: false,
                timeout: constant.reqTimeout
            },
            addRole: {
                method: 'POST',
                params: {
                    method: 'add'
                },
                isArray: false,
                timeout: constant.reqTimeout
            },
            updateRole: {
                method: 'POST',
                params: {
                    method: 'update'
                },
                isArray: false,
                timeout: constant.reqTimeout
            }

        });
        return svc;
    };

    return {
        name: "RoleService",
        svc: ["$resource", Service]
    };

});