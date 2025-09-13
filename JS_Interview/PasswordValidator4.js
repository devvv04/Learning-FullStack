// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit,at least one special character 



function PasswordValidator(abc) {
    let minLen = false;
    let hasUpper = false
    let hasLower = false
    let hasdigit = false
    let special = false
    if (abc.length>=8) {
        minLen = true;
    }
    for (const val of abc) {
        if(val>='A' && val<='Z'){
            hasUpper = true;
        }
        if(val>='a'&&val<='z'){
            hasLower = true
        }
        if(val>=0&&val<=9){
            hasdigit = true
        }
        special = /!@#%&/.test(val)
        
    }
    return minLen && hasLower && hasUpper && hasdigit && special
}

console.log(PasswordValidator("Pass12345"));

// console.log(PasswordValidator("pass12345"));

// console.log(PasswordValidator("Pass"));

// console.log(PasswordValidator("PassworedsSFCJb4"));

