    async function callapi(){
        const url=await fetch('https://jsonplaceholder.typicode.com/users');
        
        const result = await url.json();
        console.log(result);
        document.getElementById('userdata').innerHTML=result.map((user)=>
            `
            <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.username}</td>
            <td>${user.website}</td>
            <td>${user.phone}</td>
            </tr>
            `
        ).join("");
    }



 callapi()