<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    use ApiResponse;

    public function videoComments($id)
    {

        return $this->apiResponse(CommentResource::collection(Comment::where('video_id', $id)->get()), 'Ok', JsonResponse::HTTP_OK);
    }
}
