
 const form = document.getElementById('form')
 const searchbtn = document.getElementById('searchbtn')
 const searchinput = document.getElementById('searchinput')

 searchbtn.addEventListener('click',() => {
   
    if(form.style.display === 'none'){
      form.style.display = 'block'; //show form
    }
    else{
      form.style.display = 'none'; // hide form
    }
  
   
 });

   searchinput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
       performtask(searchinput.value)
       form.style.display ='none'

       //clear searchinput
       searchinput.value =''
    }
    
     
 });
 //function that performs input task
  function performtask(query){
    console.log(query)
  }

  //user icon
   const userbtn = document.getElementById('userbtn')
   const forms = document.getElementById('formcontainer')

   forms.addEventListener('keyup',(e) => {
      e.preventDefault()
      console.log(e)
      if(e.target.dataset.uppercase != undefined ){
         e.target.value = e.target.value.toUpperCase();
         
      }
      
   })

   userbtn.addEventListener('click', () => {
     if(forms.style.display === 'none'){
      forms.style.display = 'block'
     } else{
      forms.style.display = 'none'
     }
   })
   // toogles between pasword visibility
       
       document.getElementById('checkbox').addEventListener('click' , () => {
         let x = document.getElementById('password')
          if(x.type === 'password'){
            x.type = 'text'
          }else{
            x.type = 'password'
          }
       })
       
    //toogle the read more visibility by using event delegation in features
      const container = document.getElementById('homecontainer')
      const alerting =[
         document.getElementById('alert1'),
         document.getElementById('alert2'),
         document.getElementById('alert3')
      ];
       
      let isAlertVisible = false
       container.addEventListener('click' ,(e) => {
         if(e.target.classList.contains('buttons')){
             if(isAlertVisible){
               alerting.map(alert => {
                  alert.style.display='none'
               })
               isAlertVisible = false
             } 
             else{
               alerting.map(alert=>{
                  alert.style.display = 'block'
               })
               isAlertVisible = true
             }
         }
       });
       const productcontainer = document.getElementById('productcontainer')
       fetch('https://code-33jd.onrender.com/products')
       .then(res => {
         if(!res.ok){
            throw Error('failed')
         }
         return res.json()
       })
       .then(data => {
        const productcontent = document.getElementById('productcontent')

          data.map(products => {
            const card = document.createElement('div')
            card.classList.add('card')

            const image = document.createElement('img')
            image.src = products.image
            image.classList.add('images')
            card.appendChild(image)

            const name = document.createElement('p')
            name.innerText = products.name
            name.classList.add('names')
            card.appendChild(name)

            const price =document.createElement('p')
            price.innerText = `price: ${products.price}`;
            price.classList.add('price')
            card.append(price)

            const button = document.createElement('button')
            button.classList.add('btns')
            button.innerText ='Add To Cart'
            card.appendChild(button)

            button.addEventListener('click', () => {
              showModal(products)
            })

            productcontent.appendChild(card)
          })
       })
       .catch(error => console.log(error));

       function showModal(products){
        const modal = document.getElementById('modal')
        const closeBtn = document.getElementsByClassName('close')[0];
        const addToCartBtn = document.getElementById('addTocart');
        const quantityInput = document.getElementById('quantity');
        const totalAmount = document.getElementById('totalamount');

        modal.style.display='block'

        //close the modal when button is clickes
        closeBtn.addEventListener('click', () => {
          modal.style.display='none'
        });

        addToCartBtn.addEventListener('click',() => {
          const quantity = parseInt(quantityInput.value);
          const amount = products.price * quantity;
          totalAmount.innerText = `Total Amount:$${amount.toFixed(2)}`;
        });
        
       }
        //toogle the read more visibility by using event delegation in categories
           const categorycontainer = document.getElementById('categorycontainer')
           const showing = [
            document.getElementById('show1'),
            document.getElementById('show2'),
            document.getElementById('show3')
           ];
           let isShowVisible = false

           categorycontainer.addEventListener('click' ,(e) => {
            if(e.target.classList.contains('Buttons')){
                if(isShowVisible){
                  showing.map(show => {
                     show.style.display='none'
                  })
                  isShowVisible = false
                } 
                else{
                  showing.map(show=>{
                     show.style.display = 'block'
                  })
                  isShowVisible = true
                }
            }
          });

      

       
  
     



