

document.querySelector('button').addEventListener('click', (e) =>{
    e.preventDefault();
   const color = document.getElementById('color-picker').value.slice(1,7)
const type = document.getElementById('picktype').value
console.log(color);
document.querySelector('#show-colors').innerText = ""
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${type}&count=5`)
.then(response => response.json())
.then(data => {
    console.log(data)
    data.colors.map(datas =>{
       const container = document.createElement('div');
       container.setAttribute('class', 'colors-container')
         const image = document.createElement('img')
         const hex = document.createElement('h5')
         hex.setAttribute('class', 'hex');
         hex.innerText =datas.hex.value
         image.setAttribute('src', datas.image.bare)
         container.appendChild(image)
         container.appendChild(hex)
         document.querySelector('#show-colors').appendChild(container)
         
    })
})
})

document.body.addEventListener('click', (e) => {
   
   if(e.target.classList.contains('hex')){
    copyText(e.target)
   }
})


function copyText(element) {
   
      let Text = element.innerText;
      let input = document.createElement("input");
      input.setAttribute("value", Text);
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.parentNode.removeChild(input);

      element.style.color = 'red';
      
      setTimeout(() => {
        element.style.color = 'rgb(114, 114, 114)';
      }
      ,1000)
  }