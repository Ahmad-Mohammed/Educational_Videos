<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ChannelResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'teacher_image' => $this->teacher_image,
            'channel_image' => $this->channel_image,
            'about' => $this->about,
            'age' => $this->age,
            'phone' => $this->phone,
            'address' => $this->address,
            'competence' => $this->competence,
            'gender' => $this->gender==0? 'Male':'Femal',
            'cv' => $this->cv,
            'perthday' => $this->perthday,
            'videos' => $this->whenLoaded(
                'videos',
                $this->videos,
                []
            ),
            'playlists' => $this->whenLoaded(
                'playlists',
                $this->playlists,
                []
            ),
            'tags' => $this->whenLoaded(
                'tags',
                $this->tags,
                []
            ),

        ];
    }
}
