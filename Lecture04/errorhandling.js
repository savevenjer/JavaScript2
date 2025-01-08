function criticalCode(){
    throw "throwing and exception";
}

function logError(theException){
    console.log(theException);
}

//try...Catch
console.log("\********Try...Catch********");

try{
    criticalCode();
}catch (ex) {
    console.log("Got an error");
    logError(ex);
}

//Tgrowing in try...Catch
console.log("\n********Throwing in Try...Catch*******\n")

try{
    throw "An exception that is Throw every time";
}catch(ex){
    console.log("Got an error");
    logError(ex);
}

//Try...Catch...Finally
console.log("\n********Try..Catch..Finally********\n");

try{
    criticalCode();
}catch (ex) {
    console.log("Got an error");
    logError(ex);
}finally {
    console.log("Code that always will run");
}
function hello(){
    console.log("\n**********Throwing Exception*********\n");
}