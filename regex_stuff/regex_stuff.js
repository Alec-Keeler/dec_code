const exp = /^\(?\d{3}[\)-]?\d{3}-\d{4}$/
const phoneNum = '(123)456-7890'

function checkPhoneNum(exp, phoneNum) {
    if (exp.test(phoneNum)) {
        // console.log(true)
        return true
    } else {
        // console.log(false)
        return false
    }
}

// checkPhoneNum(exp, phoneNum)

function fixPhoneNum(phoneNum, exp) {
    const isGoodNum = checkPhoneNum(exp, phoneNum)

    if (isGoodNum) {
        const remove = /[\(\)-]/g;
        const replace = '';

        const newNum = phoneNum.replace(remove, replace)
        console.log(newNum)
        console.log(parseInt(newNum))
    } else {
        return 'Please provide a valid phone number'
    }
}

fixPhoneNum(phoneNum, exp)