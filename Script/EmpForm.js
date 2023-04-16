console.log("<<==Connected==>>")

const submitForm = () => {
    const name = $('#Name').val()
    const profile = $('input[name="profile"]:checked').val()
    const gender = $('input[name="gender"]:checked').val()

    let deptArr=new Array();
    (function(){
        $('input[type="checkbox"]:checked').each(function(){
            deptArr.push($(this).val());
        })
    })();
     const dept = deptArr.toString();
    
    const salary = $('#salary').val()
    const day = $('#day').val();
    const month = $('#month').val();
    const year = $('#year').val();
    const note = $('#notes').val()
    const date = day + ' ' + month + ' ' + year;

    let reqData = {
        "Name": name,
        "Profile": profile,
        "Gender": gender,
        "Department": deptArr,
        "Salary": salary,
        "Startdate": date,
        "Notes": note,
    }
    $.ajax({
        type: 'POST',
        url: "http://localhost:3000/employees",
        contentType: 'application/json',
        data: JSON.stringify(reqData),
        success: function () {
            alert("employee data added Successfully");
        },
        error: function (error) {
            console.log(error);
        }
    })
    console.log(reqData);
}