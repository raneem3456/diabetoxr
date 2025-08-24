<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PermissionSetting extends Model
{
    use HasFactory;

    protected $primaryKey = 'permission_id';

    protected $fillable = [
        'patient_id',
        'family_member_id',
        'glucose_access',
        'medication_access',
        'appointment_access',
        'emergency_access',
        'lifestyle_access',
        'notes_access',
        'messages_access',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function familyMember()
    {
        return $this->belongsTo(FamilyMember::class);
    }
}
