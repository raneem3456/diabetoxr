<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupportGroupMember extends Model
{
    public $timestamps = false;

    protected $primaryKey = null; // لأنه مفتاح مركب

    public $incrementing = false;

    protected $fillable = [
        'group_id',
        'patient_id',
        'joined_at',
    ];

    public function group()
    {
        return $this->belongsTo(SupportGroup::class, 'group_id');
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
}
