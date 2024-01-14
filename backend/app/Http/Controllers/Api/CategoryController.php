<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    use ApiResponse;

    public function index()
    {

        return $this->apiResponse(CategoryResource::collection(Category::all()), 'Ok', JsonResponse::HTTP_OK);
    }
    public function show($name)
    {
        $category = Category::where('name', $name)->first();
        if ($category) {
            return $this->apiResponse(new CategoryResource($category), 'Succeces', JsonResponse::HTTP_OK);
        } else {

            return $this->apiResponse(null, 'The Category Not Found', JsonResponse::HTTP_NOT_FOUND);
        }
    }
    
}
