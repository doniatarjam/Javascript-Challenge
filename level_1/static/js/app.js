// from data.js
var tableData = data;
var tbody = d3.select('tbody');
var button = d3.select('button');

populateTable(tableData);
button.on('click',handleClick);

function populateTable(data) {
    tbody.html('');
    data.forEach(obj => {
        var row = tbody.append('tr');

        Object.values(obj).forEach(val => {
            var cell = row.append('td');
            cell.text(val);
        });
    });
};

function handleClick() {
    var date = d3.select('input').property('value');
    var filteredData = data;
    
    if(date){
        var filteredData = data.filter(obj => obj.datetime == date);
        d3.select('input').property('value','');
    };

    populateTable(filteredData);
};