
## Page 1

1. Search form (mandatory fields)
    * Brand
    * ![SearchBrand1](https://user-images.githubusercontent.com/61400480/135600474-19220d3c-69c1-417b-b7f0-fec1a2268c7c.JPG)
    * ![SearchBrand2](https://user-images.githubusercontent.com/61400480/135600838-31c1c048-f255-4f15-8fde-9f21084e4e31.JPG)
    * ![SearchBrand3](https://user-images.githubusercontent.com/61400480/135600853-8ac295bb-2ae5-47ca-93a8-00468cd9cdc4.JPG)
![HGC-2](https://user-images.githubusercontent.com/61400480/135970494-bb665f98-1a52-4b5c-8d26-dcad5a7f0f58.JPG)

    * Product Name
    * ![SearchProduct1](https://user-images.githubusercontent.com/61400480/135600898-70e75798-3321-4bdd-b3d2-65bcbb9b6e8c.JPG)
    * ![SearchProduct2](https://user-images.githubusercontent.com/61400480/135600913-a8c914d3-4cbf-4c5f-8736-d0cf27071516.JPG)
    * ![SearchProduct3](https://user-images.githubusercontent.com/61400480/135600939-74142141-e4e9-4a8a-bf8d-9b3375d02e6a.JPG)

2. List of Groceries
    * Create a screen that display a list of 20 products by default, with the Product Name arranged in alphabetical order
    *  * Each product in the grocery list should display the following:
        * UPC12 Barcode
        * Brand
        * Product Name
        * Edit button (that will lead to Page 2)
    * Options to sort grocery list by Brand or Product Name from A-Z 
    * ![Ascending1](https://user-images.githubusercontent.com/61400480/135601215-435e76ae-6658-4db4-a8b0-b644887b4202.JPG)
    * ![Ascending2](https://user-images.githubusercontent.com/61400480/135601142-ce887d50-cf79-46ee-8fa4-75adca6b2f54.JPG)
    * ![Ascending3](https://user-images.githubusercontent.com/61400480/135601236-04efaaf7-47bf-4cb9-b807-5704bf236b60.JPG)
    
    * Options to sort grocery list by Brand or Product Name from Z-A
    * ![Descending1](https://user-images.githubusercontent.com/61400480/135601332-b109e63c-a7ee-4649-b8d6-808d6b00093f.JPG)
    * ![Descending2](https://user-images.githubusercontent.com/61400480/135601349-324cb7b9-801e-40d1-9717-da589a7f7a32.JPG)
    * ![Descending3](https://user-images.githubusercontent.com/61400480/135601362-a9c070a2-0570-47cb-8a38-3dbb5288e028.JPG)

## Page 2

1. Edit product form (mandatory fields)
    * Brand (varchar)
    * Product Name (varchar)
    * UPC12 Number (bigint)
    * Save button (saves changes made before returning to the Grocery List)
    * Cancel button (brings you back to the Grocery List without saving)
    * Prevent saving of empty Brand and Product Name fields
    * Warn if invalid characters are entered into the fields (e.g. UPC12 field should accept only integers)
    * ![Edit1](https://user-images.githubusercontent.com/61400480/135601473-ca20d75e-adca-4159-ba2c-45bcd5aef5b0.JPG)
    * ![ErrorMessage1](https://user-images.githubusercontent.com/61400480/135601505-984bf3eb-0fe3-4688-aabf-e753ebdf1f26.JPG)
    * ![ErrorMessage2](https://user-images.githubusercontent.com/61400480/135601523-50f2a4e3-c8d0-45a8-806d-35359cf4f331.JPG)
    * ![ErrorMessage3](https://user-images.githubusercontent.com/61400480/135601544-11e0a609-d137-4ad1-a138-9cab04c0bcff.JPG)

2. Editing a product
    * Pre-populate the form with the product’s info (i.e. if you entered this page by clicking on the Edit button of Product A, the form should display the Brand, Product Name, and UPC12 Number of Product A)
    * Saving should be done by the POST or PUT method only
    * Grocery List should also reflect the changes made to the product
