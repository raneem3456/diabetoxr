<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FamilyMember extends Model
{
    protected $primaryKey = 'family_member_id';
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'patient_id',
        'relationship'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
}
