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
    name: "John Dias",
    nota1: 0,
    nota2: 1.3,
  },
];

function average(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

function printStudentAvg(student) {
  if (average(student.nota1, student.nota2) > 5) {
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
