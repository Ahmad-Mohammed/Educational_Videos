<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ChannelRequest;
use App\Http\Resources\ChannelResource;
use App\Models\Channel;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class ChannelController extends Controller
{
    use ApiResponse;


    public function index()
    {

        return $this->apiResponse(ChannelResource::collection(Channel::where('is_Approved', 1)->with('playlists','videos', 'tags')->get()), 'Ok', JsonResponse::HTTP_OK);
    }
    public function show($name)
    {

        $teacher = Channel::where('name', $name)->first();
        if ($teacher) {
            return $this->apiResponse(new ChannelResource($teacher), 'Succeces', JsonResponse::HTTP_OK);
        } else {

            return $this->apiResponse(null, 'The vid Not Found', JsonResponse::HTTP_NOT_FOUND);
        }
    }
    public function store(ChannelRequest $request)
    {

        $teacher_image = Str::random() . '.' . $request->teacher_image->getClientOriginalExtension();
        Storage::disk('public')->putFileAs('teacher/teacher_image', $request->teacher_image, $teacher_image);

        $channel_image = Str::random() . '.' . $request->channel_image->getClientOriginalExtension();
        Storage::disk('public')->putFileAs('teacher/channel_image', $request->channel_image, $channel_image);

        $cv = Str::random() . '.' . $request->cv->getClientOriginalExtension();
        Storage::disk('public')->putFileAs('teacher/cv', $request->cv, $cv);

        $channel = Channel::create($request->post() + ['teacher_image' => $teacher_image, 'channel_image' => $channel_image, 'cv' => $cv]);
        if ($channel) {
            return $this->apiResponse($channel, 'The channel Save', JsonResponse::HTTP_CREATED);
        }

        return $this->apiResponse(null, 'The channel Not Save', JsonResponse::HTTP_BAD_REQUEST);
    }
}
