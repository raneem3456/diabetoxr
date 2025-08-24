<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Admin;

class User extends Model
{
    protected $primaryKey = 'user_id';

    public $timestamps = false;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'password_hash',
        'role',
        'created_at',
        'last_login',
    ];

    protected $hidden = [
        'password_hash',
    ];

    public function admin()
    {
        return $this->hasOne(Admin::class, 'user_id', 'user_id');
    }
}
