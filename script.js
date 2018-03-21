var yrs = [1990,1992,1994,2001,2003];
var ages = [];

for(var i = 0; i < yrs.length; i++){
  ages[i] = 2018 - yrs[i];
}

for(var i = 0; i < yrs.length; i++){
  if(ages[i]>17) console.log("person is more than 17 years of age");
  else console.log("person is lessthan 18 years of age");
}
