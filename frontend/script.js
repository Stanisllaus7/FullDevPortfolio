

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

            // creating review of my skills

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


            // creating skill bars

            let element2 = document.createElement("div"); // div where will be my div with skill-bars
            let element3 = document.createElement("div"); // div with skill bars
            element2.classList.add('bar');
            element3.classList.add('bar-bar');
            console.log(element2);
            for (let i = 0; i < data.length; i++) { 
                let bar = document.createElement("li");
                bar.classList.add('bar-item');
                bar.innerHTML = `<h3>${data[i].naam}</h3><span class="barSpan"><span class="${data[i].naam}" style="width: ${(data[i].level)*10}%; animation: ${data[i].naam} 3s;"></span></span>`;
                element3.append(bar);
                element2.append(element3);
                mainSkills.append(element2);

                // function to add style and animate skill-bars (adding keyframes (animation))
                function addKeyFrames() {
                    let styleSheet = document.createElement("style");
                    styleSheet.type = "text/css";
                    styleSheet.innerHTML = `
                        @keyframes ${data[i].naam}{ 
                            0%{
                                width: 0%;
                            }
                            100%{
                                width: ${(data[i].level)*10}%;
                            }
                        }
                    `
                    document.head.appendChild(styleSheet);
                }

                addKeyFrames(); 
               

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