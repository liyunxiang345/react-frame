import http from '@/utils/axios';

export default {
    adminLogin(data) {
        return http('/api/admin-user/login',{
            method: "POST",
            data
        })
    },
    adminRegister(data) {
        return http('/api/admin-user/register',{
            method: "POST",
            data
        })
    },
}