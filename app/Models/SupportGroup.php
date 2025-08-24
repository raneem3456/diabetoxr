<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupportGroup extends Model
{
    protected $primaryKey = 'group_id';

    protected $fillable = [
        'name',
        'description'
    ];

    public function members()
    {
        return $this->hasMany(SupportGroupMember::class, 'group_id');
    }
}
