console.log("<<==Connected==>>")
const submitForm=()=>{
    const name=$('#Name').val()
    const profile=$('input[name="profile"]:checked').val()
    const gender=$('input[name="gender"]:checked').val()
    const dept=$('input[name="dept"]:checked').val()
    const salary=$('#salary').val()
    const date=$('input[name="startdate"]:checked').val()
    const note=$('#notes').val()

    let reqData={
        "Name":name,
        "Profile":profile,
        "Gender":gender,
        "Department":dept,
        "Salary":salary,
        "Startdate":date,
        "Notes":note,
    }
    $.ajax({
        type:'POST',
        url:"http://localhost:3000/employees",
        datatype:'application/json',
        data:reqData,
        success:function(){
            alert("employee data added Successfully");
        },
        error: function (error) {
            console.log(error);
        }
    })
    console.log(reqData);
}