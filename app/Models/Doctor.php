<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    protected $primaryKey = 'doctor_id';

    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'license_number',
        'accreditation_authority',
        'specialization',
        'notes',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
