try {
    // throw new Error("error");
     addalert("this is alert")
} catch (error) {
    console.log(error.name);
} finally {
    console.log("will it work? yes always even with error");
    
}