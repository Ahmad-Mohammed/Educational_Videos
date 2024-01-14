<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PlaylistResource;
use App\Http\Resources\VideoResource;
use App\Models\Playlist;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PlaylistController extends Controller
{
    use ApiResponse;

    public function index($id)
    {
        return $this->apiResponse(PlaylistResource::collection(Playlist::where('channel_id', $id)->get()), 'Ok', JsonResponse::HTTP_OK);
    }
    public function show($title)
    {
        $playlist = Playlist::where('title', $title)->first();
        if ($playlist) {
            return $this->apiResponse(new PlaylistResource($playlist), 'Succeces', JsonResponse::HTTP_OK);
        } else {

            return $this->apiResponse(null, 'The playlist Not Found', JsonResponse::HTTP_NOT_FOUND);
        }
    }
}
