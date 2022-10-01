<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        $gender = $faker->randomElement(['male', 'female']);
    	foreach (range(1,5) as $index) {
            DB::table('employees')->insert([
                'name' => $faker->name,
                'gender' => $faker->randomElement(['male', 'female']),
                'designation' => $faker->randomElement(['CEO', 'CTO', 'Developer', 'QA', 'HR']),
                'address' => $faker->address,
                'dob' => $faker->date($format = 'Y-m-d', $max = 'now'),
                'joined' => $faker->date($format = 'Y-m-d', $max = 'now')
            ]);
        }
    }
}
