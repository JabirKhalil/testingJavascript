function validateField(input) {
    let type = input.getAttribute("type");
    
    switch(type) {
        case "text":
            console.log('is text')
            break;
        case "date":
            console.log('is date')
            break;
    }
}
