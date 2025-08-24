<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LifestyleTracking extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'date',
        'sleep_hours',
        'steps_count',
        'notes',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id', 'user_id');
    }
}
