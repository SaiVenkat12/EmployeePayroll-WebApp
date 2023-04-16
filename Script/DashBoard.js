
$(function () {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/employees',
        dataType: 'json',
        success: function (data) {
            var tableBody = $('#display');

            $.each(data, function (index, value) {
                var tablerow = $('<tr>');
                tablerow.append($('<td>').append(
                    $('<img>').attr('src', value.Profile),
                    $('<span>').text(value.Name)
                ));
                
                tablerow.append($('<td>').text(value.Gender));
                tablerow.append($('<td>').text(value.Department));
                tablerow.append($('<td>').text(value.Salary));
                tablerow.append($('<td>').text(value.Startdate));
                var actions = $('<td>');

                actions.append($('<img>').attr('src', '../assets/icons/delete-black-18dp.svg').attr('data-id', value.id).click(function () {
                    var empId = $(this).attr('data-id');
                    deleteEmployee(empId);
                }));

                tablerow.append(actions);

                actions.append($('<img>').attr('src', '../assets/icons/create-black-18dp.svg').attr('data-id', value.id).click(function () {
                    var empId = $(this).attr('data-id');
                    editEmployee(empId);
                }));

                tablerow.append(actions);

                tableBody.append(tablerow);
            });
        },
        error: function (error) {
            console.log("Error!!",error);
        }
    });
});
function deleteEmployee(empId) {
    $.ajax({
        url: 'http://localhost:3000/employees/' + empId,
        type: 'DELETE',
        success: function () {
            $('tr[data-id="' + empId + '"]').remove();
        },
        error: function (error) {
            console.log("Error!!",error);
        }
    });
}
console.log("dndc");