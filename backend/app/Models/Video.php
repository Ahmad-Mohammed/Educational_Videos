<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'description', 'image', 'video', 'playlist_id', 'channel_id'];
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'video_category');
    }
    public function tags()
    {
        return $this->hasMany(Tag::class);
    }
    public function playlist()
    {
        return $this->belongsTo(Playlist::class);
    }
    public function channel()
    {
        return $this->belongsTo(Channel::class);
    }
}
