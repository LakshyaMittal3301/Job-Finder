let btn1 = document.getElementById("btn1");

const accessToken = "169717075290167"; 
const sort_options = ["name", "id : low - high", "id : high to low"];

const search_bar = document.getElementById("filter-jobs");

search_bar.addEventListener("keypress", () => {
    const text = search_bar.value;
    const sort_by = "name";
    console.log(text);
    if(text.length >= 2){
        console.log("Length greater than 2")
        getJobs().then(jobs=>{
            let filteredJobs = filterJobs(jobs,text, sort_by);
            showJobs(filteredJobs);
        });
    }
});

console.log("Button", btn1)
btn1.addEventListener("click",()=>{
    const sort_by = "name";
    let text=document.getElementById("filter-jobs").value;
    getJobs().then(jobs=>{
        let filteredJobs = filterJobs(jobs,text, sort_by);
        showJobs(filteredJobs);
    })
})

function getJobs(){
    const url =`https://superheroapi.com/api/${accessToken}/search/name`
    return fetch(url, {
        mode: 'no-cors' // 'cors' by default
      })
    .then(response=>response.json())
    .then(data=>{
        return data
    })
}

function filterJobs(jobs,searchText, sort_by){
    return jobs;
}
    // if(searchText){
    //     let filteredJobs = jobs.filter(job=>{
    //         return true;
    //     }
    // }
        // if(job.roleName.toLowerCase().includes(searchText) ||
        // job.type.toLowerCase().includes(searchText)|| 
        // job.company.toLowerCase().includes(searchText)||
        // job.requirements.content.toLowerCase().includes(searchText))
        // {
        // return true;
        // }
        // else{
        //     return false;
        // }
        // })

        // if(sort_by === "name"){
        //     filteredJobs.sort((a, b) => {
        //         return a.roleName.localeCompare(b.roleName);
        //     });
        // }
        // else if(sort_by === "id : low - high"){
        //     filteredJobs.sort((a, b) => {
        //         return a.id < b.id;
        //     })
        // }
        // else{
        //     filteredJobs.sort((a, b) => {
        //         return a.id > b.id;
        //     })
        // }
        // return filteredJobs;
        
//     }else{
//         return jobs;
//     }
// }
function showJobs(jobs){
    console.log(jobs);
    let  jobsContainer = document.querySelector(".jobs-container");
    console.log(jobsContainer);
    let jobsHTML = "";
    jobs.forEach(job=>{
        jobsHTML+=`<div class="job-tile">
        <div class="top">
            <img src="${job.results.id}" alt="">
            <span class="material-icons more_horiz">more_horiz</span>
        </div>
        <div class="rolename">
            <span>${job.results.name}</span>
        </div>
        <div class="description">
            <span>${job.results.powerstats.intelligence}</span>
        </div>
        <div class="buttons">
            <div class="button apply-now">
                Apply Now
            </div>
            <div class="button">
                Message
            </div>
        </div>
    </div>`
    })
    jobsContainer.innerHTML=jobsHTML;
}

//when website is loaded first
getJobs().then(data=>{
    showJobs(data);
});