<?php

use CodeShopping\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 1)
            ->states('admin')
            ->create([
                'name' => 'Admininstrator',
                'email' => 'admin@user.com'
            ]);
        factory(User::class, 20)
            ->states('client')
            ->create();
    }
}
