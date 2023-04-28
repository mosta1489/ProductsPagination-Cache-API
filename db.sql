-- Active: 1682651166600@@127.0.0.1@5432@gen_tech@public

-- Create the products table
CREATE TABLE public.products (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    price numeric(10, 2) NOT NULL
);


-- Generate dummy data
WITH product_data AS (
    SELECT '{100.00, 200.00, 500.00, 600.00, 700.00}'::numeric[] AS prices
)
INSERT INTO public.products (name, price)
SELECT 
    'Product ' || n AS name,
    prices[1 + MOD(n, ARRAY_LENGTH(prices, 1))]
FROM 
    product_data, 
    generate_series(1, 1000) AS n;



