function myFunction(a, b){
    {
        let obj = new Object()
        for(let i=0; i<a.length; i++){
            obj[a[i]] = b[i];
        }

        return obj;        
    }
  }

console.log(myFunction(['a','b','c'],[1,2,3]))
console.log(myFunction(['a','b','c'],[1,() => {}, {name: 'khriztian'}]))
console.log(myFunction(['name','hobbies','isAdmin'],['khriztian',['music', 'tv series'], false]))
