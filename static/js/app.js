// from data.js
var tableData = data;
var tbody = d3.select('tbody');
var button = d3.select('button');
var inputs = d3.selectAll('input');

populateTable(tableData);
inputs.on('change',handleChange);
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
    inputs.property('value','');
    tableData = data;    
    populateTable(tableData);
};

function handleChange() {
    var key = d3.select(this).property('id');
    var value = d3.select(this).property('value');

    tableData = tableData.filter(obj => obj[key] == value);
    populateTable(tableData);
};

