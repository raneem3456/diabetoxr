<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $primaryKey = 'patient_id';
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'diabetes_type',
        'diagnosis_date',
        'height',
        'weight',
        'medical_history',
        'hba1c'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
