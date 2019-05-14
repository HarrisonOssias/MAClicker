(function() {
    const myPeerReview = 
        {
            groups: ["Group 1", "Group 2", "Group 3", "Group 4"], 

            criteria: {"Content": ["SWOT Analysis", "Survey Method", "Survey Results", "Business Plan"], 
            "Presentation": [
                "Powerpoint", "Presentation Skills", "Persuasive Speech", "Reasoning"]
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
                    <li class="nav-item" >
                        <a class="nav-link active" data-toggle="tab" href="#${myPeerReview.groups[group]}-content">${myPeerReview.groups[group]}</a></li>
                    </li>`
                );
                firstChecker = 1;
            }

        // Not active 
            else {
                groupTabs.push(
                    `<li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#${myPeerReview.groups[group]}-content" >${myPeerReview.groups[group]}</a></li>
                    </li>`
                );
            }
        }   
  
        // Adds all the group tabs to the top 
        output.push(
                `<ul class="nav nav-tabs nav-justified" role="tablist">
                        ${groupTabs.join("")} 
                </ul>

                        ${groupPage.join("")}
             
                `
        );
      // finally combine our output list into one string of HTML and put it on the page
      PRContainer.innerHTML = output.join("");
    }

    function buildGroupPage() {
        // we'll need a place to store the HTML output
        const output = [];
        const groupPage = [];
        var firstChecker = 0;

        for (group in myPeerReview.groups) {
        // If it's the first element in dictionary (it will be active)
                if (firstChecker === 0){
                        groupPage.push(
                            `<div  class="tab-pane active" id="${myPeerReview.groups[group]}-content" role="tabpanel">
                                <h3>${myPeerReview.groups[group]}</h3>
                            </div>`
                        );
                        firstChecker = 1;
                    }

                // Not active 
                    else {
                        groupPage.push(
                            `<div  class="tab-pane" id="${myPeerReview.groups[group]}-content" role="tabpanel">
                                <h3>${myPeerReview.groups[group]}</h3>
                            </div>`
                        );
                    }
                }   
            
            
  
        // Adds all the group tabs to the top 
        output.push(`
                <div class="tab-content" id = "GroupPage" >
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
                    `<h3>${criteria}</h3>
                    <form>
                            <div class="form-group">
                                <label for="Powerpoint">Powerpoint</label>
                                <input type="number" min = "0" max = "10" class="form-control" id="Powerpoint" placeholder="Out of 10">
                            </div>
                    </form>`
                );
            }

            for (group in myPeerReview.groups){
                const groupSection = document.getElementById(`${myPeerReview.groups[group]}-content`);

                groupSection.innerHTML = groupPage.join("");
            }
    }

    const PRContainer = document.getElementById(`PR`);
    const GroupPageContainer = document.getElementById("GroupPage");
    const submitButton = document.getElementById("submit");
  
    // display quiz right away
    buildGroupTabs();
    buildGroupPage();
    GPhelper_Criteria();


  })();