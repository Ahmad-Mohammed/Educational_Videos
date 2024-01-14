<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\VideoRequest;
use App\Http\Resources\VideoResource;
use App\Models\Video;
use Illuminate\Support\Str;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class VideoController extends Controller
{
    use ApiResponse;
    public function videos_published()
    {

        return $this->apiResponse(VideoResource::collection(Video::where('is_published' , 1)->with('categories', 'tags')->get()), 'Ok', JsonResponse::HTTP_OK);
    }

    public function show($id)
    {
        $video = Video::find($id);
        if ($video) {
            return $this->apiResponse(new VideoResource($video), 'Succeces', JsonResponse::HTTP_OK);
        } else {

            return $this->apiResponse(null, 'The vid Not Found', JsonResponse::HTTP_NOT_FOUND);
        }
    }

    public function store(VideoRequest $request)
    {

        $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
        Storage::disk('public')->putFileAs('video/image', $request->image, $imageName);

        $videoName = Str::random() . '.' . $request->video->getClientOriginalExtension();
        Storage::disk('public')->putFileAs('video/video', $request->video, $videoName);



        $video = Video::create($request->post() + ['image' => $imageName , 'video' => $videoName]);

        $video->categories()->sync($request->categoryId);

        if ($video) {
            return $this->apiResponse($video, 'The video Save', JsonResponse::HTTP_CREATED);
        }

        return $this->apiResponse(null, 'The video Not Save', JsonResponse::HTTP_BAD_REQUEST);
    }
    public function views($id)
    {


        $video = Video::find($id);
        $update = ['views' => $video->views + 1];
        Video::where('id', $video->id)->update($update);

        return $this->apiResponse(null, 'Done', JsonResponse::HTTP_BAD_REQUEST);
    }
    public function latest()
    {
        return $this->apiResponse(VideoResource::collection(Video::latest()->take(4)->get()), 'Ok', JsonResponse::HTTP_OK);
    }
}
