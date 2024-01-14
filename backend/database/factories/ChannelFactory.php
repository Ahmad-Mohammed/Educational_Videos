<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Channel>
 */
class ChannelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'teacher_image' => '4.jpg',
            'channel_image' => 'CKmIc07fJAsip0Dm.png',
            'about' =>fake()->paragraph(1),
            'age' =>fake()->numberBetween($min = 25, $max = 40),
            'phone' =>fake()->numberBetween($min = 25, $max = 40),
            'address' =>fake()->paragraph(1),
            'competence' =>fake()->word(),
            'gender' =>fake()->boolean(),
            'is_Approved' =>fake()->boolean(),
            'cv' => 'c.pdf',
            'perthday' =>fake()->date(),
            
             'email' => fake()->unique()->safeEmail(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 
        ];
    }
}
