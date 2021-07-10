const arr = [1, 2, 3, -1, -2, -3];

function func (arg){
    const exampleArr = [];

    if(!arg.length) return 'Some error';

    for (let i = 0; i < arg.length -1 ; i++) {
        if(arg[i] >= 0) exampleArr.push(arg[i])
    }

    return exampleArr.length ? exampleArr : null;
}

console.log(func(arr));