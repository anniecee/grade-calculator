var grade_table = document.getElementById("grade_table");
var wght = document.getElementsByClassName('weight');

function addRow() {
    var new_row = grade_table.insertRow(grade_table.rows.length);

    var c1 = new_row.insertCell(0);
    var c2 = new_row.insertCell(1);
    var c3 = new_row.insertCell(2);
    var c4 = new_row.insertCell(3);
    var c5 = new_row.insertCell(4);

    activity_num = grade_table.rows.length - 1;
    c1.innerHTML = "Activity " + activity_num;
    c2.innerHTML = "A" + activity_num;
    c3.innerHTML = '<input type="text" class="weight">';
    c4.innerHTML = '<input type="text" onkeyup="numerator(this)">/<input type="text" onkeyup="denominator(this)">';
    c5.innerHTML = '<td></td>';
}

function numerator(n) {
    var denom = n.parentElement.children[1].value;
    n.parentElement.parentElement.children[4].innerHTML = ((n.value /denom)*100).toFixed(2) + "%";
}

function denominator(d) {
    var numer = d.parentElement.children[0].value;
    d.parentElement.parentElement.children[4].innerHTML = ((numer /d.value)*100).toFixed(2) + "%";
}

function calculateMean(){
    var total = 0;
    for (let i = 1; i < grade_table.rows.length; i++) {
        let pct_result = parseInt(grade_table.rows[i].cells[4].innerHTML);
        total += pct_result;
    }
    document.getElementById("mean_result").innerHTML = "Mean: " + (total / (grade_table.rows.length - 1))+ "/100";
}

function calculateWeighted() {
    var total_weight = 0;
    var sum_of_product = 0;
    for (let i = 1; i < grade_table.rows.length; i++) {
        let pct_result = parseInt(grade_table.rows[i].cells[4].innerHTML);
        let weight = parseInt(wght[i-1].value);

        sum_of_product += pct_result*weight;
        total_weight += weight;
    }
    document.getElementById("weighted_result").innerHTML = "Weighted: " + (sum_of_product/total_weight) + "/100";
}