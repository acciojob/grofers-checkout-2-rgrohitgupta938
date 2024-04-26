const priceArray=document.querySelectorAll('[data-ns-test="price"]');
let table=document.getElementById("table1");
let ans=0;
for (let i = 0; i < priceArray.length; i++) {
	ans+=parseInt(priceArray[i].innerText);
}
let total=document.createElement("tr");
 
total.setAttribute("data-ns-test", "grandTotal");
 
total.innerText=ans;
 
table.appendChild(total);