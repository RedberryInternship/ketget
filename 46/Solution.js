let input = '';

const solve = () => {
    let n = +input
    let answer = "YES"
    if(n==1 || n==0){
         answer = "NO" }
    for (let i = 2; i<n-1; i++){
        if(n%i==0){
            answer= "NO"
        }
    }
    console.log(answer)
}

process.stdin.on('data', (c) => input += c);
process.stdin.on('end', solve);