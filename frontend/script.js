

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
                let element = document.createElement("div");
                element.classList.add('skill');
                let txt = document.createElement("div");
                let pct = document.createElement("div");
                txt.classList.add('skill-text');
                txt.innerHTML = `<p>${data[i].dsc}</p>`;
                pct.classList.add('skill-photo');
                pct.style.backgroundImage = `url('${data[i].img}')`;
    
                console.log(element);
                element.append(txt);
                element.append(pct);
                mainSkills.append(element);

                
            }            
            
            for (let i = 0; i < data.length; i++) {
                mainSkills.innerHTML += `
                <p>${data[i].naam}</p>
                <div class="skill-bar">
                <div class="skill-percentage" a="${(data[i].level)*10}%" style="width:${(data[i].level)*10}%"></div>
                </div>
                `
                }
        })
        .catch(error => {
            console.error("Fout bij ophalen van skil data:", error);
            //document.getElementById("message").innerText = "Fout bij laden van gegevens.";
        });


        // Test Database projects

        fetch("http://localhost:5000/projects")
        .then(response => response.json())
        .then(data => {
            console.log('dataRetrieved - projects', data);
            let mainProjects = document.getElementById("mainProjects");
            for (let i = 0; i < data.length; i++) {
                
            }
            
        })
        .catch(error => {
            console.error("Fout bij ophalen van projects data:", error);
        });


        console.log("Hello");
        
        
});