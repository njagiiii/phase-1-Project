
document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('addforms').addEventListener('submit', (e) => {
    e.preventDefault();
      if(e.submitter.value === 'submit'){
          //handle submit
          const productsObj = {
            name: e.target.name.value,
            price: e.target.price.value,
            image : e.target.image_url.value
          };
          postproducts(null,productsObj)
          alert('product added successfully')
      }
        else if(e.submitter.value === 'update'){
          //handle update
          const patchObj = {
            name: e.target.name.value,
            price: e.target.price.value,
            image : e.target.image_url.value
          };
          const productid = document.getElementById('id').value //get the element id
          patchProducts(productid, patchObj);
          alert('product updated successfully')
        }
    
    
     //reset form after submission
     e.target.reset();
    });
       
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

       // fetch the products
       
       fetch('https://code-33jd.onrender.com/products')
       .then(res => {
         if(!res.ok){
            throw Error('failed')
         }
         return res.json()
       })
       .then(data => {
        const productcontent = document.getElementById('productcontent')

          data.forEach(product => {
            const card = document.createElement('div')
            card.classList.add('card')

            const image = document.createElement('img')
            image.src = product.image
            image.classList.add('images')
            card.appendChild(image)

            const name = document.createElement('p')
            name.innerText = product.name
            name.classList.add('names')
            card.appendChild(name)

            const price =document.createElement('p')
            price.innerText = `price: ${product.price}`;
            price.classList.add('price')
            card.append(price)

            const button = document.createElement('button')
            button.classList.add('btns')
            button.innerText ='Add To Cart'
            card.appendChild(button)

            button.addEventListener('click', () => {
              showModal(product,card)
            })

           

            productcontent.appendChild(card)
          })
       })
       .catch(error => console.log(error));

       function showModal(product,card){
        const modal = document.getElementById('modal')
        const closeBtn = document.getElementsByClassName('close')[0];
        const addToCartBtn = document.getElementById('addTocart');
        const quantityInput = document.getElementById('quantity');
        const totalAmount = document.getElementById('totalamount');
        const deleteBtn = document.getElementById('deletebtn')
  
        modal.style.display='block'

        //close the modal when button is clickes
        closeBtn.addEventListener('click', () => {
          modal.style.display='none'
        });

        //delete the card image
        deleteBtn.addEventListener('click',()=>{
          fetch(`https://code-33jd.onrender.com/products/${product.id}`,{
            method:'DELETE'
          })
          .then(res => {
            if(!res.ok){
              throw Error('Failed')
            }else{
              card.remove();
              modal.style.display = 'none'
              alert('product has been deleted successfully')
            }
          })
          .catch(error => console.log(error))

        });
         

        addToCartBtn.addEventListener('click',() => {
          const quantity = parseInt(quantityInput.value);
           const amount = quantity * product.price;
          totalAmount.innerText = `Total Amount:$${amount.toFixed(2)}`;
        });

        
        
       }

       //toogle the read more visibility by using event delegation in categories
       const category = document.getElementById('categorycontainer')
       const showing=[
          document.getElementById('show1'),
          document.getElementById('show2'),
          document.getElementById('show3')
       ];
        
       let isShowVisible = false
        category.addEventListener('click' ,(e) => {
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
          //make the review section swipe
           let swiper =new Swiper ('.review-slider',{
            loop:true,
            spaceBetween :20,
            autoplay:{
              delay:7500,
              disableOnInteraction:false,
            },
            centeredSlides : true,
            breakpoints:{
              0:{
                slidesPerView:1
              },
              768:{
                slidesPerView :2
              },
              1020:{
                slidesPerView:3
              },
            },
           })

          
     // add post,patch and delete to the form
       
     function postproducts(productid,productsObj){
      fetch('https://code-33jd.onrender.com/products' ,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(productsObj)
      })
      .then(res => res.json())
      .then(datas => console.log(datas))
      .catch(error => console.log(error))
    }

    function patchProducts(productid, patchObj){
      fetch(`https://code-33jd.onrender.com/products/${productid}` ,{
        method:'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(patchObj)
      })
      .then(res => res.json())
      .then(datas => console.log(datas))
      .catch(error => console.log(error))
    }
    });

    