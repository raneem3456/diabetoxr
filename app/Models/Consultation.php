<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consultation extends Model
{
    use HasFactory;

    protected $primaryKey = 'consultation_id';

    protected $fillable = [
        'patient_id',
        'doctor_id',
        'start_time',
        'end_time',
        'notes',
        'consult_type',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
}
