// const container=document.querySelector(".container");
const clickButton=document.querySelector("#submit")
const receiveInput=document.querySelector(".input")
const arr= [
    {
      name: "Merrill Turner",
      phone: "1-281-761-1427",
      region: "Valle del Cauca",
      numberrange: "3",
      country: "South Korea",
    },
    {
      name: "Flynn Wooten",
      phone: "1-417-576-1759",
      region: "Junín",
      numberrange: "6",
      country: "Costa Rica",
    },
    {
      name: "Lara Middleton",
      phone: "1-338-468-3748",
      region: "Yaroslavl Oblast",
      numberrange: "2",
      country: "Ukraine",
    },
    {
      name: "Maxwell Mosley",
      phone: "1-338-810-1737",
      region: "Himachal Pradesh",
      numberrange: "7",
      country: "South Korea",
    },
    {
      name: "Thane Moreno",
      phone: "1-373-223-3065",
      region: "Guainía",
      numberrange: "0",
      country: "Ukraine",
    },
  ];
  const inputValue=receiveInput.value;
 
 const submitHandler=()=>{
  arr.forEach(item => item.phone = item.phone.replace(/-/g, inputValue))
// const result1=arr.filter(item=> console.log(item.phone.split("-").join(inputValue)));
console.log(arr);
};
clickButton.addEventListener("click" , submitHandler)
