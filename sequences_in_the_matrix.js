function hasMatrixSequence(){
    var N = prompt("Enter the N values ​​in the N × N matrix such that N is greater than or equal to 4 and less than or equal to 10.","")
    
    var matrix = new Array(new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array());
    if (4 <=N <= 10){

        for (let i=0; i < N; i++) {
            for (let j=0; j < N; j++) {

                let k = prompt("Enter the value that should be instead of the element ["+i+"] ["+j+"] in the matrix " + N + " by " + N + " such that is greater than 0 and less than 10.","");
                matrix[i][j] = k;
                if(k<0 || k>10){
                    alert("The element ["+i+"] ["+j+"] entered is incorrect. Try again.");
                    j-=1;
                }
                    //document.write(matrix[i][j] + "   ");
            }
            //document.write("<br>");	
        }
    var x = 0;
    for (i=0; i < N; i++) {
        for (j=0; j < matrix[i].length; j++) {
            if((matrix[i][j]===matrix[i+1][j] && matrix[i][j]===matrix[i+2][j] && matrix[i][j]===matrix[i+3][j])
            || (matrix[i][j]===matrix[i][j+1] && matrix[i][j]===matrix[i][j+2] && matrix[i][j]===matrix[i][j+3])
            || (matrix[i][j]===matrix[i+1][j+1] && matrix[i][j]===matrix[i+2][j+2] && matrix[i][j]===matrix[i+3][j+3])) x +=1;
          }
    }
    document.write( x != 0 );
    }
}
console.log(hasMatrixSequence());