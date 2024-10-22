const studentForm = document.getElementById('student-form');
const studentList = document.getElementById('student-list');
let students = [];

studentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const studentName = document.getElementById('student-name').value;

    // Adiciona novo aluno
    if (!students.includes(studentName)) {
        students.push(studentName);
        renderStudents();
        studentForm.reset();
    } else {
        alert("Aluno já cadastrado!");
    }
});

function renderStudents() {
    studentList.innerHTML = '';
    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" id="student-${index}">
            <span>${student}</span>
            <button class="edit" onclick="editStudent(${index})">Editar</button>
            <button onclick="deleteStudent(${index})">Deletar</button>
        `;
        studentList.appendChild(li);
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderStudents();
}

function editStudent(index) {
    const newName = prompt("Novo nome do aluno:", students[index]);
    if (newName && !students.includes(newName)) {
        students[index] = newName;
        renderStudents();
    } else if (students.includes(newName)) {
        alert("Aluno já cadastrado!");
    }
}

fetch('http://127.0.0.1:5500/index.html')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Erro:', error));
