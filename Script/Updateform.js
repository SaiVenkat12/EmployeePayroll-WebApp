    $(document).ready(function () {
         getdata()
    })
    const Empid=localStorage.getItem("empid");
    console.log(Empid);
    
    function getdata(){
        console.log("hello");
        
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/employees/" +Empid ,
            contentType: "application/json",
            success: function (data) {
                console.log(data);
                $('#Name').val(data.Name);
                $('#salary').val(data.Salary);
                $('#notes').val(data.Notes);
                $('input[name="profile"][value="' + data.Profile + '"]').prop('checked', true);
                $('input[name="gender"][value="' + data.Gender + '"]').prop('checked', true);
                $('input[type="checkbox"]').each(function () {
                    let deptValue = $(this).val();
                    $(this).prop("checked", data.Department.includes(deptValue));
                })
                let startdate = (data.Startdate).split(" ");
                $('#day').val(startdate[0]);
                $('#month').val(startdate[1]);
                $('#year').val(startdate[2]);
                
            },
            error: function(){
                console.log("Error!!");
            }
        })
    }

const updateForm=()=>{
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
        type: 'PUT',
        url: 'http://localhost:3000/employees/' + Empid,
        contentType: "application/json",
        data: JSON.stringify(reqData),
        success: function (data) {
            console.log(data);
            
        },
        error: function () {
            console.log('Error in Operation');
        }
    });
}