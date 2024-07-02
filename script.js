document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const eno = document.getElementById('eno').value;
    const ename = document.getElementById('ename').value;
    const esal = document.getElementById('esal').value;
    const eaddr = document.getElementById('eaddr').value;
    const married = document.getElementById('married').value;
    
    let resultHTML = `
        <p>Employee No: ${eno}</p>
        <p>Employee Name: ${ename}</p>
        <p>Employee Salary: ${esal}</p>
        <p>Employee Address: ${eaddr}</p>
        <p>Employee Married?: ${married}</p>
    `;
    
    document.getElementById('result').innerHTML = resultHTML;
});
