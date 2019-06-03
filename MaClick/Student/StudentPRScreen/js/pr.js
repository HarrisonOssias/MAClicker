(function() {
    showing = 0;
    const myPeerReview = 
        {
            groups: ["Group 1", "Group 2", "Group 3", "Group 4", "Fifth Group", "Avengers"], 

            criteria: {Content: ["SWOT Analysis", "Survey Method", "Survey Results", "Business Plan"], 
                       Presentation: [ "Powerpoint", "Presentation Skills", "Persuasive Speech", "Reasoning"]
                       , Visual: ["Aesthetic"]  
                    },

            ranks: ["10", "20", "10"]
        };

    function buildGroupTabs() {
      // we'll need a place to store the HTML output
        const output = [];
        const groupTabs = [];
        const groupPage = [];
        var firstChecker = 0;

        for (group in myPeerReview.groups) {

                groupTabs.push(
                    `<li class="nav-item">
                        <button type="button" class="btn btn-outline-primary tabButton" id = "${group}"> 
                        <a class="nav-link">${myPeerReview.groups[group]}</a>
                        </button>
                    </li>`
                );
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
            groupPage.push(
                `<div id="${myPeerReview.groups[group]}">
                    <h2> <b> ${myPeerReview.groups[group]} <b></h2>
                    <div id = "${myPeerReview.groups[group]}-content">
                    </div>
                </div>`
            );
                    
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
                //console.log(cri)
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

            var rankCounter = 0; //to keep track of rank
            for (c in myPeerReview.criteria){
                const subcriteria = myPeerReview.criteria[c]

                for (sc in subcriteria){
                    //console.log(myPeerReview.criteria.Content[c]);
                    console.log(sc)
                    const criteriaClass = document.getElementsByClassName(`${c}-subcriteria`);
    
                    var html_to_insert = `<div class="form-group">
                    <label for="${subcriteria[sc]}">${subcriteria[sc]}</label>
                    <input type="number" min = "0" max = ${myPeerReview.ranks[rankCounter]} class="form-control" id="${myPeerReview.criteria.Content[sc]}" placeholder="Out of ${myPeerReview.ranks[rankCounter]}">
                 </div>`;
    
                    Object.entries(criteriaClass).forEach(([key, value]) => 
                        //console.log(`${key}: ${value}`)
    
                        criteriaClass[key].insertAdjacentHTML('beforeend', html_to_insert)
                        
                    )
                }
                rankCounter = rankCounter + 1;
                
            }



            // for (c in myPeerReview.criteria.Presentation){
            //     //console.log(myPeerReview.criteria.Presentation[c]);

            //     const criteriaClass = document.getElementsByClassName(`Presentation-subcriteria`);

            //     var html_to_insert = `<div class="form-group">
            //     <label for="${myPeerReview.criteria.Presentation[c]}">${myPeerReview.criteria.Presentation[c]}</label>
            //     <input type="number" min = "0" max = "10" class="form-control" id="${myPeerReview.criteria.Presentation[c]}" placeholder="Out of 10">
            //  </div>`;

            //     Object.entries(criteriaClass).forEach(([key, value]) => 
            //         //console.log(`${key}: ${value}`)

            //         criteriaClass[key].insertAdjacentHTML('beforeend', html_to_insert)
                    
            //     )
            // }
    }


    function hideTabs(){
        for (group in myPeerReview.groups){
          var id = myPeerReview.groups[group] + ""
          var link = document.getElementById(id);
          if (group == showing) {
            link.style.display = 'inline'
            //console.log(group)
            //console.log(link)
          }
          else {link.style.display = 'none';}
        }
      }

    const PRContainer = document.getElementById(`PR`);
    const submitButton = document.getElementById("submit");

    // display quiz right away
    buildGroupTabs();
    buildGroupPage();
    GPhelper_Criteria();
    GPhelper_Subcriteria();
    hideTabs();

    $(".tabButton").click(function(){
        showing = this.id;

        hideTabs();

        
      });


  })();
