<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $primaryKey = 'appointment_id';

    protected $fillable = [
        'patient_id',
        'doctor_name',
        'appointment_date',
        'appointment_time',
        'reason',
        'notes',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
}
