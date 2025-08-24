<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HealthTip extends Model
{
    protected $primaryKey = 'tip_id';

    protected $fillable = [
        'title',
        'content',
        'category',
        'image_url',
    ];
}
