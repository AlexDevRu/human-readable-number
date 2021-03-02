module.exports = function toReadable (number) {
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let numbers2 = [,,'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let numbers3 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
  'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  //let str = number.toString().split('').reverse().join('');
  //let count = numberStr.length;
  if(!Math.floor(number/10)) {
  	return numbers[number];
  }

  let n1 = number%10;
  let n2 = Math.floor(number%100/10);
  let n3 = Math.floor(number/100);
  let read = '';
  if(n2 == 1) {
  	read = numbers3[n1];
  }
  else if(n2 == 0) {
	if(n1 != 0) read = numbers[n1];
  }
  else {
    read = numbers2[n2];
	if(n1 != 0) read += ' ' + numbers[n1];
  }

  if(n3 != 0) {
  	if(read) read = numbers[n3] + ' hundred ' + read;
  	else read = numbers[n3] + ' hundred' + read;
  }

  return read;
}
