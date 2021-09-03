

let check_uppercase = function(str){
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log(str + " has the firstt character as uppercase")
    } else{
        console.log(str + " does not the firstt character as uppercase")
    }
}
check_uppercase("Kku");
check_uppercase("kku");