<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function videos()
    {
        return $this->hasMany(Video::class);
    }
    public function playlists()
    {
        return $this->hasMany(Playlist::class);
    }
    public function tags()
    {
        return $this->hasMany(Tag::class);
    }
}
