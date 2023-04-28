# ProductsPagination-Cache-API

This project implements an API endpoint for retrieving a list of products with pagination and caching using Node.js, PostgreSQL, and Redis. It allows you to efficiently fetch product data, reducing the load on the database by utilizing Redis as a caching layer.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/mosta1489/ProductsPagination-Cache-API.git
```

2. **Make the .sh file executable**:

```bash
chmod +x start.sh
```

3. **Run the .sh file**:

```bash
./start.sh
```

## API Documentation

### Get Products

Retrieves a list of products with pagination.

- **URL**: `/products`
- **Method**: GET

#### Query Parameters

- `page` : The current page of results to return.
- `limit` : The maximum number of results to return per page.

#### Response

- `data` (array): An array of product objects for the current page.
- `currentPage`: The current page of results.
- `totalPages`: The total number of pages of results.

#### Examples

- Get the first page of products:
  - `GET /products?page=1&limit=10`

## Deployment

- **AZURE** VM was utilized for the deployment process
- **Docker** was used to containerize the services

## Access the products API:

#### [http://172.190.14.21:3000/products?page=3&limit=10](http://172.190.14.21:3000/products?page=5&limit=10)

## Technologies

- PostgreSQL
- Redis
- Docker
- Node.js
- Express
