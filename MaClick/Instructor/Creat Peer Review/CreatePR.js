
var lim = 20; // Max questions
var count = 0; // There are 4 questions already

function addGroup()
{
        if (count < lim)
        {
            //GENERATE TEXT FOR
            var p1 = document.createElement('p');
            p1.innerHTML = 'Group ' + (count + 1) + ' name';
           // var p2 = document.createElement('P');
           // p2.innerHTML = 'Group ' + (counter +1) + ' size'
            
            //GENERATE NEW INPUT FORM
            var groupName = document.createElement('input');
            groupName.type = 'text';
            groupName.name = 'groupName';
            
            var groupSize = document.createElement('input');
            groupSize.type = 'number';
            groupSize.name = 'groupSizez';

            if (groupName && p1 && groupSize)   
            {
                quiz.appendChild(p1);
                //quiz.appendChild(p2);
                quiz.appendChild(groupName);
                quiz.appendChild(groupSize);
                count++;
            }
        }
        else   
        {
            alert('Group Limit Reached');
        }
    }
