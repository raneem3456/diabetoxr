<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalRecommendation extends Model
{
    use HasFactory;

    protected $primaryKey = 'recommendation_id';
    public $timestamps = false;

    protected $fillable = [
        'patient_id',
        'author_type',
        'author_id',
        'content',
        'created_at',
    ];

    // علاقة مع المريض
    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
}
