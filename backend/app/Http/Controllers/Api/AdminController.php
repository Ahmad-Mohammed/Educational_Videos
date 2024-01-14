<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\ChannelResource;
use App\Http\Resources\VideoResource;
use App\Models\Category;
use App\Models\Channel;
use App\Models\User;
use App\Models\Video;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class AdminController extends Controller
{
    use ApiResponse;

    public function download_cv($file)
    {
        return response()->download(storage_path('/app/public/teacher/cv/' . $file));

    }
    public function videos_unpublished()
    {

        return $this->apiResponse(VideoResource::collection(Video::where('is_published', 0)->get()), 'Ok', JsonResponse::HTTP_OK);
    }
    public function Channl_unapproved()
    {

        return $this->apiResponse(ChannelResource::collection(Channel::where('is_Approved', 0)->get()), 'Ok', JsonResponse::HTTP_OK);
    }
    public function video_delete($id)
    {
        $video = Video::find($id);
        if ($video->image) {
            $exist = Storage::disk('public')->exists("video/image/{$video->image}");
            if ($exist) {
                Storage::disk('public')->delete("video/image/{$video->image}");
            }
        }
        if ($video->video) {
            $exist = Storage::disk('public')->exists("video/video/{$video->video}");
            if ($exist) {
                Storage::disk('public')->delete("video/video/{$video->video}");
            }
        }
        $video->delete();
        return $this->apiResponse(null, 'The video deleted', JsonResponse::HTTP_OK);
    }
    public function video_approve($id)
    {
        $video = Video::find($id);

        $update = ['is_published' => 1];
        Video::where('id', $video->id)->update($update);


        return $this->apiResponse(null, 'The video approveed successfully', JsonResponse::HTTP_OK);
    }
    public function approve_teacher($id)
    {
        $channel = Channel::find($id);
        $update = ['is_Approved' => 1];
        Channel::where('id', $channel->id)->update($update);
        User::create([
            'name'=> $channel->name,
            'email'=> $channel->email,
            'password'=> $channel->password,
            'is_teacher' => 1,
            'channel' => $channel->id,
        ]);


        return $this->apiResponse(null, 'The channel approveed successfully', JsonResponse::HTTP_OK);
    }
    public function store(CategoryRequest $request)
    {

        $categoryName = Str::random() . '.' . $request->image->getClientOriginalExtension();
        Storage::disk('public')->putFileAs('category/image', $request->image, $categoryName);

        $category = Category::create($request->post() + ['image' => $categoryName]);

        if ($category) {
            return $this->apiResponse($category, 'The category Save', JsonResponse::HTTP_CREATED);
        }

        return $this->apiResponse(null, 'The category Not Save', JsonResponse::HTTP_BAD_REQUEST);
    }
    public function destroy_category($name)
    {
        $category = Category::where('name', $name)->first();
        if ($category->image) {
            $exist = Storage::disk('public')->exists("category/image/{$category->image}");
            if ($exist) {
                Storage::disk('public')->delete("category/image/{$category->image}");
            }
        }
        $category->delete();
        return $this->apiResponse(null, 'The category deleted', JsonResponse::HTTP_OK);

    }
    public function destroy_teacher($id)
    {
        $teacher = Channel::find($id);
        if ($teacher->teacher_image) {
            $exist = Storage::disk('public')->exists("teacher/teacher_image/{$teacher->teacher_image}");
            if ($exist) {
                Storage::disk('public')->delete("teacher/teacher_image/{$teacher->teacher_image}");
            }
        }
        if ($teacher->channel_image) {
            $exist = Storage::disk('public')->exists("teacher/channel_image/{$teacher->channel_image}");
            if ($exist) {
                Storage::disk('public')->delete("teacher/channel_image/{$teacher->channel_image}");
            }
        }
        $teacher->delete();
        return $this->apiResponse(null, 'The teacher deleted', JsonResponse::HTTP_OK);

    }
    public function update(CategoryRequest $request, $name)
    {
        $category = Category::where('name',$name)->first();

        $category->update($request->validated());
        if ($request->hasFile('image')) {
            if ($category->image) {
                $exist = Storage::disk('public')->exists("category/image/{$category->image}");
                if ($exist) {
                    Storage::disk('public')->delete("category/image/{$category->image}");
                }
            }
            $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('category/image', $request->image, $imageName);
            $category->image = $imageName;
            $category->save();
        }

        return $this->apiResponse(null, 'The category updated successfully', JsonResponse::HTTP_OK);

    }
}
