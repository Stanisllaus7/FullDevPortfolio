

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

            // Creating overview of my projects 
            let mainProjects = document.getElementById("mainProjects");
            let currentProject = 0;

            showProject(); // creates first project
            
            // checks what project you are looking at at the moment and based on this edits buttons
            function switchPorjects() {

                buttonLeft = document.getElementById("arrowLeft");
                buttonRight = document.getElementById("arrowRight");
                if(currentProject == 0) { // if current project is the first one - disables the left button
                    buttonLeft.disabled = true;
                    buttonRight.disabled = false;
                    buttons();
                } else if (currentProject == (data.length)-1){ // If current project is the last one - disables the right button
                    
                    buttonRight.disabled = true;
                    buttonLeft.disabled = false;
                    buttons();
                } else { // enables both buttons
                    buttonLeft.disabled = false;
                    buttonRight.disabled = false;
                    buttons();
                }
                
                // Even listeners to buttons
                function buttons() {
                    console.log("Current project is " + currentProject + " and this is project number " + data.length);
                    buttonRight.addEventListener('click', () => {
                        currentProject++;
                        console.log("RIght button is clicked!"); // test if works
                        console.log(currentProject);
                        showProject();
                    });

                    buttonLeft.addEventListener('click', () => {
                        currentProject--;
                        console.log("Left button is clicked!"); // test if works
                        console.log(currentProject);
                        showProject();
                    });
                
                }
            }

            // Project overview
            function showProject() {
                    console.log("You are in function and current project is " + currentProject);
                        mainProjects.innerHTML = `
                        <div class="project">
                            <h1 class="projectName">${data[currentProject].naam}</h1>
                        
                        <div class="projectDiv">
                            <div class="projectDivLeft">
                                <h3 class="projectType">${data[currentProject].type}</h3>
                                <p class="projectDsc">${data[currentProject].dsc}</p>
                            </div>
                            <div class="projectPhoto" style="background-image: url(${data[currentProject].img});">
                                
                            </div>
    
                        </div>   
                        <div class="buttons">
                            <button id="arrowLeft"> <
                            <button id="arrowRight"> >
                        </div>
    
                        </div>
                        `
                        switchPorjects();
            }
            console.log("You are outise the function");
            
        })
        .catch(error => {
            console.error("Fout bij ophalen van projects data:", error);
        });


        console.log("Hello");
        
        
});