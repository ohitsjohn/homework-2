const inputStr = prompt('Please input a count: ')
const inputCount = parseInt(inputStr, 10)
document.write("Starting Loop" + "<br />")
for(let count = 0; count < inputCount; count++) { 
    document.write("Current Count : " + count ) 	
    document.write("<br />"); 
} 
document.write("Loop stopped!")
