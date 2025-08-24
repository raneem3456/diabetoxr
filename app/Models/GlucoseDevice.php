<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GlucoseDevice extends Model
{
    use HasFactory;

    protected $primaryKey = 'device_id';

    protected $fillable = [
        'model',
        'manufacturer',
        'connection_type',
        'device_type',
    ];

    public function glucoseReadings()
    {
        return $this->hasMany(GlucoseReading::class, 'device_id');
    }
}
