function register(username){
    function valid(){
        
        if(username =="" || username.length < 4 )
        {
        console.log("You have to enter your name again! Vaildation Failed")
        }
        else
        {
            console.log("Validation Sucessfull")
        }
    };
    return valid();
}
register("Sac");