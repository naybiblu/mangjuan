const { exec } = require("child_process");

module.exports = {
    name: "bash",
    type: "public",
    async execute(client) {
    
        
        
        exec("git add .", (err, stdout, stderr) => {console.log("adding README.md...\n" + stdout);}); 
             
        exec('git commit -m "first commit\"', (err, stdout, stderr) => {console.log("committing...\n" + stdout);});
        exec("git remote add origin https://github.com/naybiblu/mangjuan.git", (err, stdout, stderr) => {console.log("branching...\n" + stdout);}); 
        exec("git push origin main", (err, stdout, stderr) => {console.log("pushing commits...");});
        exec("naybiblu", (err, stdout, stderr) => { console.log(stdout);});








        
    }
}