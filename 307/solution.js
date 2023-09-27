let input = '';

const solve = () => {
    let n = input.trim()
    let firstdigit = Number(n[0])
    let lastdigit = Number(n[n.length-1])
    console.log(firstdigit + lastdigit)
}

process.stdin.on('data', (c) => input += c);
process.stdin.on('end', solve);