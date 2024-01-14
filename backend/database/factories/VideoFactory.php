<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Video>
 */
class VideoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->name(),
            'description' => fake()->paragraph(1),
            'channel_id' => rand(1, 10),
            'views' => fake()->numberBetween($min = 7, $max = 20),
            'image' => '6hNxjrwawiEKb1xN.jpg',
            'playlist_id' => rand(1, 10),
            'is_published' => fake()->boolean(),
            'video' => 'ss.mp4',
        ];
    }
}
