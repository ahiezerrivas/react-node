let uniStudent = student => {
  let {name, university} = student;
  console.log(`${student.name} from ${student.university}`)
}

uniStudent({
  name: 'Ryan',
  university: 'University of Sidney'
});