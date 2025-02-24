

window.addEventListener("load", () => {

    // eerste server test
    console.info('testing server');

    fetch("http://localhost:5000/api")
        .then(response => response.json())
        .then(data => {
            //document.getElementById("message").innerText = data.message;
        })
        .catch(error => {
            console.error("Fout bij de eerste connectie:", error);
            //document.getElementById("message").innerText = "Fout bij laden van gegevens.";
        });


    // Test Database skills

    fetch("http://localhost:5000/skills")
        .then(response => response.json())
        .then(data => {
            console.log('dataRetrieved', data);
            let mainSkills = document.getElementById("skillsMain")
            for (let i = 0; i < data.length; i++) {
                let element = document.createElement(div)




               /* if(i%2 == 1) { // hiet zullen mijn skills rechts staan
                    let skill = data[i];
                    mainSkills.innerHTML += `
                    <div id="inTheRight"> 
                    ${skill.naam}
                    </div>
                    `    
                } else { // hier links
                    let skill = data[i];
                    mainSkills.innerHTML += `
                    <div id="inTheLeft">
                    ${skill.naam}
                    </div>       
                `
                } */
            }            

        })
        .catch(error => {
            console.error("Fout bij ophalen van skil data:", error);
            //document.getElementById("message").innerText = "Fout bij laden van gegevens.";
        });


        console.log("Hello");
        let js = document.getElementById("JS");
        
});