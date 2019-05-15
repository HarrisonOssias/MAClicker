(function() {
    const myPeerReview = 
        {
            groups: ["Group 1", "Group 2", "Group 3", "Group 4"], 

            criteria: {Content: ["SWOT Analysis", "Survey Method", "Survey Results", "Business Plan"], 
            Presentation: [ "Powerpoint", "Presentation Skills", "Persuasive Speech", "Reasoning"]
                      },

            ranks: ["10", "10"]
        };

    function buildGroupTabs() {
      // we'll need a place to store the HTML output
        const output = [];
        const groupTabs = [];
        const groupPage = [];
        var firstChecker = 0;

        for (group in myPeerReview.groups) {
        // If it's the first element in dictionary (it will be active)
            if (firstChecker === 0){
                groupTabs.push(
                    `
                    <li class="nav-item">
                        <a class="nav-link active" href="#${myPeerReview.groups[group]}" data-toggle="tab" >${myPeerReview.groups[group]}</a></li>
                    </li>`
                );
                firstChecker = 1;
            }

        // Not active 
            else {
                groupTabs.push(
                    `<li class="nav-item">
                        <a class="nav-link" href="#${myPeerReview.groups[group]}" data-toggle="tab" >${myPeerReview.groups[group]}</a></li>
                    </li>`
                );
            }
        }   

        // Adds all the group tabs to the top 
        output.push(
                `<ul class="nav nav-tabs" role="tablist">
                        ${groupTabs.join("")} 
                </ul>
                <div class="tab-content" id="GroupPage">
                </div>
                
                `
        );
      // finally combine our output list into one string of HTML and put it on the page
      PRContainer.innerHTML = output.join("");
    }

    function buildGroupPage() {
        // we'll need a place to store the HTML output
        const output = [];
        const groupPage = [];
        const GroupPageContainer = document.getElementById("GroupPage");
        var firstChecker = 0;

        for (group in myPeerReview.groups) {
        // If it's the first element in dictionary (it will be active)
                if (firstChecker === 0){
                        groupPage.push(
                            `<div  class="tab-pane active" id="${myPeerReview.groups[group]}" role="tabpanel">
                                <h3>${myPeerReview.groups[group]}</h3>
                                <div id = "${myPeerReview.groups[group]}-content">
                                </div>
                            </div>`
                        );
                        firstChecker = 1;
                    }

                // Not active 
                    else {
                        groupPage.push(
                            `<div  class="tab-pane" id="${myPeerReview.groups[group]}" role="tabpanel">
                                <h3>${myPeerReview.groups[group]}</h3>
                                <div id = "${myPeerReview.groups[group]}-content">
                                </div>
                            </div>`
                        );
                    }
                }   



        // Adds all the group tabs to the top 
        output.push(`
                <div class="tab-content">
                        ${groupPage.join("")}
                </div>
                <form>
                    <div class="form-group">
                    <label for="Comments">Comments:</label>
                    <textarea class="form-control" id="Comments" rows="3"></textarea>
                    </div>
                </form>
                `
        );
      // finally combine our output list into one string of HTML and put it on the page
      GroupPageContainer.innerHTML = output.join("");


    }

    //Group Page builder helper
    function GPhelper_Criteria(){
        // we'll need a place to store the HTML output
        const output = [];
        const groupPage = [];

            for (criteria in myPeerReview.criteria) {
                // If it's the first element in dictionary (it will be active)
                groupPage.push(
                    `<div>
                    <h3>${criteria}</h3>
                        <div class="${criteria}" > </div>
                    </div>`
                );
            }

            for (group in myPeerReview.groups){
                const groupSection = document.getElementById(`${myPeerReview.groups[group]}-content`);

                groupSection.innerHTML = groupPage.join("");
            }
    }

       //Group Page builder helper
       function GPhelper_Subcriteria(){
        // we'll need a place to store the HTML output
        const output = [];
        const criteriaForm = [];

        //myPeerReview.criteria.get("Content");

            for (cri in myPeerReview.criteria) {
                console.log(cri)
                // If it's the first element in dictionary (it will be active)
                const criteriaClass = document.getElementsByClassName(`${cri}`);

                Object.entries(criteriaClass).forEach(([key, value]) => 
                    //console.log(`${key}: ${value}`)

                    criteriaClass[key].innerHTML = `
                    <form class = "${cri}-subcriteria">

                    </form>
                    `
                )
            }
            for (c in myPeerReview.criteria.Content){
                console.log(myPeerReview.criteria.Content[c]);

                const criteriaClass = document.getElementsByClassName(`Content-subcriteria`);

                var html_to_insert = `<div class="form-group">
                <label for="${myPeerReview.criteria.Content[c]}">${myPeerReview.criteria.Content[c]}</label>
                <input type="number" min = "0" max = "10" class="form-control" id="${myPeerReview.criteria.Content[c]}" placeholder="Out of 10">
             </div>`;

                Object.entries(criteriaClass).forEach(([key, value]) => 
                    //console.log(`${key}: ${value}`)

                    criteriaClass[key].insertAdjacentHTML('beforeend', html_to_insert)
                    
                )
            }

            for (c in myPeerReview.criteria.Presentation){
                console.log(myPeerReview.criteria.Presentation[c]);

                const criteriaClass = document.getElementsByClassName(`Presentation-subcriteria`);

                var html_to_insert = `<div class="form-group">
                <label for="${myPeerReview.criteria.Presentation[c]}">${myPeerReview.criteria.Presentation[c]}</label>
                <input type="number" min = "0" max = "10" class="form-control" id="${myPeerReview.criteria.Presentation[c]}" placeholder="Out of 10">
             </div>`;

                Object.entries(criteriaClass).forEach(([key, value]) => 
                    //console.log(`${key}: ${value}`)

                    criteriaClass[key].insertAdjacentHTML('beforeend', html_to_insert)
                    
                )
            }

            


    }

    const PRContainer = document.getElementById(`PR`);
    const submitButton = document.getElementById("submit");

    // display quiz right away
    buildGroupTabs();
    buildGroupPage();
    GPhelper_Criteria();
    GPhelper_Subcriteria();


  })();