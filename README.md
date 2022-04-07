# B2B Backend (Object-Relational Mapping (ORM): E-Commerce Back End)

## Overview

This application is built with the back end for an e-commerce site and configured with a working Express.js API to use Sequelize to interact with a MySQL database.

## Begin

This application begins with the MySQL2 and Sequelize packages to connect the Express.js API to a MySQL database and the dotenv package to use environment variables to store sensitive data.
It uses the schema.sql file in the db folder to create the database with MySQL shell commands. This also uses environment variables to store sensitive data like the user's MySQL username, password, and database name.

### Database Models

The database contains the following four models, including the requirements listed for each model:

- `Category`
  - `id`
    - Integer
    - Doesn't allow null values
    - Set as primary key
    - Uses auto increment
  - `category_name`
    - String.
    - Doesn't allow null values.
- `Product`
  - `id`
    - Integer.
    - Doesn't allow null values.
    - Set as primary key.
    - Uses auto increment.
  - `product_name`
    - String.
    - Doesn't allow null values.
  - `price`
    - Decimal.
    - Doesn't allow null values.
    - Validates that the value is a decimal.
  - `stock`
    - Integer.
    - Doesn't allow null values.
    - Set a default value of `10`.
    - Validates that the value is numeric.
  - `category_id`
    - Integer.
    - References the `Category` model's `id`
- `Tag`
  - `id`
    - Integer.
    - Doesn't allow null values.
    - Set as primary key.
    - Uses auto increment
  - `tag_name`
    - String.
- `ProductTag`
  - `id`
    - Integer.
    - Doesn't allow null values.
    - Set as primary key.
    - Uses auto increment.
  - `product_id`
    - Integer.
    - References the `Product` model's `id`.
  - `tag_id`
    - Integer.
    - References the `Tag` model's `id`.

### Associations

It executes association methods on the Sequelize models to create the following relationships between them:

- `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.
- `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

### Fill Out the API Routes to Perform RESTful CRUD Operations

It fills out the unfinished routes in `product-routes.js`, `tag-routes.js`, and `category-routes.js` to perform create, read, update, and delete operations using the Sequelize models.

### Seed the Database

After creating the models and routes, run `npm run seed` to seed data to the database to test the routes.

### Sync Sequelize to the Database on Server Start

It creates the code needed in `server.js` to sync the Sequelize models to the MySQL database on server start.

## Screenshot(s) & Demo

<iframe src="https://drive.google.com/file/d/1-RQeGibFxXyvbuK5xw7assvt-nuQ1Fv9/preview" width="640" height="480"></iframe>
<img width="1172" alt="Screen Shot 2022-04-06 at 11 56 22 PM" src="https://user-images.githubusercontent.com/99617307/162138927-c3027c5c-37f9-46a5-8fee-79cd017655ef.png">
<img width="1172" alt="Screen Shot 2022-04-06 at 11 56 55 PM" src="https://user-images.githubusercontent.com/99617307/162138950-659ed4b5-1053-418f-bdee-21cb2a579e5d.png">
<img width="1172" alt="Screen Shot 2022-04-06 at 11 57 12 PM" src="https://user-images.githubusercontent.com/99617307/162138977-1961eff7-5bb3-49b5-9056-fc69a04dc783.png">
<img width="1172" alt="Screen Shot 2022-04-06 at 11 57 26 PM" src="https://user-images.githubusercontent.com/99617307/162139080-1dc93bff-8756-410f-85ab-ada0e769d7d9.png">

## Links

- https://b2b-back-end.herokuapp.com/
- https://github.com/zionremnant/b2b-backend
- https://drive.google.com/file/d/1-RQeGibFxXyvbuK5xw7assvt-nuQ1Fv9/view
