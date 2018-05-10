<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Requests\ProductResquest;
use CodeShopping\Models\Product;

class ProductController extends Controller
{

    public function index()
    {
        return Product::all();
    }


    public function store(ProductResquest $request)
    {
        $product =  Product::create($request->all());
        $product->refresh();
        return $product;
    }


    public function show(Product $product)
    {
        return $product;
    }


    public function update(ProductResquest $request, Product $product)
    {
        $product->fill($request->all());
        $product->save();
        return $product;
        //return response([], 204);
    }


    public function destroy(Product $product)
    {
        $product->delete();
        return response([], 204);
    }
}
