<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reminder extends Model
{
    use HasFactory;

    protected $primaryKey = 'reminder_id';

    protected $fillable = [
        'patient_id',
        'title',
        'description',
        'reminder_time',
        'type',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
}
