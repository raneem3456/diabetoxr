<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmergencyContact extends Model
{
    protected $primaryKey = 'contact_id';

    protected $fillable = [
        'patient_id',
        'name',
        'relationship',
        'phone_number',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
}
