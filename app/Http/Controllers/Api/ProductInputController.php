<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Requests\ProductInputRequest;
use CodeShopping\Http\Resources\ProductInputResource;
use CodeShopping\Models\Product;
use CodeShopping\Models\ProductInput;

class ProductInputController extends Controller
{

    public function index()
    {
        return ProductInputResource::collection(ProductInput::all());
    }


    public function store(ProductInputRequest $request, Product $product)
    {
        $productId = $product->id;
        $amount = $request->get('amount');

        ProductInput::create(["product_id" => $productId, "amount" => $amount]);
        $product->stock += $amount;
        $product->save();

        return response()->json(new ProductInputResource($product), 201);
    }


    public function destroy(ProductInput $productInput)
    {
        $productInput->delete();
        return response()->json([], 204);
    }
}
