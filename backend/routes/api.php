<?php

use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ChannelController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\PlaylistController;
use App\Http\Controllers\Api\TeacherController;
use App\Http\Controllers\Api\VideoController;
use App\Models\Channel;
use App\Models\Comment;
use App\Models\Playlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
});
Route::get('/videos', [VideoController::class, 'videos_published']);
Route::get('/latest_videos', [VideoController::class, 'latest']);
Route::get('/video/{id}', [VideoController::class, 'show']);
Route::post('/videos', [VideoController::class, 'store']);
Route::get('/video/view/{id}', [VideoController::class, 'views']);
// Route::middleware('jwt.verify')->group(function () {
//     Route::get('/videos', [VideoController::class, 'index']);
//     Route::get('/video/{id}', [VideoController::class, 'show']);
//     Route::post('/videos', [VideoController::class, 'store']);
// });

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/category/{name}', [CategoryController::class, 'show']);
Route::get('/teachers', [ChannelController::class, 'index']);
Route::get('/teacher/{name}', [ChannelController::class, 'show']);
Route::get('/playlists/{id}', [PlaylistController::class, 'index']);
Route::get('/playlist/{title}', [PlaylistController::class, 'show']);
Route::post('/channels', [ChannelController::class, 'store']);


Route::get('/comments/video/{id}', [CommentController::class, 'videoComments']);


Route::post('/create/category', [AdminController::class, 'store']);
Route::get('/delete/category/{name}', [AdminController::class, 'destroy_category']);
Route::post('/update/category/{name}', [AdminController::class, 'update']);


Route::get('/channels/unappeoved', [AdminController::class, 'Channl_unapproved']);
Route::get('/delete/teacher/{id}', [AdminController::class, 'destroy_teacher']);
Route::get('/approve/teacher/{id}', [AdminController::class, 'approve_teacher']);

Route::get('/videos/unpublished', [AdminController::class, 'videos_unpublished']);
Route::get('/video/delete/{id}', [AdminController::class, 'video_delete']);
Route::get('/video/approve/{id}', [AdminController::class, 'video_approve']);

Route::get('/download/cv/{file}', [AdminController::class, 'download_cv']);


// Route::get('uploads/{file}', function (string $file) {
//     return Storage::download($file, $file);
// });
//     // ->where(['file' => '\w[0-9a-zA-Z-_.]+'])
//     // ->middleware('signed');
