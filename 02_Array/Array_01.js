let student = [
    {id:101 , name:"Swapnil" ,last:"sharma" ,marks:500, isgotoclass:true},
    {id:102 , name:"Vishal" ,last:"sharma" ,marks:250, isgotoclass:false},
    {id:103 , name:"Rishabh" ,last:"sharma" ,marks:300, isgotoclass:true},
    {id:104 , name:"Shubhma" ,last:"sharma" ,marks:550, isgotoclass:false},
]

let maxMarks = student.reduce((accumlator , values) => {
    return accumlator.marks > values.marks ? accumlator : values
})
// console.log(maxMarks);

let gotoclass = student.filter(studnt => {
    return studnt.isgotoclass == true
})
// console.log(gotoclass);

let name_sharma = student.filter(users => {
    return users.last
})

