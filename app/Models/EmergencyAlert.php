<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmergencyAlert extends Model
{
    use HasFactory;

    protected $primaryKey = 'alert_id';

    protected $fillable = [
        'patient_id',
        'triggered_at',
        'location',
        'status',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
}
