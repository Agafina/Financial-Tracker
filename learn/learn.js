// const Students = [
//     // {name: 'Agafina', age: 23, matricule:'FE21A110', sex:'male'},
//     // {name: 'Jospen', age: 20, matricule:'FE21A124', sex:'male'},
//     // {name: 'Jerry', age: 22, matricule:'FE21A180', sex:'male'},
//     // {name: 'Favour', age: 18, matricule:'FE21A140', sex:'female'},
//     // {name: 'Brinda', age: 20, matricule:'FE21A190', sex:'female'},
//     // {name: 'Grace', age: 25, matricule:'FE21A200', sex:'female'},
// ];

// const getYearOfBirth = (age) =>{
//     let year = new Date().getFullYear();
//     let yearOfBirth = year - age
//     return yearOfBirth;
// }

// Students.forEach(student => {
//     let Matricule = student.matricule.substr(5,7);
//     let MatriculeInt = parseInt(Matricule);
    
//     if(MatriculeInt >= 150){
//         console.log(student)
//     }
// })

// Students.forEach(student => {
//     if(student.sex === 'female' && student.age >= 20){
//         console.log(student)
//     }
// })
// getYearOfBirth(30);

// Students.forEach(student => {
//     getYearOfBirth(student.age)
// })
// Students.push({name: 'paul', age:20, matricule:'FE21A120', sex:'Male'})
// const displayStudsWithYearOfBirth = (students) =>{
//     return students.map((student) => ({
//         year: getYearOfBirth(student.age),
//         ...student
//     }))
// }

// console.log(displayStudsWithYearOfBirth(Students))

// const form = document.querySelector('#form')

// const studentName = document.querySelector('#name')
// const studentAge = document.querySelector('#age')
// const studentMatricule = document.querySelector('#matricule')
// const studentSex = document.querySelector('#sex')
// const listContainer = document.querySelector('#list-Containers')



// form.addEventListener('submit', (e) =>{
//     e.preventDefault();

//     Students.push({
//        name: studentName.value,
//         age: studentAge.value,
//        matricule: studentMatricule.value,
//         sex: studentSex.value
//     }
//     )
//     console.log(Students)
//     let li = document.createElement('li');
//     li.innerHTML = studentName.value;
//     listContainer.append(li)

// })
// let vowels = ['a','e','i','o','u'];
// const rep = 'a booy';
// let array = rep.split('');
// let count = {};
// array.forEach((chars) => {
//     if(vowels.includes(chars)){
//         count[chars] = (count[chars] || 0) +1;
//     }
// })
// console.log("Vowel Count", count)

let form = document.querySelector('.form')
let correctAnswers = ['A','B','A','B']
let res = document.querySelector('.resultScore')



form.addEventListener('submit', e =>{
    e.preventDefault();
    let score = 0;
    let result = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    result.forEach((answer,index) =>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
    })
    scrollTo(0,0)
   res.classList.remove('d-none')
    let output = 0;
    const timer = setInterval(() =>{
        res.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer)
        }else{
            output++
        }
    },10)
})
