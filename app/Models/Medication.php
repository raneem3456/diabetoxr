<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medication extends Model
{
    protected $primaryKey = 'medication_id';

    protected $fillable = [
        'patient_id',
        'medication_name',
        'dosage',
        'frequency',
        'start_date',
        'end_date',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
}
