export function getNonEmptyResponse(response) {
    if (Array.isArray(response[0])){
        console.log("It is an array")
        return false
    }
    else{
        console.log("it's not")

        return true
    }
}