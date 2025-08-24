<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GlucoseReading extends Model
{
    protected $primaryKey = 'reading_id';

    protected $fillable = [
        'patient_id',
        'reading_value',
        'reading_time',
        'notes',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
}
