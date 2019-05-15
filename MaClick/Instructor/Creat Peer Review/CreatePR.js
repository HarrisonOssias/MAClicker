
var lim = 30; // Max groups
var count = 0;

function addGroup() {
    if (count < lim) {
        /*//GENERATE TEXT FOR
        var p1 = document.createElement('p');
        p1.innerHTML = 'Group ' + (count + 1) + ' Name' + ' Size';

        // var p2 = document.createElement('P');

        var spacing = document.createElement('br');
        var spacing = document.createElement('br');

        //GENERATE NEW INPUT FORM
        var groupName = document.createElement('input');
        groupName.type = 'text';
        groupName.name = 'groupName';

        var groupSize = document.createElement('input');
        groupSize.type = 'number';
        groupSize.name = 'groupSize';

        if (groupName && p1 && groupSize) {
            groups.appendChild(spacing);
            groups.appendChild(p1);
            groups.appendChild(groupName);
            groups.appendChild(groupSize);
            count++;
        }*/
        var html = '<h4> yes man</h4>';
        addElement(html);
    }
    else {
        alert('Group Limit Reached');
    }
}
function takeGroup(eid) {
    var element = document.getElementById(eid);
    element.parentNode.removeChild(eid);

}ß