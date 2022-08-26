console.log('JS OK')

let PCnumber = parseInt( Math.random() * 6 + 1);
console.log(PCnumber)
document.getElementById('PC').innerHTML = PCnumber + 'PC';

let Usernumber = parseInt(Math.random() * 6 + 1);
console.log(Usernumber)
document.getElementById('User').innerHTML = Usernumber + 'User'

const container = document.getElementById('container')

const solution = document.createElement('div')
container.append(solution)
let result

if (Usernumber > PCnumber)
{
    result = 'winner User'
    solution.innerHTML = result
}

else if(Usernumber === PCnumber)
{
    result = 'XXX'
    solution.innerHTML = result
}

else
{
    result = 'winner PC'
    solution.innerHTML = result
}

console.log(result)