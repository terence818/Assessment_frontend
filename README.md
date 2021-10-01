
## Page 1

1. Search form (mandatory fields)
    * Brand
    * Product Name

2. List of Groceries
    * Create a screen that display a list of 20 products by default, with the Product Name arranged in alphabetical order
    * Options to sort grocery list by Brand or Product Name from A-Z and Z-A
    * Each product in the grocery list should display the following:
        * UPC12 Barcode
        * Brand
        * Product Name
        * Edit button (that will lead to Page 2)
    * Search result should include all possibilities based on keywords found in Brand or Product Name fields
    * You may use GET or POST methods for the search


## Page 2

1. Edit product form (mandatory fields)
    * Brand (varchar)
    * Product Name (varchar)
    * UPC12 Number (bigint)
    * Save button (saves changes made before returning to the Grocery List)
    * Cancel button (brings you back to the Grocery List without saving)
    * Prevent saving of empty Brand and Product Name fields
    * Warn if invalid characters are entered into the fields (e.g. UPC12 field should accept only integers)

2. Editing a product
    * Pre-populate the form with the product’s info (i.e. if you entered this page by clicking on the Edit button of Product A, the form should display the Brand, Product Name, and UPC12 Number of Product A)
    * Saving should be done by the POST or PUT method only
    * Grocery List should also reflect the changes made to the product
