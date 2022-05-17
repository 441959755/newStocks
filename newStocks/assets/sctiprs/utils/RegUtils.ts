

export default {

    /**
     * 
     * @param num  手机号码
     * @returns 是否是手机号码
     */
    isPhoneNumber(num) {
        if (!num) { return false }
        var reg = /^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
        return reg.test(num);
    },
}