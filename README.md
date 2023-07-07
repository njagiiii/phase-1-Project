# Grocy Store
This is a web application for a fruit store. The application allows users to view available fruits, add fruits to their cart, and purchase fruits. The application also has an admin section that allows an administrator to add new fruits to the store.

## Setup

Run this command to get the backend started:

```console
$ json-server --watch db.json
```

Test your server by visiting this route in the browser:

[https://code-33jd.onrender.com/products]

Then, open the `index.html` file on your browser to run the application.

Write your code in the `src/index.js` file. The base URL for your API will be
[https://code-33jd.onrender.com/products].

## Core Deliverables

 A user, can:

1. View fruits: The user can view all the available fruits on the website.

2. Add fruits to cart: The user can add fruits to their cart by clicking the "Add to cart" button on each fruit card. They can also select the quantity they want to purchase.

3. Purchase fruits: The user can purchase the fruits in their cart by clicking the "Buy" button. This will deduct the purchased   quantity from the available quantity in the store.

   ```txt
   GET /products/1
   Example Response:
   {
    "id": 1,
    "name": "Apple",
    "image": "https://img.freepik.com/premium-photo/red-apples-isolated-white-background-ripe-fresh-apples-clipping-path-apple-with-leaf_299651-595.jpg",
    "discount": "-30%",
    "quantity": "kg",
    "price": "$10"
  },
   ```

4. An Admin can:
 Add fruits to the store: The admin can add new fruits to the store by filling out a form in the admin section. The form requires the admin to enter the fruit name,image link, and price,quantity.

   ```txt
   Post /products
   Example response:
   [
      {
    "id": 1,
    "name": "Apple",
    "image": "https://img.freepik.com/premium-photo/red-apples-isolated-white-background-ripe-fresh-apples-clipping-path-apple-with-leaf_299651-595.jpg",
    "discount": "-30%",
    "quantity": "kg",
    "price": "$10"
  },
  {
    "id": 2,
    "name": "Banana",
    "image": "https://metrob2b-storage.azureedge.net/products/192242/primary.jpg",
    "discount": "-33%",
    "quantity": "kg",
    "price": "$10"
  },
   ]
   ```



### Technologies Used

     Technologies Used HTML CSS JavaScript JSON Fetch API 

## Credits

    This application was developed by Grace Makena Njagi. If you have any questions or suggestions, please contact me at keshgrace62@gmail.com

## References
   The API used for the project https://code-33jd.onrender.com/products

## Author
    Grace Makena Njagi
## License 
   MIT License

