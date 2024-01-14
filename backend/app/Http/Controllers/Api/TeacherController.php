<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TeacherResource;
use App\Models\Channel;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    use ApiResponse;

    // public function index()
    // {

    //     return $this->apiResponse(TeacherResource::collection(Channel::all()), 'Ok', JsonResponse::HTTP_OK);
    // }
}
