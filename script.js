const students = [
  {
    name: "Luiz",
    nota1: 10,
    nota2: 6,
  },
  {
    name: "Bia",
    nota1: 3,
    nota2: 6,
  },
  {
    name: "Ana",
    nota1: 7,
    nota2: 8,
  },
  {
    name: "Bruno",
    nota1: 9,
    nota2: 5,
  },
  {
    name: "Clara",
    nota1: 4,
    nota2: 10,
  },
  {
    name: "Daniel",
    nota1: 2,
    nota2: 3,
  },
];

function average(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

function printStudentAvg(student) {
  if (average(student.nota1, student.nota2) > 7) {
    return `
    A média do aluno(a) ${student.name} é : ${average(
      student.nota1,
      student.nota2
    )}
    \nParabéns ${student.name}!! Você foi aprovado(a).
    `;
  } else {
    return `
    A média do aluno(a) ${student.name} é: ${average(
      student.nota1,
      student.nota2
    )}
    \nNão foi dessa vez ${student.name}. Tente novamente.
    `;
  }
}

for (let student of students) {
  let avgMessage = printStudentAvg(student);
  alert(avgMessage);
}
