<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CriticalAlert extends Model
{
    protected $primaryKey = 'alert_id';

    protected $fillable = [
        'patient_id',
        'alert_type',
        'description',
        'alert_time',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
}
