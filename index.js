
document.addEventListener('DOMContentLoaded', () => {

  
       
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
          //  add smooth scrolling to each navbar link
           document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click',(e) => {
              e.preventDefault();
              const targetid = link.getAttribute('href');
              const targetSection = document.querySelector(targetid)

              if(targetSection){
                targetSection.scrollIntoView({behavior:'smooth'});
              }
            });
           });

          
     //get form 
      let formss = document.getElementById('formss')
      formss.addEventListener('submit',(e) =>{
        e.preventDefault();

        let name = document.getElementById('name').value
        let price = document.getElementById('price').value
        let image = document.getElementById('image').value
        let number = document.getElementById('idnumber').value

        //fetch post request
        fetch('https://code-33jd.onrender.com/products',{
          method:'POST',
          body:JSON.stringify({
            name:name,
            price:price,
            image : image,
            id: number
          }),
          headers:{
            "content-type":"application/json; charset=UTF-8"
          }
        })
        .then(function(res){
          return res.json()
        })
        .then(function(data){
          console.log(data)
        })
      })

       
    });

    