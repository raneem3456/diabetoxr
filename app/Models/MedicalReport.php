<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalReport extends Model
{
    use HasFactory;

    protected $primaryKey = 'report_id';

    protected $fillable = [
        'patient_id',
        'report_date',
        'report_text',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id', 'patient_id');
    }
}
