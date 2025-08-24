<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EducationalContent extends Model
{
    use HasFactory;

    protected $primaryKey = 'content_id';

    protected $fillable = [
        'title',
        'content',
        'content_type',
        'language',
        'admin_id',  // حقل الربط
    ];

    // علاقة المحتوى بالادمن (صاحب النشر)
    public function admin()
    {
        return $this->belongsTo(Admin::class, 'admin_id');
    }
}
